# Patch Notes

## Version 0.1 - Created README file
- Created README file


## Version 0.2 - Created initial architecture
- Architecture used: MVC
- Created files:
  - .env.example
  - server.js
  - src
    * app.js
    * controller
      - athleteController.js
      - teamController.js
      - scripts.js
    * database
      - dbConnect.js
    * models
      - athleteModel.js
      - teamModel.js
    * routes
      - athleteRoutes.js
      - teamRoutes.js
    * tests
      - API.test.js

- Created basic methods:
  - Athletes CRUD
    * Create
    * Login
    * Get all
    * Find by ID
    * Find by query
    * Update info
    * Delete info
  - Teams CRUD
    * Create
    * Find all
    * Find by ID
    * Find by query
    * Update admins list
    * Enter/Leave team
    * Remove athlete
    * Delete team

- Created respectives routes for created methods

- Created script for token verifier

- Created tests


## Version 0.3.1 - Changed the name of the repository
- Changed the name from "Final-Project" to "Transpire"

- teamController.js
  - Updated and corrected code

- teamModel.js
  - Updated the name of field "transFriendly_Exclusive" to "friendlyOrExclusive"
  - Updated validator

- API.test.js
  - Created tests for teamController.js


## Version 0.3.2 - README update
- README updated

 - teamController.js
   - Refactored code


## Version 0.3.3 - Test and code refactoring
- teamController.js
  - Refactored code

- teamModel.js
  - Added requirement for 'athletes' field

- API.test.js
  - Created new tests
  - Refactored previous tests

- README updated


## Version 0.3.4 - README QoL update
- README updated for QoL


## Version 0.3.5 - README update
- README updated (grammar)


## Version 0.3.6 - Code refactoring + tests
- teamController.js
  - Refactored code

- teamRoutes.js
  - Updated route "*route.get("/:id", controller.findTeamById);*" to "*route.get("/find/:id", controller.findTeamById);*"

- Created Patch Notes file


## Version 0.3.7 - Code refactoring + tests
- teamController.js
  - Refactored code

- All methods tested and running!
- Start of development of stress tests


## Version 0.3.8 - Stress testing
- Created stress tests

- athleteController
  - Refactored code


## Version 0.4.1 - Code cleaning and logic optimization + method implementation file
- Created file:
  - Methods.md

- Methods.md shows what each method does (in terms of logic)(will be re-written for better understanding, for now, it's for personal use and may be hard to understand)

- Marked all methods that may be refactored and cleaned for better logic and optimization

- athleteController.js
  - Implemented Follow and Unfollow

## Version 0.4.2 - Code cleaning in progress, Optimization in progress, QoL update
- Methods.md updated for better understanding

- athleteController.js
  - Implented "follow_Unfollow" method
  - Started code cleaning
  - Refactored and cleaned deleteAthlete method

- teamController.js
  - Removed variable **SECRET**

- scripts.js
  - Created script *RemoveIdByIndex*
  - Created variable **SECRET** to replace variables in athlete and team controller

- README.md
  - Updated README file
  - Added "Tecnologias utilizadas" section

- Created file swagger

- Created swagger.js for deployment

- Changed routes from "*/transpire/{route}*" to "*/{route}*"


## Version 0.4.3 - Model por messages and posts created
- models
  - Created postModel.js
  - Created messageModel.js

## Version 0.5.1 - Implemented posts to teams feed
- teamController.js
  - Implemented team feed
  - Refactored Add/Remove ADM from teams

- athleteController.js
  - Implemented athlete feed

- Created postController.js
  - Implemented new post method
  - Implemented delete post method

## Version 0.6.1 - Implemented Message between users
- athleteController.js
  - Implemented message methods
    - View message
    - Send message
  - Refactored delete athlete

## Version 0.6.2 - Tests coding for final release
- API-stress.test.js
  - New tests

- athleteController.js
  - Refactored code

- teamController.js
  - Refactored code

- postController.js
  - Created findPostById

- [Go back to README](https://github.com/SkyAlarcon/Transpire#readme)