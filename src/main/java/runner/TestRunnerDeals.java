package runner;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(
		features="C:\\Users\\Rasheed\\workspace\\BDDFreeCRM\\src\\main\\java\\feature\\deals.feature",
		glue="stepDefDeals",
		dryRun=false,
		format={"pretty","html:test-output/cucumber1.html","json:test-json/cucumber1.jason","junit:test-xml/cucumber1.xml"},
		monochrome=true,
		strict=true)
public class TestRunnerDeals {

}
