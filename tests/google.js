describe('Google Test', function(){

    it('Seach cute dogs', function(){
        browser.waitForAngularEnabled(false);
        browser.get('https://www.google.com')

        element(by.className('gLFyf')).sendKeys('cute dogs');

        element(by.id('gbqfbb')).click();

        browser.sleep('2000');

    });
});