# Moe-Quotes-Api

Rest API built with NodeJs and Express to serve random quotes from anime.

Database consists of 7000+ quotes crowdsourced from less real website.

### Features
- Get random quotes from anime.
- Get quotes by quote Id.
- Get quote by character name.
- Get quote by anime name.

### Routes

> /api/v1/
>
>Returns a random anime quote.

> /api/v1/id?quoteId=6313232ade0fc748a34b6b42
>
>Returns a quote ewith specified id.

> /api/v1/anime/?anime=Naruto
>
>Returns list of quotes from the specified anime.

> /api/v1/character/?character=Tenma Tsukamoto
>
>Returns list of quotes from the specified character.



### TechStack
- NodeJs
- Express
- SQL
- Body Parser

### Credits
- Less real for their crowdsourced list of quotes.
