/*package stepDefinition;

import java.util.concurrent.TimeUnit;

import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import junit.framework.Assert;

public class LoginSetpDefinition {

	WebDriver driver;
	@Given("^user is already on login page$")
	public void user_is_already_on_login_page()  {
		System.setProperty("webdriver.chrome.driver", "./Driver/chromedriver.exe");
		driver=new ChromeDriver();
	    driver.get("https://www.freecrm.com/index.html");
	    driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
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
	@Then("^close the browser$")
	public void close_browser(){
		driver.quit();
	}

}
*/