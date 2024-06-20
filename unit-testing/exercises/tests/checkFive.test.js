const checkFive = require('../checkFive.js');

describe("checkFive", function(){

    test("returns result when number is less than 5", function(){
        let output = checkFive(2);
        expect(output).toEqual("2 is less than 5.");
    });
    describe("checkFive", function(){

        test("return 'num is greater than 5' when num > 5", function(){
            let output = checkFive(8);
            expect(output).toEqual("8 is greater than 5.");
        });
    });
    describe("checkFive", function(){

        test("return 'number is equal to 5' when number === 5", function(){
            let output = checkFive(5);
            expect(output).toEqual("5 is equal to 5.");
        });
    });

});