class Book {
    constructor(title, author, copyrightDate, ISBN, numPages, numTimesCheckOut, discarded) {
        this.title = title;
        this.author = author;
        this.copyrightDate = copyrightDate;
        this.ISBN = ISBN;
        this.numPages = numPages;
        this.numTimesCheckOut = numTimesCheckOut;
        this.discarded = discarded;
    }
    checkout(uses=1) {
        this.numTimesCheckOut += uses;
    }
  
}

class Novel extends Book {
    constructor(title, author, copyrightDate, ISBN, numPages, numTimesCheckOut, discarded) {
        super(title, author, copyrightDate, ISBN, numPages, numTimesCheckOut, discarded);
    }
    dispose(){
        if(this.numTimesCheckOut > 100) {
            this.discarded = 'Yes';
        }
    }
}
class Manual extends Novel {
    constructor(title, author, copyrightDate, ISBN, numPages, numTimesCheckOut, discarded) {
      super(title, author, copyrightDate, ISBN, numPages, numTimesCheckOut, discarded); 
    }
    dispose(currentYear){
        if(2024-this.copyrightDate > 5){
            this.discarded = 'Yes';
        }
    }
}

let novelOne = new Novel('Pride and Prejudice', 'Jane Austen', 1813, 111111111111111, 432, 32, 'NO');
let manualOne = new Manual('Top Secret Shuttle Building Manual', 'Redacted', 2013, 0000000000000, 1147, 1, 'NO');
novelOne.checkout(5);
novelOne.dispose(2024);
manualOne.checkout(5);
manualOne.dispose(2024);
console.log(novelOne, manualOne);

// Code exercises 4 & 5 here: