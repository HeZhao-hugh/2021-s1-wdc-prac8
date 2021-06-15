SELECT first_name,last_name,rental_date
from rental
INNER JOIN customer
ON rental.customer_id = customer.customer_id
ORDER BY rental_date
LIMIT 1,1;