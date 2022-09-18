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


> /api/v1/anime/:anime_name
>
>Returns list of quotes from the specified anime.


> /api/v1/character/:character_name
>
>Returns list of quotes from the specified character.



### TechStack
- NodeJs
- Express
- Mongoose
- Body Parser

### Credits
- Less real for their crowdsourced list of quotes.
