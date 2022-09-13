## Description

This was the third project for the General Assembly Software Engineering Immersive course, our group built a complex MERN stack application aimed at developers looking for jobs in the industry.

You will find the deployed app here:  [HackerTress](https://htrees.netlify.app/)

## Getting started/Code Installation
1. Download source code via the 'Clone or download' button in GitHub.
2. In the CLI navigate to the root of the Project3_Back, then run npm i to install dependencies for the backend.
3. In CLI, open a new tab, and navigate to the root of Project3_Front and run npm i to install dependencies for the frontend.
4. Finally, run npm run start in both tabs to run the program in your local environment.
 
## Timeframe & Working Team

- Timeframe: 
    - 10 days
 
- Working Team:
    - Dimitar Vidolov
    - Cody Shan

## Technologies used

- Node.js
- Express
- MongoDB
- Mongoose
- JavaScript
- React
- JSON Web Tokens (JWT)
- Bcrypt
- Axios
- GitHub
- Bulma
- HTML
- CSS

## Brief

- Build a full-stack application.
- Use an Express API with a Mongo database.
- Consume your API with a separate front-end built with React.
- Include CRUD functionality.
- Utilise wireframes so that you know which features are core MVP and which features are stretch goals.
- Have a visually impressive design.
- Deploy project online. 
 
## Planning

After we were given the brief, we discussed different ideas within the team and decided on a job search website for developers.
We then considered what functionality we wanted to have in our app. We broke down all the different tasks that would need to be achieved for us to reach our goal and put them in Jira. We split the tasks into different sprints, starting with our technical setup and MVP goals.

![Screenshot - Jira1](https://github.com/dancfc84/Project3_Front/blob/main/Screenshots/jira.png)

Jira helped us keep on top of what was outstanding and allowed us to successfully delegate work for each of the team members.
I was assigned all components related to jobs, including, the job index, the create/edit job and individual job pages. I also created modals throughout the site, added login and registration validation and the contact page.

![Screenshot - JiraMVP](https://github.com/dancfc84/Project3_Front/blob/main/Screenshots/jiraMVP.png)
 
We then created wireframes for our sections.

![Screenshot - Wireframes](https://github.com/dancfc84/Project3_Front/blob/main/Screenshots/wireframes.png) 

We agreed that we would take 20 minutes at the start of every lesson to discuss any issues or blockers we were experiencing. We also decided that we would communicate what we were working on in Slack to avoid merge conflicts when pushing and pulling on GitHub.
 
 
## Build Code Process

### Back-end (days 1 to 3)

We did the technical setup together, making sure that all of the dependencies were installed before we began working on our individual sections.

It was decided that I would create the job model, I created the model using Mongoose. The user would have the ability to leave comments on each job, so I also added an embedded schema for job comments. In the job controller I added CRUD functionality and the ability to like a job and comment. I spent day 3 testing the endpoints using Insomnia and as a team we troubleshooted issues with the user controller.
 
### Featured Code – Job model

![Screenshot - Job Model](https://github.com/dancfc84/Project3_Front/blob/main/Screenshots/jobmodel.png) 

### Front-end (Days 4 to 8)

We linked our front-end with our back-end using HTTP-proxy-middleware so we could test effectively.  For the front-end we used React, utilising useEffect and useState. We used Axios for http requests to the back-end.  React-router-dom was used for page navigation in React.  
 
 
I began to create the job index and specific job pages using React.

#### Job Page

![Screenshot - Job Page](https://github.com/dancfc84/Project3_Front/blob/main/Screenshots/jobpage.png) 

### Featured Code – Fetch request every time a comment is created or deleted.

useEffect was used to fetch the data required to display the job when the page is initially loaded.

![Screenshot - useEffect](https://github.com/dancfc84/Project3_Front/blob/main/Screenshots/useeffectjobdata.png) 

The deletedJob and newComment variables were added as dependencies in my useEffect hook. This is so whenever a new comment is created or deleted the data for the job is fetched again and the component is re-rendered with the latest comment data.

![Screenshot - handlecomment](https://github.com/dancfc84/Project3_Front/blob/main/Screenshots/handlecommentpost.png)  
 
 
 
 
#### Comments


![Screenshot - comment](https://github.com/dancfc84/Project3_Front/blob/main/Screenshots/comments.png) 

 
 
#### Contact Page

 ![Screenshot - contact](https://github.com/dancfc84/Project3_Front/blob/main/Screenshots/contactpage.png) 
 
### Featured Code – EmailJS was used to send an email in my contact section

When the contact form is submitted, an email is sent to a Gmail account using EmailJS, it also shows a modal telling the user their email has been sent.  

  ![Screenshot - email](https://github.com/dancfc84/Project3_Front/blob/main/Screenshots/sendemail.png) 
 
 
 
 
 
### Featured Code - Modal Component

ReactDOM.createPortal was used to store the HTML when there is a modal showing in a component; it is added to a new div with an id of ‘overlays’ instead of my root div container.  My backdrop and ModalOverlay components are styled using CSS. 

 ![Screenshot - modal](https://github.com/dancfc84/Project3_Front/blob/main/Screenshots/modal1.png) 

The modal component then wraps all the content I would like to be included in the modal. Modal’s are used throughout the site, below is an example of the user registration modal

 ![Screenshot - modal2](https://github.com/dancfc84/Project3_Front/blob/main/Screenshots/modal2.png) 

 ![Screenshot - actualmodal](https://github.com/dancfc84/Project3_Front/blob/main/Screenshots/actualmodal.png) 

### Styling and seeding our data (days 9-10)

We styled the site using a combination of CSS and Bulma. We discussed the colours that would be used on the website, we used coolers.co to pick a colour scheme. We then implemented the styling that was chosen throughout the website. As well as styling, I spent time creating a seed file so that the website had sufficient data ahead of our presentation to our fellow students.
 
 
### Challenges
When a user liked a job or a comment, I wanted to create an array in MongoDB that stored the username so that the user could only like something once.
The most challenging part of the project was working out the syntax for pushing values to a nested array in my controllers. I had to search stack overflow for an hour to find the correct syntax.

 ![Screenshot - modal](https://github.com/dancfc84/Project3_Front/blob/main/Screenshots/likejobcomment.png) 

### Wins
- Teamwork - I enjoyed working in a team, working collaboratively was a new experience and I felt it gave me a taste of what working as a developer would really be like. I also felt working in a team helped me improve my Git skills and introduced me to new workflow applications, such as Jira. 

### Key Learnings/Takeaways

- I felt confident using Express.js by the end of the project; I am now comfortable configuring routes, models and creating complex controller functions.

- The project reinforced my knowledge of React fundamentals and introduced me to MongoDB, which was the first non-relational database that I have used. I enjoyed the flexibility and simplicity of MongoDB in comparison with SQL.


### Bugs

- In the community section it shows several users who are undefined, this needs to be investigated and fixed. This will be a good opportunity to troubleshoot another person’s code.

- After deployment the ability to like a job no longer works.

### Future Improvements

- To improve the styling of the footer and make sure it stays at the bottom.
- Make the site responsive.
- Add the ability to add jobs to a watchlist within the user profile.
- Fix the ability to like a job.
