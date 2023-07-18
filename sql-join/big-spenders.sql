select "payments"."amount",
      "customers"."firstName",
      "customers"."lastName"
  from "payments"
  join "customers" using ("customerId")
  limit 10;
