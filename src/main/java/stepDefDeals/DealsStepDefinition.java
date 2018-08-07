package stepDefDeals;
import java.util.List;
import java.util.concurrent.TimeUnit;

import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.interactions.Actions;

import cucumber.api.DataTable;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import junit.framework.Assert;

public class DealsStepDefinition {

	WebDriver driver;
	@Given("^user is on login page$")
	public void user_is_on_login_page() {
		System.setProperty("webdriver.chrome.driver", "./Driver/chromedriver.exe");
		driver=new ChromeDriver();
	    driver.get("https://www.freecrm.com/index.html");
	    driver.manage().timeouts().pageLoadTimeout(30, TimeUnit.SECONDS);
	    driver.manage().timeouts().implicitlyWait(30, TimeUnit.SECONDS);
	    driver.manage().window().maximize();
	}

	@When("^title of login page FreeCRM$")
	public void title_of_login_page_FreeCRM() {
		String title=driver.getTitle();
	    System.out.println("Title is: "+title);
	    Assert.assertEquals("#1 Free CRM software in the cloud for sales and service", title);
	}

	@Then("^user enters username and password$")
	public void user_enters_username_and_password(DataTable credentials) {
		List<List<String>> data=credentials.raw();
		driver.findElement(By.name("username")).sendKeys(data.get(0).get(0));
		driver.findElement(By.name("password")).sendKeys(data.get(0).get(1));
	}

	@Then("^user clicks on login$")
	public void user_clicks_on_login(){
		WebElement button=driver.findElement(By.xpath("//input[@type='submit']"));
	    JavascriptExecutor js=(JavascriptExecutor) driver;
	    js.executeScript("arguments[0].click()", button);
	}

	@Then("^user on Home page$")
	public void user_on_Home_page() {
		 String title=driver.getTitle();
		    System.out.println("After Login title is : "+title);
		    Assert.assertEquals("CRMPRO", title);
	}

	@Then("^user moves to new Deals page$")
	public void user_moves_to_new_Deals_page() {
		driver.switchTo().frame("mainpanel");
		Actions action=new Actions(driver);
		action.moveToElement(driver.findElement(By.xpath("//a[contains(text(),'Deals')]"))).build().perform();
		driver.findElement(By.xpath("//a[contains(text(),'New Deal')]")).click();
	}

	@Then("^user enters deals details$")
	public void user_enters_deals_details(DataTable dealData) {
		List<List<String>> data=dealData.raw();
		driver.findElement(By.id("title")).sendKeys(data.get(0).get(0));
		driver.findElement(By.id("amount")).sendKeys(data.get(0).get(1));
		driver.findElement(By.id("probability")).sendKeys(data.get(0).get(2));
		driver.findElement(By.id("commission")).sendKeys(data.get(0).get(3));
		
		
	}

	@Then("^close browser$")
	public void close_browser() {
		driver.quit();
	}
}
