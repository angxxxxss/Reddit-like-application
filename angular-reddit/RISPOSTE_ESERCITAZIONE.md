# RISPOSTE ESERCITAZIONE

1. Funzionalita aggiunte all'AppComponent
- Memorizzazione di una lista di articoli.
- Form per inserire un nuovo titolo e link.
- Metodo `addArticle` per creare e aggiungere articoli.
- Passaggio dei dati al componente figlio tramite `@Input`.
- Ordinamento dinamico degli articoli per punteggio.

2. Blocco HTML con label/input del link
- `label`: descrive il campo e migliora accessibilita e usabilita.
- Attributo `for`: collega la label all'input tramite l'id.
- `input`: raccoglie il valore digitato dall'utente.
- Attributo `name`: identifica il campo all'interno della form.

3. Bottone con (click)="addArticle()"
- `button`: elemento che attiva un'azione nella pagina.
- Evento `click`: segnala che l'utente ha premuto il bottone.
- `addArticle()`: metodo del componente che gestisce l'evento e aggiunge l'articolo.

4. Cos'e un evento?
Un evento e un segnale generato dal browser quando avviene qualcosa, ad esempio un click, una digitazione o il submit di una form.

5. Cos'e un gestore di evento?
E' la funzione che si esegue in risposta a un evento, per esempio il metodo richiamato dal click del bottone.

6. Analisi del metodo addArticle(title: HTMLInputElement, link: HTMLInputElement): boolean
- I parametri sono di tipo `HTMLInputElement` e rappresentano gli input del template.
- Il valore si legge con `.value`, ad esempio `title.value`.
- `${title.value}` inserisce nel testo la stringa digitata dall'utente.
- Non si usa `${title}` perche `title` e un oggetto input, non il valore testuale.

7. Spiegazione di #newtitle, #newlink e passaggio al metodo
- `#nomevariabile` crea una variabile di template che punta a un elemento HTML.
- Una variabile di template rende accessibile l'elemento nel template.
- Il valore viene passato al metodo del componente attraverso il binding dell'evento click.

8. Cos'e il binding?
E' il collegamento tra template e componente.
- Binding input -> variabile di template: l'input ha `#newtitle` e `#newlink` per leggere i valori.
- Binding azione -> evento: `(click)` lega il click del bottone all'esecuzione di `addArticle()`.
