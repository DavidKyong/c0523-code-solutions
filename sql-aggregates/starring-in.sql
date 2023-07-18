select "genres"."name" as "genre",
      count("actorId")
  from "castMembers"
  join "filmGenre" using ("genreId")
  join "films" using ("filmId")
  join "castMembers" using ("actorId")
  join "genres" using ("genreId")
group by


select "genres"."name" as "genre",
 count("actorId")
  from "genres"
  join "filmGenre" using ("filmId")
  join "castMembers" using (")
