'use strict'

class ListPage {
    constructor(listTitle) {
        browser.ignoreSynchronization = true;
        this.listTitle = listTitle;
    }

    addCard(text) {
        var addCardSelector =
            `//*[contains(text(), "${this.listTitle}")]/../..//div[@class = "add-card"]`;
        var addCardBox = element(by.xpath(addCardSelector));

        browser
            .wait(() => addCardBox.isPresent(), 3000)
            .catch((err) => fail('addCardBox has not been presented'));

        var addCardSpan = addCardBox.element(by.xpath('./span'));
        addCardSpan.click();
        var addCardInput = addCardBox.element(by.xpath('./input'));
        addCardInput.sendKeys(text).sendKeys(protractor.Key.ENTER);
    }

}
module.exports = ListPage;