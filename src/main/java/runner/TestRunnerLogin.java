package runner;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(
		features="C:\\Users\\Rasheed\\workspace\\BDDFreeCRM\\src\\main\\java\\feature\\login.feature",
		glue={"stepDefinition"},
		format={"pretty","html:test-output","json:test-json/cucumber.jason","junit:test-xml/cucumber.xml"},
		dryRun=false,
		monochrome=true)

public class TestRunnerLogin {

	 
}
