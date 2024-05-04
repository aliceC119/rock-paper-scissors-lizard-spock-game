# Rock Paper Scissors Lizard Spock Game 
<img width="863" alt="Screenshot 2024-05-04 at 12 37 00" src="https://github.com/aliceC119/rock-paper-scissors-lizard-spock-game/assets/162838985/4042cf46-1b76-40cf-bc73-40e33c3b42f9">

+ This game was created using HTML, CSS and Javascript. The site will attract the audience interested in the Rock Paper Scissors Lizard and Spock game. The user will play this game against the computer, this game is a fully responsive JavaScript game that enable users and the computer to choose from the 5 given options when playing the game. The results of the game are either win, lose or draw.

# Features

**The Rock Paper Scissors Lizard Spock Game Logo and Heading**
  - Located at the top of the page. The logo and heading are easy for users to see. The logo also gives users a quick idea of how to win the game. Below this are the rules of the game and a description of how to win the game. This is to help the user understand how the game works.
<img width="1038" alt="Screenshot 2024-05-04 at 16 49 27" src="https://github.com/aliceC119/rock-paper-scissors-lizard-spock-game/assets/162838985/2895be62-370b-459b-8af3-d518774d06cb">

**The Game Area**
  - This section allows the user to play the game.
The two graphs of the player and the computer are displayed here to show the user the option chosen by the player and the one chosen by the computer.
<img width="919" alt="Screenshot 2024-05-04 at 10 20 54" src="https://github.com/aliceC119/rock-paper-scissors-lizard-spock-game/assets/162838985/38d05b96-eded-4317-92d1-50560a084b5a">

**The Moves Area**
  - This section shows the number of moves in the game. The default is 10 moves. One move is subtracted after each click. When there are no more moves left, the result of the game is displayed on the next page.
<img width="402" alt="Screenshot 2024-05-04 at 10 39 56" src="https://github.com/aliceC119/rock-paper-scissors-lizard-spock-game/assets/162838985/ebd06e45-a6c8-453a-8490-f4c5927022de">

**The Choice Area**
  - This section allows users to select a button to play the game. Users can choose from the following 5 options: Rock, Paper, Scissors, Lizard and Spock.
<img width="954" alt="Screenshot 2024-05-04 at 10 45 24" src="https://github.com/aliceC119/rock-paper-scissors-lizard-spock-game/assets/162838985/14a36caa-dba4-4291-945d-9f662c8db3c6">

**The Score Area**
  - This section shows the options chosen by the player and the computer, and the relative scores are also calculated and displayed.
  - The three given results will be displayed after each click. The 3 following results are: You Win!, You Lose! and It's a Draw!.
  - Users can also click the reset button at any time during the game.
<img width="552" alt="Screenshot 2024-05-04 at 10 56 56" src="https://github.com/aliceC119/rock-paper-scissors-lizard-spock-game/assets/162838985/7d346eb2-e2a0-4fa4-9c3e-a95fb406ec09">

**The Result Area**
  - This section displays the result of the game.
Depending on the outcome of the game, 3 results will be displayed: "The Winner is Computer", "The Winner is You", and "It's a Tie Game".
  - Users can reset the game by clicking the reset button.
<img width="549" alt="Screenshot 2024-05-04 at 11 03 47" src="https://github.com/aliceC119/rock-paper-scissors-lizard-spock-game/assets/162838985/3a7c6e2e-8b1e-494e-9cd7-a8dbcc003525">

  # Testing

  **Validator Testing**
  + HTML
    - No errors were found when passing through the official https://validator.w3.org/
  + CSS
    - No errors were found when passing through the official https://jigsaw.w3.org/css-validator/
  + JavaScript
    - No errors were found when passing through the offical https://jshint.com/
      - The following metrics were returned:
      - There are 4 functions in this file.
      - Function with the largest signature takes 2 arguments, while the median is 0.5.
      - Largest function has 20 statements in it, while the median is 8.
      - The most complex function has a cyclomatic complexity value of 17 while the median is 4.
      - Two unused variables are found: playGame & clearDisplay. However these two variables are being used in HTML.
        <img width="893" alt="Screenshot 2024-05-04 at 11 24 25" src="https://github.com/aliceC119/rock-paper-scissors-lizard-spock-game/assets/162838985/06fc2278-0d23-45c4-b4eb-975e9855062b">
        <img width="221" alt="Screenshot 2024-05-04 at 11 24 15" src="https://github.com/aliceC119/rock-paper-scissors-lizard-spock-game/assets/162838985/70fbde53-3fcc-4513-a177-12ebdc0f225f">
  + Accessibility
      - I confirmed that the colors and fonts chosen are easy to read and accessible by running it through lighthouse on devtools
  <img width="721" alt="Screenshot 2024-05-04 at 09 54 06" src="https://github.com/aliceC119/rock-paper-scissors-lizard-spock-game/assets/162838985/d59674b0-bc85-4516-a99a-b34d494ea6ee">

  # Deployment
  + The site was deployed to GitHub pages. The steps to deploy are as follows:
    - Under Code-Institute-Org in the GutHub page, select the ci-full-template and created a new repository and set it for Public.
    - Go to Settings then select Pages at the left drop-down menu and select the'main' Branch.
    - Once the main branch had been selected and saved. The page could be refreshed and a successful deployment was displayed.
  
  The live link can be found here - https://alicec119.github.io/rock-paper-scissors-lizard-spock-game/
   
  # Credits
  + The code to create the favicon was taken by the Love Running Project.
  + The idea of linking the selected choice of move images to the display images was inspired by https://www.youtube.com/watch?v=fIBOydve2f8
  + The idea for setting up the game logic was inspired by https://www.youtube.com/watch?v=3uKdQx-SZ5A&t=441s
  + The code to set the computer's random selection was inspired by and taken from the Love Maths Project.
  + The codes for the Move Left function are inspired by and taken from https://www.geeksforgeeks.org/rock-paper-and-scissor-game-using-javascript/
  + The codes that respond to the 'Choices' and 'Moves Left' displays are inspired by https://www.geeksforgeeks.org/html-dom-style-display-propert

  # Content
  + The text of the Rules of the game is taken from https://bigbangtheory.fandom.com/wiki/Rock,_Paper,_Scissors,_Lizard,_Spock
    

  # Media
  + The favicon logo was taken from https://www.vecteezy.com/png/28556811-victory-hand-icon-emoji-sticker
  + The heading icon was taken from https://bigbangtheory.fandom.com/wiki/Rock,_Paper,_Scissors,_Lizard,_Spock
  + The five hands gestures images were taken from https://www.freepik.com/free-vector/hand-drawn-emoji-hands-collection_45831480.htm#fromView=search&page=1&position=27&uuid=892f9b5e-c35b-46e2-b437-fe6f8f3f061a
