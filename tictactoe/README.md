# Classic Tic Tac Toe
Classic game and classic coding project, the game is implemented completing with front-end code.

**Link to project:** https://diannedejesus.github.io/knowledge-aquisition/tictactoe/

![expample of how tictactoe game works](https://github.com/diannedejesus/knowledge-aquisition/blob/main/tictactoe/tictactoe.gif)

## How It's Made:

**Tech used:** HTML, CSS, and JavaScript

The layout was done with grid to achieve even squares that do not distort when resizing. CSS is used so the player can visualize how their move will look on the board. The rest is done in javascript. I built a class to handle the main mechanics of the game (tracking current player, tracking board state, checking for a winner, reseting board saved in class, validating moves and setting character to be used for players). Then I utilized the class to implement the game on the created board setting the players to the classic X's and O's, displaying current player and displaying the end game message. Also added a reset button to that refresh the page to clear the board.

## Optimizations
*(optional)*

If I had the time to keep working on the project, I would have added to the class a way to handle a wider varieties of player icons to make the game more visual and different. Also would have modified the boards whitespace to make the interfase more pleasing on mobile. I would refactored the code for clarity and add more funcionality like tracking player wins.

## Lessons Learned:

I found out that making a perfectly square grid that maintains its aspect ratio can be a challenge using floats, I would need to add some media queries to account for different screeens aspect ratio, which is why I opted for using a grid layout. I could have just used a table but wanted the page to be more semanticly relevant. The class was fun to make and use, it is a very handy tool for these kinds of projects making the develop and use of a tool so much simpler to use and understand.

## Examples:
Take a look at these couple examples that I have in my own portfolio:

**Coin Flipper:** https://github.com/alecortega/palettable

**Twitter Battle:** https://github.com/alecortega/twitter-battle

**Patch Panel:** https://github.com/alecortega/patch-panel



