===== Setup =====

1. Extract provided .zip

2. Open terminal, type the following command
   
   - npm i 
   - npm start

3. Open new terminal I have also implemented a mock server using node.js/express, 
   to make it as realistic as possible. 
   
   - cd "api-server"
   - npm i
   - npm start


IMPORTANT NOTE !!!
  
   - "api-server" needs run, in order for the app to work properly.

 
High Level Repo Architecture

│	├── public            # fonts, icons and images
│	│   ├── fonts
│	│   ├── icons
│	├── src	
│	│   ├── api           # APIs are defined here
│	│   └── components    # Reuseable Components / Distributed Components
│	│   ├── pages         # App Screens/Containers/Components with routes. 
│	│   ├── styles        # App global styles + constants
│	│   ├── utils         # App config + helper functions
├── api-server 		    # Mock APi server 



===== What's Done ? 🚀 =====

Till now I have implemented the following features


1. Interactions List
   - Implemented UI, make it responsive. 
   - Implement search by member's name.
   - List and filter All/Past-14-days interactions.   
   - Hook up API
   

2. Create Interaction.
   - Implemented UI, make UI responsive. 
   - Implement form functionality + validations
   - Implemented OpenStreet Maps API, now User can add the location of interaction.
   - User is able to add the date and time for past interactions.
   - Hook up API

3. Made shared components to make codebase reusable and reliable, like Map, Input and Button etc.

4. Implemented 404 Page for invalid routes, Full page loaders, Tooltips etc.


What needs to be done ?

1. The user can group the list of “meetings” by date or person.
2. The user can define a date range and will get all the persons they have met
  - 

Queries ? 

Reach out to me I will be more than happy to help you out. email : yz.abdulrehman.khan@gmail.com