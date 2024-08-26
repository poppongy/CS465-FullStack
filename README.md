# CS465-FullStack
CS-465 Full Stack Development with MEAN
Architecture

#Compare and contrast the types of frontend development you used in your full stack project, including Express HTML, JavaScript, and the single-page application (SPA).
In the full-stack project, frontend development was done using CSS, and JavaScript, ideal for creating simple, static pages. Express HTML typically refers to server-side rendering where HTML is dynamically generated on the server. We also used handlebars to avoid duplication of code. 
In contrast, we used Angular for Single-Page Application (SPA) to build a dynamic, interactive user experience within a single HTML page, providing smoother user interactions by loading content dynamically without refreshing the page.
#Why did the backend use a NoSQL MongoDB database?
The backend used NoSQL MongoDB database because it offers flexible, schema-less data storage, which is advantageous for handling varied and unstructured data. MongoDB's document-oriented model is particularly suited for applications requiring rapid iteration and scaling, making it a good match for the dynamic nature of SPAs.

Functionality
#How is JSON different from Javascript and how does JSON tie together the frontend and backend development pieces?
JavaScript, which is a programming language capable of complex operations and logic, while JSON is purely a data format used to structure data as key-value pairs.
JSON ties together frontend and backend development by providing a standardized way to exchange data between the client and server. For example, a backend API can send data to the frontend in JSON format, and the frontend can then easily parse and use this data to update the user interface. This interoperability ensures that different parts of the application can communicate effectively, regardless of the technologies used on either end.
#Provide instances in the full stack process when you refactored code to improve functionality and efficiencies, and name the benefits that come from reusable user interface (UI) components.
In the app.component.html, I had to refactor the code to include the navbar component that was created. Components give code structure and organization and also maintainable. 
Testing
#Methods for request and retrieval necessitate various types of API testing of endpoints, in addition to the difficulties of testing with added layers of security. Explain your understanding of methods, endpoints, and security in a full stack application.
In a full-stack application, methods refer to the HTTP verbs used to perform actions on resources, such as GET (retrieve), POST (create), PUT (update), and DELETE (remove). Endpoints are specific URLs where these methods interact with resources, like `/api/users` for user data.

API testing involves verifying that these endpoints correctly handle requests and return the expected responses. This includes checking the functionality, performance, and reliability of the API. With added layers of security, such as authentication and authorization, testing becomes more complex. Security measures like OAuth tokens or API keys must be validated to ensure only authorized users can access or modify resources. Testing must account for these security features to confirm they are properly enforced and do not introduce vulnerabilities.
Reflection

#How has this course helped you in reaching your professional goals? What skills have you learned, developed, or mastered in this course to help you become a more marketable candidate in your career field?
This course has taught me to google a lot of issues I encounter. Most answers can be found with internet research. 
