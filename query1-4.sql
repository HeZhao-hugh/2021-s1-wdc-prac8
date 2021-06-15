SELECT address
from address
INNER JOIN store
ON address.address_id = store.address_id
INNER JOIN inventory
ON store.store_id=inventory.store_id
INNER JOIN film
ON inventory.film_id=film.film_id
WhERE title='TWISTED PIRATES'
LIMIT 0,1;