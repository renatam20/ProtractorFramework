describe('Protractor Demo App', function() {
    var firstNumber = element(by.model('first'));
    var secondNumber = element(by.model('second'));
    var goButton = element(by.id('gobutton'));
  
    beforeEach(function() {
      browser.waitForAngularEnabled(false);
      browser.get('http://juliemr.github.io/protractor-demo/');
    });
  
    it('should have a title', function() {
      expect(browser.getTitle()).toEqual('Super Calculator');
    });
  
    it('should add one and two', function() {
      firstNumber.sendKeys(1);
      secondNumber.sendKeys(2);
  
      goButton.click();
  
      expect(element(by.cssContainingText('.ng-binding'), ('3')))
      browser.sleep('2000');
    });
  
    it('should add four and six', function() {
      firstNumber.sendKeys(4);
      secondNumber.sendKeys(6);

      goButton.click();

      expect(element(by.cssContainingText('.ng-binding'), ('10')))
      browser.sleep('2000');
    });
  
    it('should read the value from an input', function() {
      firstNumber.sendKeys(1);
      expect(firstNumber.getAttribute('value')).toEqual('1');

    });

    browser.sleep('2000');
  });