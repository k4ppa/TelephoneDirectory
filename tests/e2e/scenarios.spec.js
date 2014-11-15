
describe ("Insert new contact in the TelephoneDirectory web application", function() {

    it("should redirect index.html to index.html#/homePage", function() {
        browser.get('http://localhost:63342/TelephoneDirectory/index.html');

        browser.getLocationAbsUrl().then(function(url) {
            expect(url.split('#')[1]).toBe('/homePage')
        });
    });

    it("should change page when the button 'Insert new contact' is pressed", function() {
        browser.get("http://localhost:63342/TelephoneDirectory/index.html");

        element(by.id('newContact')).click();
        browser.getLocationAbsUrl().then(function(url) {
            expect(url.split('#')[1]).toBe('/newContact')
        });
    })
});



