# NAKA'S BIRTHDAY GAME SHOW NIGHT!
Welcome to Naka's Game Show Night!  I'm your host, Naka, and I'll be asking you questions!
## NAKA'S TODOs
- Daily Double!  Everyone loves to double their points!
- Maybe make the scores a number box so I can manually adjust?
- Add a cookie to track the scores.
## Application Guide
Here's a quick guide on how to use the application
### Adding new questions
To add new questions, do the following:
1) Copy and rename one of the files in `/src/questions` folder
2) Replace the questions and topic with your own
3) Import the topics and questions you created in Step 2 to the `/src/components/JeopardyBoard.svelte` file
4) Set the currentTopic and currentCards to the ones you imported in Step 3.
It's as simple as that!
## Hosting Guide
If you're the host, simply open a terminal/console and type `npm run dev` and press enter.  Click the link that has `localhost` in it when it appears.  The game should load in your browser from there!
***BE WARNED***
All data is transient!!!! If you refresh the page, scores are reset to 0. I may add a cookie system to fix this in the future.
### Hosting Steps
Here's the step by step guide to hosting
1) Ask whoever is leading the game which question they want
2) Click on that card
3) Ask the question
    - NOTE: PLAYERS SHOULDN'T BUZZ IN UNTIL YOU FINISH READING THE ENTIRE PROMPT!
4) If the answer is correct
    1) Click the screen above the player's scores to reveal the answer
    2) Click the + button for the player that answered correctly to add the appropriate number of points
5) If the answer is incorrect
    1) Click the - button for the player that answered incorrectly to subtract the appropriate number of points
6) Play until the board is cleared!

## Pro Tips
- If you accidentally grey-out a card that shouldn't be greyed (not sure how you'd do this), you can right click it to toggle its state
- If you forgot to add points to someone's score, you can still do it from the Category Selection screen, BUT NOT IF YOU CLICK A QUESTION WITH A DIFFERENT POINT VALUE