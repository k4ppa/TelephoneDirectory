
describe ("Insert new contact in the TelephoneDirectory web application", function() {
    it("should change page when the button 'Insert new contact' is pressed", function() {
        browser.get("http://localhost:63342/TelephoneDirectory/index.html");

        element(By.id('firstName')).click();
        expect(browser.getCurrentUrl()).toEqual('http://localhost:63342/TelephoneDirectory/newContact.html');
    })
});



