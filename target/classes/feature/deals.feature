Feature: Deal data Creation

Scenario: Free CRM create a new deal scenario

Given user is on login page
When title of login page FreeCRM
Then user enters username and password
| naveenk | test@123 |
Then user clicks on login
Then user on Home page
Then user moves to new Deals page
Then user enters deals details
| test deal | 1000 | 50 | 10 |
Then close browser