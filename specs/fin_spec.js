// ng2 finance adding new item to favorites

let Search = require("../pages/fin/search_page.js");
let SideBar = require("../pages/fin/sidebar_page.js");

describe('NG2 Finance', function () {

    let addSymbolFunc = function (symbDescr, symbolText) {


        let search = new Search();
        search.searchByText(symbDescr.split(' ')[0]);

        let sideBar = new SideBar();

        let searchItem = sideBar.getSearchResultByText(symbDescr);
        expect(searchItem.isDisplayed()).toBe(true, 'Item has not been found');
        searchItem.click();

        let addedItem = sideBar.getSymbolByText(symbolText);

        expect(addedItem.isDisplayed()).toBe(true, 'Item has not been added');

    };

    beforeEach(function () {
        browser.get('http://projects.marinpetkov.com/ng2-finance');
    });

    it('Select new item to the list', function () {

        let search = new Search();
        search.searchByText('Google');

        let sideBar = new SideBar();

        let searchItem = sideBar.getSearchResultByText('GOOG - Alphabet Inc.');
        expect(searchItem.isDisplayed()).toBe(true, 'Item has not been found');
        searchItem.click();

        let addedItem = sideBar.getSymbolByText('GOOG');

        expect(addedItem.isDisplayed()).toBe(true, 'Item has not been added');


    });

    it('Select sevreral new items to the list', function () {

        let symbols = [{
                symbDescr: 'FB - Facebook, Inc.',
                symbText: 'FB'
            },
            {
                symbDescr: 'AAPL - Apple Inc.',
                symbText: 'AAPL'
            },
            {
                symbDescr: 'GOOG - Alphabet Inc.',
                symbText: 'GOOG'
            },
            {
                symbDescr: 'GM - General Motors Company',
                symbText: 'GM'
            }
        ];

        let i = 0
        for (; i < symbols.length;) {
            addSymbolFunc(symbols[i].symbDescr, symbols[i].symbText);
            i++
        }



        // let currentSymbolIndex = 0;
        // while (currentSymbolIndex < symbols.length) {
        //     addSymbolFunc(symbols[currentSymbolIndex].symbDescr, symbols[currentSymbolIndex].symbText);
        //     currentSymbolIndex++;
        // }

    });
});