var BoardPage = require("../pages/trello/board_page.js");
var BoardManager = require("../pages/trello/board_manager.js");

describe('Navigate to new board creation page', function () {

    beforeEach(function () {
        browser.get('http://a2gtm.herokuapp.com/');
        element(by.xpath('//*[@id="closeButton"]')).click();

    });

    it('Create new board, Add two lists, add two cards for each list', function () {

        var boardManager = new BoardManager();
        boardManager.createNewBoard();

        var board = new BoardPage();

        browser
            .wait(() => board.boardWrapper.isPresent(), 2000)
            .catch((err) => fail('New board has not been presented'));

        board.setTitle('Test Board 777');

        var list1 = board.addList("List1");
        list1.addCard("Card1");

        var list2 = board.addList("List2");
        list2.addCard("Card2");
    });
});