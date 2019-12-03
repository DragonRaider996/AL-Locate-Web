# Allocate Frontend

## Completeness
This is a fully functional prototype for the web frontend of the application. There are currently no known bugs in the application. The application is deployed to the Heroku and the URL is as follows : https://accordallocateweb.herokuapp.com. The application uses Angular which is based on Typescript and it provides the typesafety by default.

**Intructions to run**

Clone the repository and run the following instructions:
* npm install
* ng serve

Username: IWK, Password: Iwk@12345

In the application the track feature will not run as it requires a Google API key to run.

## Code Quality
This application is built using the Angular framework, and it is following all the quality standards defined by the framework. Every small elements of the web application have their own components and for making the api call seperate services are built. The authentication have been implemented in a proper standard way, with a proper http interceptor which will add authorization header to every http request.

## User Experience
The web application has been developed with two click rule, i.e every action is atmost click away. Since this web application will be used by the emergency department, our focus was to make it as minimalistic and simplistic as possible without compromising on the functionality. 


## Scalability
This application was designed with scalability in mind. It is currently deployed on the free tier, hence it is currently slow on the first request as the application goes to sleep due to heroku policies, but subsequent request are fast. Once deployed to the paid tier, the application will perform faster.

## Security
We were focused on maintainig good security standards while developing this application. 

## Analytics
We currently are not recording any analytics from the user. This is one of the furture scope of our application.

## References
* https://jasonwatmore.com/post/2019/06/22/angular-8-jwt-authentication-example-tutorial
* https://angular.io/docs