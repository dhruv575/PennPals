# PennBuddies
PennBuddies is a web app implementing social network and graph algorithms to find you a group to do any activities. Once you connect with your friends and sign up for activities and days, the app automatically groups people together based on their mutual friends and mutual interests. 

## Running the Code

To get set up, please first clone and set up the git repo in VS code (or whichever platform you prefer)
```
git clone https://github.com/dhruv575/PennPals.git
cd PennPals
```
Then, to run the code, cd into penn-pals and install all necessary packages
```
cd penn-pals
npm install
```
Once this is complete, you should be able to start your code
```
npm run start
```
At which point you will be able to view the website at: http://localhost:3000/

## Interacting with the UI

To get started playing around with the system, go ahead and first click on "ADD FRIENDS" in the top right corner. From here, you can add yourself and your email, and click on the Friends tab and add as many friends as you'd like. After this, click on the "JOIN ACTIVITIES" tab, choose whicever activities you would like and whichever days you are avialable, and refresh your tab. 

Everytime you refresh the graph algorithms are run again. The graph algorithm works by taking all people signed up for an acitivity on a day, making a subgraph of them and their internal connections, and running a DFS to find all connected components. When this is done, we take all groups which have only 1 person and combine them into a connected component so that no one is alone (except for cases where there is only a single group of 1 person).

With this in mind, you should now see yourself in groups based on 1 of 2 outcomes:
1. You are friends with one of the people in the group and were thus placed in it
2. You were friends with none of the people in the group and were thus placed with all other singletons

You can play around more with adding more people. Currently, though, there is no delete function unfortunately, so you can not reset your own sign ups without clearing the local storage. To clear the local storage, you can
1. Press Ctrl+shift+i
2. Go to the Application tab
3. Go to the Local Storage setting under Storage
4. Right click and clear

After refreshing again, it should be back to the original dataset, and you can play around again as you would like.