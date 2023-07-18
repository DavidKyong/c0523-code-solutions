import pg from 'pg';
import express from 'express';
import errorMiddleware from './error-middleware';
import ClientError from './client-error';

// only create ONE pool for your whole server
const db = new pg.Pool({
  connectionString: 'postgres://dev:dev@localhost/studentGradeTable',
  ssl: {
    // Allow non-SSL traffic to localhost
    rejectUnauthorized: false,
  },
});

const app = express();
app.use(express.json());

app.listen(8000, () => {
  console.log('Listening on port 8000');
});

app.get('/api/grades/:gradeId', async (req, res, next) => {
  try {
    // validate the "inputs" FIRST
    const gradeId = Number(req.params.gradeId);
    if (!Number.isInteger(gradeId) || gradeId <= 0) {
      // there is no way that a matching grade could be found
      // so we immediately respond to the client and STOP the code
      // with a return statement
      throw new ClientError(400, `${gradeId} must be a positive number`);
    }
    // Ok, the input is reasonable, time to query the database.
    const sql = `
      select *
        from "grades"
      where "gradeId" = $1
    `;
    // 👆 We are NOT putting the user input directly into our query
    const params = [gradeId];
    // 👆 instead, we are sending the user input in a separate array.
    /*
     * Review the documentation on parameterized queries here:
     * https://node-postgres.com/features/queries#parameterized-query
     * You'll be using this technique to prevent SQL injection attacks.
     *
     * https://www.youtube.com/watch?v=_jKylhJtPmI
     */
    const result = await db.query(sql, params);
    // The query succeeded, even if nothing was found.
    // The Result object will include an array of rows.
    // See the docs on results: https://node-postgres.com/apis/result
    const grade = result.rows[0];
    if (!grade) {
      throw new ClientError(404, `Cannot find grade with gradeId ${gradeId}`);
      // the specific grade was found in the database, yay!
    }
    // We could not have known ahead of time without actually querying the db,
    // but the specific grade being requested was not found in the database.
    res.json(grade);
  } catch (err) {
    // the query failed for some reason
    // possibly due to a syntax error in the SQL statement
    // print the error to STDERR (the terminal) for debugging purposes
    // respond to the client with a generic 500 error message
    next(err);
  }
});

app.get('/api/grades', async (req, res, next) => {
  try {
    const sql = `
      select *
        from "grades"
    `;
    const result = await db.query(sql);
    const [grade] = result.rows;
    res.status(200).json(grade);
  } catch (error) {
    next(error);
  }
});

app.post('/api/grades', async (req, res, next) => {
  try {
    const { name, course, score } = req.body;
    if (!req.body.name || !req.body.course || !req.body.score) {
      throw new ClientError(400, 'name/course/score are a required field');
    }

    const sql = `
      insert into "grades" ("name", "course", "score")
      values ($1, $2, $3)
      returning *;
    `;
    const values = [name, course, score];
    const result = await db.query(sql, values);
    const grade = result.rows;
    res.status(201).json(grade);
  } catch (error) {
    next(error);
  }
});

app.put('/api/grades/:gradeId', async (req, res, next) => {
  try {
    const gradeId = Number(req.params.gradeId);
    if (gradeId < 0 || gradeId > 100) {
      throw new ClientError(400, 'integer must be from 0 to 100');
    }
    const { name, course, score } = req.body;
    if (!req.body.name || !req.body.course || !req.body.score || !gradeId) {
      throw new ClientError(400, 'content/integer are a required field');
    }
    const sql = `
      update "grades"
        set "name" = $2,
         "course" = $3,
         "score" = $4
         where "grades"."gradeId" = $1
         returning *;
    `;
    const values = [gradeId, name, course, score];
    const [result] = await db.query(sql, values);

    if (!result) {
      throw new ClientError(404, 'target grade may not exist in the database');
    }

    const grade = result.rows;
    res.status(201).json(grade);
  } catch (error) {
    next(error);
  }
});

app.delete('/api/grades/:gradeId', async (req, res, next) => {
  try {
    const gradeId = Number(req.params.gradeId);
    if (gradeId < 0 || gradeId > 100) {
      throw new ClientError(400, 'Integer must be from 0 to 100');
    }
    const sql = `
      delete
        from "grades"
        where "grades"."gradeId" = $1
        returning *;
    `;
    const params = [gradeId];
    const [deleted] = await db.query(sql, params);

    if (!deleted) {
      throw new ClientError(404, 'target grade may not exist in the database');
    }
    const grade = deleted.rows;
    res.status(204).json(grade);
  } catch (error) {
    next(error);
  }
});

app.use(errorMiddleware);
