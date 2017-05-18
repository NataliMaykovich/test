'use strict';
class SideBar {

    constructor() {
        browser.ignoreSynchronization = true;
    }

    get wrapper() {
        let wp = element(by.xpath('//mp-sidebar'));
        expect(wp.isPresent()).toBe(true, 'Sidebar had not been found');
        return wp;
    }

    get settingsButton() {
        let btn = this.wrapper.element(by.xpath('.//mdl-icon[contains(text(), "more_vert")]'));
        expect(btn.isPresent()).toBe(true, 'Settings button had not been found');
        return btn;
    }

    getListItems() {
        let EC = protractor.ExpectedConditions;
        let lis = this.wrapper.all(by.xpath('.//li'));
        browser
            .wait(EC.presenceOf(lis.first()), 5 * 1000)
            .catch((err) => {
                fail('Cant find list items after 5 sec');
                throw err;
            });

        return lis;
    }

    getSearchResults() {
        return this.getListItems();
    }

    getSymbols() {
        return this.getListItems();
    }

    getSearchResultByText(text) {
        let items = this.getSearchResults();

        expect(items.count()).toBeGreaterThan(0, `getSearchResultByText(), Can't find any item`);

        let filteredItems = items.filter(function (item) {
            return item
                .all(by.xpath(`.//span[contains(@class,"text--black") and text()="${text}" ]`))
                .count()
                .then(function (numOfEls) { return numOfEls > 0; });
        });

        expect(filteredItems.count()).toBeGreaterThan(0, `getSearchResultByText(), Can't find item by text "${text}"`);

        return filteredItems.first();
    }



    getSymbolByText(text) {
        let EC = protractor.ExpectedConditions;
        let items = this.getSearchResults();

        expect(items.count()).toBeGreaterThan(0, `getSymbolByText(), Can't find any item`);

        let filteredItems =
            items
                .filter(function (item) {
                    return item
                        .all(by.xpath(`.//div[contains(@class,"pull-left") and .//*[text()="${text}"] ]`))
                        .count()
                        .then(function (numOfEls) { return numOfEls > 0; });
                });

        expect(filteredItems.count()).toBeGreaterThan(0, `getSymbolByText(), Can't find item by text "${text}"`);

        browser
            .wait(EC.presenceOf(filteredItems.first()), 5 * 1000)
            .catch((err) => {
                fail('Cant find list items after 5 sec');
                throw err;
            });

        return filteredItems.first();
    }


}
module.exports = SideBar;
