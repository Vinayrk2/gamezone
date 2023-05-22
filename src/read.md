[1] : Api folder for the games data, game.js file contains all game data.
      Add new ? then copy the {} one of that and add ',' before ']' and just paste and edit the details...

[2] : All link are in a App.jsx
      if want to use 'a' tag then just use :

        <Link to="path"> </Link>

        instead of <a href="path"></a>
    
[3] : Do make ensure that all tags must close properly, do not use Capicalized word for tag, use camelcase for the property such as:

    => max-width :: maxWidth
    => background-color :: backgroundColor