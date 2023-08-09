# CypressWebAutomation
Test Automation with Cypress using Javascript to check the functionality of the Web Application.

** Cypress Introduction **

1) FrontEnd Web Application Testing Tool for modern web application built using React or Angular JS.

2) Open Source and does not uses selenium. It uses Test runner to design the framework, perform test activities and execute the tests.

3) Cypress is built on Node JS environment and comes with node package manager (npm) modules. Using Npm we can get all the dependencies and libraries we need for cypress.

4) Supports only Typescript and Javascript. Supports Api, Unit and Integration Tests.

5) Framework Supports - Mocha Js 

6) Reporting- Mocha Reporters - Free and Cypress Dashboards - Paid

-- There are multiple ways to execute the tests
a) Headless mode using - npx cypress run
b) UI mode in the cypress app using - npx cypress open
c) UI mode without using cypress app - npx cypress run --headed
d) To execute only one spec file - npx cypress run --spec "add path here" "mention --headed if you need to see UI"
e) By default the execution is done on Electron browser by Cypress but to change the execution we can use below command :-  npx cypress run --browser chrome --headed  
(you can add browser as chrome or edge or firefox)


- Run The Test using below command in headed mode

npx cypress run --browser chrome --headed



