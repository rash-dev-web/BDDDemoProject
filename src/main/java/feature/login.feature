Feature: Free CRM login feature

Scenario Outline: Free CRM login scenario

Given user is already on login page
When title of login page is FreeCRM
Then user enters "<username>" and "<password>"
And user clicks on login button
And user is on Home page
And close the browser

Examples:
| username | password |
| naveenk | test@123 |
| tom | test@123 |