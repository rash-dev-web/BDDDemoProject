/*package stepDefContact;

import java.util.concurrent.TimeUnit;

import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.interactions.Actions;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import junit.framework.Assert;

public class ContactStepDefinition {

	WebDriver driver;
	@Given("^user is already on login page$")
	public void user_is_already_on_login_page()  {
		System.setProperty("webdriver.chrome.driver", "./Driver/chromedriver.exe");
		driver=new ChromeDriver();
	    driver.get("https://www.freecrm.com/index.html");
	    driver.manage().timeouts().pageLoadTimeout(30, TimeUnit.SECONDS);
	    driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
	    driver.manage().window().maximize();
	   
	}

	@When("^title of login page is FreeCRM$")
	public void title_of_login_page_is_FreeCRM() {
	    String title=driver.getTitle();
	    System.out.println("Title is: "+title);
	    Assert.assertEquals("#1 Free CRM software in the cloud for sales and service", title);
	    
	}

	@Then("^user enters \"(.*)\" and \"(.*)\"$")
	public void user_enters_username_and_password(String username, String password) {
	    
		driver.findElement(By.name("username")).sendKeys(username);
		driver.findElement(By.name("password")).sendKeys(password);
	}

	@Then("^user clicks on login button$")
	public void user_clicks_on_login_button()  {
	    WebElement button=driver.findElement(By.xpath("//input[@type='submit']"));
	    JavascriptExecutor js=(JavascriptExecutor) driver;
	    js.executeScript("arguments[0].click()", button);
	}

	@Then("^user is on Home page$")
	public void user_is_on_Home_page() {
	    String title=driver.getTitle();
	    System.out.println("After Login title is : "+title);
	    Assert.assertEquals("CRMPRO", title);
	}
	
	
	@Then("^user moves to new Contact page$")
	public void user_moves_to_new_Contact_page() {
		
		driver.switchTo().frame("mainpanel");
		Actions action=new Actions(driver);
		action.moveToElement(driver.findElement(By.xpath("//a[contains(text(),'Contacts')]"))).build().perform();
		driver.findElement(By.xpath("//a[contains(text(),'New Contact')]")).click();
	}
	
	@Then("^user enters contact details \"([^\"]*)\" and \"([^\"]*)\" and \"([^\"]*)\"$")
	public void user_enters_contact_details(String firstName, String lastName, String position) {
		driver.findElement(By.id("first_name")).sendKeys(firstName);
		driver.findElement(By.id("surname")).sendKeys(lastName);
		driver.findElement(By.id("company_position")).sendKeys(position);
		driver.findElement(By.xpath("//input[@type='submit' and @value='Save']")).click();
	}
	    
	    
	@Then("^close the browser$")
	public void close_browser(){
		driver.quit();
	}

}
*/