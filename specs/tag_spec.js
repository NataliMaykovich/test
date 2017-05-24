
describe('Tag asignment', () => {


    beforeEach(() => {
        browser.get('http://sotagtrends.com/');
    });

    it('Select new item to the list', () => {

        element(by.xpath('//typeahead//input'))
            .click()
            .clear()
            .sendKeys('c#');
        browser.sleep(1 * 1000);
        element.all(by.xpath('//typeahead//ul//li')).first().click();

        expect(element(by.xpath('//*[@id="chart"]')).isPresent()).toBe(true, 'Chart is not presented');
        browser.sleep(5 * 1000);
        let numOfBarsPromose = element.all(by.xpath('//rect')).count();
        let lineHeigthsPromise = element(by.xpath('//*[name()="path" and contains(@class,"line")]')).getAttribute('d');

        protractor
            .promise
            .all([numOfBarsPromose, lineHeigthsPromise])
            .then((arr) => {
                let numOfBars = arr[0];
                let lineHeigths = arr[1];

                let lineHeigthsArr = lineHeigths.split(',');

                //todo - find solution for get index of ar for Jan 15
                let magicNumber = 77;

                expect(lineHeigthsArr[magicNumber]).toContain('206.48', 'Wrong value of chart');


            });


    });

});