select "releaseYear"
  from "films"
  join "filmGenre" using ("filmId")
  where "title" = 'Boogie Amelie';
