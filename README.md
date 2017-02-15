# voting-app
This application with the use of the [TMDb API](https://www.themoviedb.org/documentation/api "TMDb API") provides users with the ability to vote on an assortment of movies currently in theatres. All that's required is for each voter to visit the application's home page at [Redux Vote](https://reduxvote.heroku.com "Redux Vote") and get voting. Voters can either do a head-to-head for a pair of movies and find the total count on the Results page (click "Results"), or participate in a tournament, where each round ends when all voters have voted. Once a round is over one of the voters can click "Next" on the results page to begin the next round with a new set of movies. The winning movie will be the movie that has garnered the most votes across all the rounds played, and that may end up being your favourite movie, something to see in theatres or check out later.

**Developer Notes**

-Redux Vote was developed using a node.js and express backend.  
-Socket.io enabled state change updates between redux stores found on the client and server.  
-State is managed using redux and immutable.js.  
-Unit tests were performed using mocha and chai for both client and server.    
-The UI was developed using React, with routes managed using react router.    

###Live Demo at: [Redux Vote](https://reduxvote.heroku.com "Redux Vote")


