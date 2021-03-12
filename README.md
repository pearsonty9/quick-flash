# Pre-work - *Quick Flash*

**Quick Flash** is a Light & Sound Memory game to apply for CodePath's SITE Program. 

Submitted by: **Tyler Pearson**

Time spent: **4** hours spent in total

Link to project: https://glitch.com/edit/#!/simon-says-memory-game

## Required Functionality

The following **required** functionality is complete:

* [x] Game interface has a heading (h1 tag), a line of body text (p tag), and four buttons that match the demo app
* [x] "Start" button toggles between "Start" and "Stop" when clicked. 
* [x] Game buttons each light up and play a sound when clicked. 
* [x] Computer plays back sequence of clues including sound and visual cue for each button
* [x] Play progresses to the next turn (the user gets the next step in the pattern) after a correct guess. 
* [x] User wins the game after guessing a complete pattern
* [x] User loses the game after an incorrect guess

The following **optional** features are implemented:

* [x] Any HTML page elements (including game buttons) has been styled differently than in the tutorial
* [x] Buttons use a pitch (frequency) other than the ones in the tutorial
* [x] More than 4 functional game buttons
* [ ] Playback speeds up on each turn
* [x] Computer picks a different pattern each time the game is played
* [x] Player only loses after 3 mistakes (instead of on the first mistake)
* [ ] Game button appearance change goes beyond color (e.g. add an image)
* [ ] Game button sound is more complex than a single tone (e.g. an audio file, a chord, a sequence of multiple tones)
* [ ] User has a limited amount of time to enter their guess on each turn

The following **additional** features are implemented:

- [x] Add a counter to let players know what level they reached
- [x] Add an endless mode to see how high you can get
- [x] Record scores of endless mode

## Video Walkthrough

Here's a walkthrough of implemented user stories:
![normal win gif](https://cdn.glitch.com/f67249c3-c75e-4de5-b7d5-17253ddfae4a%2Fgif1.gif?v=1615584888617)
![normal lose gif](https://cdn.glitch.com/f67249c3-c75e-4de5-b7d5-17253ddfae4a%2Fgif2.gif?v=1615584888707)
![endless gif](https://cdn.glitch.com/f67249c3-c75e-4de5-b7d5-17253ddfae4a%2Fgif3.gif?v=1615584888691)
![stop button gif](https://cdn.glitch.com/f67249c3-c75e-4de5-b7d5-17253ddfae4a%2Fgif4.gif?v=1615584888726)


## Reflection Questions
1. If you used any outside resources to help complete your submission (websites, books, people, etc) list them here. 
  
  - MDN Web Docs
  - w3schools

2. What was a challenge you encountered in creating this submission (be specific)? How did you overcome it? (recommended 200 - 400 words) 
  
  This biggest challenge was trying to solve how to incorporate an endless mode. This was the most difficult because it required me to have strong understanding of how the game worked and what went into each step of the game. I had to spend some time to better understand how the guess function worked so I could add my own functionality. In the end I overcame this challenge by rewriting the flowchart for the game and adding to it the functionality of an endless mode which ultimately made the process a lot easier. My initial trouble came from thinking that I could simply add a new function that looped continuously through the sequence. I later came to understand that each sequence is played individually using the same array and the progress variable to keep track of where the end of the sequence is. I noticed that instead of lopping through the pattern from 0 to the progress variable I wanted to loop through the entire array each time. This worked because we are adding a value to the array every time a sequence is completed. So, the array will always represent the current sequence. This allows us to keep the structure of the guess function similar and just slightly modify what happens if we are in endless mode. Ultimately it was a fun challenge to overcome and gave me a better understanding of how to manage the states of the game and create a flowchart to model or represent a program.

3. What questions about web development do you have after completing your submission? (recommended 100 - 300 words)

  There is so much I want to know about web development which includes both design and implementation. For design I would love to know more about what it takes to make a good-looking user interface. More specifically how to structure and order elements so that they make sense to the user and are aesthetically pleasing. I find that designing and trying to make a page look good can be frustrating but also enjoyable when you finally have a page that looks great. Secondly, I want to know if there is a more efficient workflow to create these pages. Instead of changing elements property by property are their certain rules you should follow for the order in which you should structure things and change things. I personally have been told and messed around with different mediums to help with the design process such as drawing it out on paper or using a tool like figma or Adobe XD to create a structure and idea for colors and the flow of the website.
  To get to more implementation questions. I have heard a lot about different frameworks like react and angular which seem to be used by almost anyone who is doing web development and as someone who does not have much experience with these frameworks, I would ask what the advantages are and how important it is to learn one of them. I can imagine that they make development easier and smoother as they can do some of the more tedious tasks for you but other than that why would you choose to use one over another. My final question would be how do websites or online applications connect their frontend to their backend? With my minimal experience in web development or development in general that is something that I struggle with when working on a project.


4. If you had a few more hours to work on this project, what would you spend them doing (for example: refactoring certain functions, adding additional features, etc). Be specific. (recommended 100 - 300 words)

  If I had more time to work on this, I would have loved to create different versions or variations of this type of game. The focus would still be around memory and repeating a sequence, but I would have created different versions of the game so the player interacts with the game in different ways all while still testing their memory. I could have tested different aspects of their memory like how long it takes for them to recall a sequence or how long they need to remember a sequence. This could have been done using many different layouts and buttons or interactive elements. I would have also liked to create a start screen where the player could select the difficulty which in this case would just be the number of buttons to press in the final sequence. They also would have been able to select the number of lives that they get to complete the sequence. Then finally I would have like to add some sort of leader board that would keep track of everyone who has played and their score so that people can compete with their friends or other people online.



## License

    Copyright [Tyler Pearson]

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.