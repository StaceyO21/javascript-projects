const whoWon = require('../RPS.js');

describe("whoWon", function(){
    
    test("return 'TIE' if player1 === player2", function(){
        let output = whoWon.whoWon(player1 === player2);
        expect(output).toBe("TIE");
    });
    describe("whoWon", function(){

        test("return ''Player 2 wins!' if p1 = rock & p2 = paper", function(){
            let output = whoWon.whoWon('rock','paper');
            expect(output).toBe("Player 2 wins!");
        });
    });
    describe("whoWon", function(){

            test("return 'Player 2 wins!' if p1 = paper & p2 = scissors", function (){
                let output = whoWon.whoWon('paper', 'scissors');
                expect(output).toBe("Player 2 wins!");
            });
    });
    describe("whoWon", function(){

        test("return 'Player 2 wins!' if p1 = scissors & p2 = rock", function(){
            let output = whoWon.whoWon('scissors', 'rock');
            expect(output).toBe("Player 2 wins!");
        });
    });
});