var homepage = require('../pages/homepage');

describe('demo calculator tests', function(){

    it('addition tests', function(){
        browser.waitForAngularEnabled(false);
       //element.get('http://juliemr.github.io/protractor-demo/');
        homepage.get ('http://juliemr.github.io/protractor-demo/');
        
        //element(by.model('first')).sendKeys('2');
        homepage.enterFirstNumber('4');

        //element(by.model('second')).sendKeys('3');
        homepage.enterSecondNumber('3');

        //element(by.css('[ng-click="doAddition()"]')).click();
        homepage.clickGo();

        browser.sleep('2000');

        //element(by.cssContainingText('.ng-binding', '5'));
        homepage.verifyResult('7');

        
    });

    it('addition tests', function(){
        browser.waitForAngularEnabled(false);
       //element.get('http://juliemr.github.io/protractor-demo/');
        homepage.get ('http://juliemr.github.io/protractor-demo/');
        
        //element(by.model('first')).sendKeys('2');
        homepage.enterFirstNumber('4');

        //element(by.model('second')).sendKeys('3');
        homepage.enterSecondNumber('3');

        //element(by.css('[ng-click="doAddition()"]')).click();
        homepage.clickGo1();

        browser.sleep('2000');

        //element(by.cssContainingText('.ng-binding', '5'));
        homepage.verifyResult('7');

        
    });

});