# NAKA'S BIRTHDAY GAME SHOW NIGHT!
Welcome to Naka's Birthday Game Show Night!  I'm your host, Naka, and I'll be asking you dumb questions!

# NAKA'S TODOs
- Double Jeopardy.  Everyone loves the Double Jeopardy!
- Configure players from inside the game.
- Maybe make the scores a number box so I can manually adjust?

## Guide
Here's a quick guide on how to use the application
### Adding new questions
To add new questions, do the following:
1) Copy and rename one of the files in `/src/questions` folder
2) Replace the questions and topic with your own
3) Import the topics and questions you created in Step 2 to the `/src/components/JeopardyBoard.svelte` file
4) Set the currentTopic and currentCards to the ones you imported in Step 3.
It's as simple as that!
### Hosting
If you're the host, simply run `npm run dev` in the console and open the link.  The game should start.
All data is transient, so if you refresh the page, scores are reset to 0. Be careful!  I may add a cookie system to fix this in the future.

Here's the step by step guide to hosting
1) Ask whoever is leading the game which question they want
2) Click on that card
3) Ask the question
    - NOTE: PLAYERS SHOULDN'T BUZZ IN UNTIL YOU FINISH READING THE ENTIRE PROMPT!
4) If the answer is correct
    1) Click the the space between the player's scores and the question to reveal the answer
    2) Click the + button for the player that answered correctly to add the appropriate number of points
5) If the answer is incorrect
    1) Click the - button for the player that answered incorrectly to subtract the appropriate number of points
6) Play until the board is cleared!

## Pro Tips
- If you accidentally grey-out a card that shouldn't be greyed (not sure how you'd do this), you can right click it to toggle its state