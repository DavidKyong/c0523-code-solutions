select "countries"."name",
    count("cities"."name") as "cityCount"
    from "cities"
    join "countries" using ("countryId")
    group by "countries"."name";
