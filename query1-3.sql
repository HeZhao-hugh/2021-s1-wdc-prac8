SELECT first_name,last_name,rental_date
from rental
INNER JOIN customer
ON rental.customer_id = customer.customer_id
where return_date is NULL
ORDER BY rental_date
LIMIT 0,1;