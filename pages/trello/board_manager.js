'use strict';

class BoardManager {
    constructor() {
        browser.ignoreSynchronization = true;
    }

    get boardMenagerWrapper() {
        return element(by.xpath('//gtm-dashboard'));
    }

    createNewBoard() {
        var newBoardButton = this.boardMenagerWrapper.element(by.xpath('.//*[@class="board add-board"]'));
        newBoardButton.click();
    }

    navigateToBoard(boardTitle) {
        var board = this.boardMenagerWrapper.element(by.xpath(`.//span[text() = "${boardTitle}"]`));
        board.click();
    }
}
module.exports = BoardManager;