# Task-Management-App

A fullstack Task Management Software.

## Technologies Used:

 ### Frontend

  - React JS
  - React Query
  
  
### Backend

 - Node JS + Express
 - Mongo DB (with Mongoose)
 - JWT tokens

 
 ## Features
 
 - Signup and Login (Email + Password & Google OAuth)
 - HomePage
 - Profile Settings
 - Task addition , correction and deletion
 - Task completed notification updates
 - JWT based auth (both accessToken and refreshToken)
 

## Description

A fully fledged task management software which was built for easy user friendly updates and tracking. 



 ## How to setup locally on your computer
 
 ### Pre-requirements
  In order to run this project on your computer, you must have the following things setup:
 
  - Setup a database in <a href="https://www.mongodb.com/cloud/atlas/lp/try2?utm_source=google&utm_campaign=gs_apac_india_search_core_brand_atlas_desktop&utm_term=mongo%20db%20atlas&utm_medium=cpc_paid_search&utm_ad=e&utm_ad_campaign_id=12212624347&adgroup=115749713263" target="_blank">MongoDB Atlas</a> and obtain the `URI`.
  
  
 ### Steps

1. `git clone` or `Download ZIP` this repo `https://github.com/the-coding-pie/workflow.git`
2. Now `cd` into the root directory (ie, Task-Management-App): 
 
``` bash
cd Task-Management-App
```
3. Now create two `.env` files, one in `backend/` folder and another in `frontend/` folder.
4. Now copy paste the content for `.env` in `backend/` folder. Please **replace** the proper values by yours:

```
PORT=8000

MONGO_URI=your_mongodb_atlas_uri

REFRESH_TOKEN_SECRET=generate_strong_random_characters_and_put_it_here
ACCESS_TOKEN_SECRET=generate_strong_random_characters_and_put_it_here

5. Now copy paste the content for `.env` in `frontend/` folder. Please **replace** the proper values by yours:


6. 


4. That's it, Now visit [http://localhost:8000](http://localhost:8000)




