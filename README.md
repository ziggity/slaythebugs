
## Welcome to the game, Slay the Hacker! (Computer science edition)

# Yup! You guessed it, this game is all about how to stop computer hacks and how to squash them, stop them in their tracks, hackers show up and try to ruin your day with DDOS attacks, or similar, and you go through the game collecting amazing cards that have helpful abilities to thwart your enemies. 

# Technology: I'll be using React, HTML, CSS, JS, and other libraries such as draggable elements, and sounds from .org, and free AI images. 

# Dev plan: A rough overview of how to build this slay the spire clone 

:white_large_square: Build a Splash page (landing page) with 4 options (Play, View Collection, High scores, Manual)

:white_check_mark: Generate AI images for background images, cards, characters, player avatars, and enemies. 

:white_large_square: Create basic main page of game, showing nav ba at top with their loot, health bar, money etc. This is header and footer component. 

:white_large_square: Create a deck and Create all the cards for the player to acquire: Decks are just a custom ArrayList component of cards with simple methods like getTopCard(), shuffle(), containsPowers(), and each card has a cost (0-3), and an effect and/or attack ability, and a rarity value (Common, Uncommon, Rare, Epic, Legendary)

:white_large_square: Implement the turn system: A turn is made up of discarding your hand, enemies utilize attacks (these are actions in a queue), draw some cards, just handle all the things that occur in a Queue of actions that need to be executed sequentially.

:white_large_square: Draw random cards from the deck every turn: The deck is shuffled at the start of the game- draw the top card of the deck. When combat starts, we create a copy of your deck and shuffle it using Collections.Shuffle and make that the draw pile. This is to maintain the immutability of your original deck, as some cards are curses and add -1 unplayable cards to your hand clogging it up. Some of these cards don’t persist to the next enemy match. 

:white_large_square: Make cards move (draggable react Library maybe?): React spring or something similar with transform values x,y and determine a hit box of enemy to trigger the card effect and discard the card from hand. 

:white_large_square: Make cards work: each card is a separate object (JSON values). It holds some basic info like rarity, type, cost, and power(attack dmg), If I add modifiers then dynamic values like * multiplicative values modifier. block cards (these are affected by Powers). 

:white_large_square: Create a use() function which is where the card has all its abilities. 

:white_large_square: Determine winning game state and allocate winnings from chests have player beagle to click on the items or just show them and move them to inventory top nav bar shows loot collected. 

:white_large_square: stretch goals: Build a tree of locations with 3 starting points for teh player to choose which path they want to go, with nodes of enemies, chests, and random locations mysterious locations etc. 

:white_large_square: Build a SQL db with user login and password, and high scores they've had, and card configurations they got. 

:white_large_square: Generate procedural locations and procedural bosses with amazing skills. 





### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

#
### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)


