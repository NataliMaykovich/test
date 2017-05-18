'use strict';

var ListPage = require("./list_page.js");

class BoardPage {
    constructor() {
        browser.ignoreSynchronization = true;
    }

    get boardWrapper() {
        return element(by.xpath('//gtm-board'));
    }

    setTitle(boardTitle) {
        var titleBox = this.boardWrapper.element(by.xpath('.//*[contains(@class,"board-title")]'));

        browser
            .wait(() => titleBox.isPresent(), 2000)
            .catch((err) => fail('titleBox has not been presented'));

        titleBox.element(by.xpath('./span')).click();
        titleBox.element(by.xpath('./input')).clear().sendKeys(boardTitle).sendKeys(protractor.Key.ENTER);

    }

    addList(title) {
        var listBoxSelector = '//*[@class = "add-column"]';

        var listBox = this.boardWrapper.element(by.xpath('.//*[contains(@class,"add-column")]'));

        browser
            .wait(() => listBox.isPresent(), 2000)
            .catch((err) => fail('listBox has not been presented'));

        var listTitle = listBox.element(by.xpath('./span'));
        listTitle.click();
        var listInput = listBox.element(by.xpath('./input'));
        listInput.sendKeys(title).sendKeys(protractor.Key.ENTER);

        return new ListPage(title);
    }
}
module.exports = BoardPage;