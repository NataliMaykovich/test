## AQA TESTS 
***

### USAGE

> Info !
> You'll need to Node > 5.x.x for correct runs
> Commands should be run from the root directory of project

:: install npm modules 
    npm i

:: download the necessary binaries for webdriver-manager
    node_modules\.bin\webdriver-manager update

:: run selenium server and leave the windows openned
    node_modules\.bin\webdriver-manager start

:: in other windows run tests
    node node_modules\protractor\built\cli.js conf.js --suite=all

    