Feature: Create user scenario

Scenario Outline: User is able to create a new contact

Given user is already on login page
When title of login page is FreeCRM
Then user enters "<username>" and "<password>"
And user clicks on login button
And user is on Home page
Then user moves to new Contact page
Then user enters contact details "<firstname>" and "<lastname>" and "<position>" 
And close the browser 

Examples: 
|username|password|firstname|lastname|position|
|naveenk|test@123|Tom|Peter|QA|
|naveenk|test@123|David|Will|Dev|