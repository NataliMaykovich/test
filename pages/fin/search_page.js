'use strict';

class SearchPage {

    constructor() {
        browser.ignoreSynchronization = true;
    }

    get searchField() {
        let sf = element(by.xpath('//div[contains(@class, "search-box")]//input'));
        expect(sf.isPresent()).toBe(true, 'Search field had not been found')
        return sf;
    }

    searchByText(text) {
        let field = this.searchField;
        field.clear().sendKeys(text);
    }
}
module.exports = SearchPage;
