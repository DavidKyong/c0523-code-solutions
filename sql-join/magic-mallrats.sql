select "firstName"
      "lastName"
  from "customers"
  join "films" using ("filmId")
  join "store" using ("storeId")
  where "films"."title" = 'Magic Mallrats';
