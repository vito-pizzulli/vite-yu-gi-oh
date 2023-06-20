# Vite Yu-Gi-Oh

## Milestone 1
Create un nuovo progetto utilizzando Vite e Vue 3 e definite i componenti necessari per strutturare il layout come da screenshot allegato.
Al caricamento della pagina, effettuate una chiama ajax all'API di Yu Gi Oh: https://db.ygoprodeck.com/api/v7/cardinfo.php e con i dati restituiti, stampate una card per ogni carta.

### Bonus
Creare un componente loader da visualizzare fintantoché i risultati non sono pronti.

## Milestone 2
Continuate a lavorare nella stessa repo di ieri e aggiungete una select per filtrare i risultati in base all’archetipo.
Le option della select devono essere popolate dinamicamente chiamando questo endpoint dell'api:
https://db.ygoprodeck.com/api/v7/archetypes.php.
Quando l'utente seleziona un valore dalla lista, viene effettuata una chiamata alle API con l'archetipo selezionato.

### Bonus
Creare un componente che mostri il numero totale di risultati ottenuti.

### Documentazione
https://ygoprodeck.com/api-guide/