class CrewCandidate {
    constructor (name, mass, scores = []) {
        this.name = name;
        this.mass = mass;
        this.scores = scores;
    }
    addScore(newScore){
        this.scores.push(newScore);
    }
    average() {
        let scoreAverage = 0;
        for(let i = 0; i < this.scores.length; i++){
            scoreAverage += this.scores[i];
        }
        return ((scoreAverage/this.scores.length).toFixed(1));
    }
    status(){
        if(this.average() >= 90) {
            return 'Accepted';
        }else if(this.average() >= 80 && this.average() <= 89){
            return 'Reserve';
        }else if(this.average()>= 70 && this.average() <= 79){
            return 'Probationary';
        }else{
            return'Rejected';
        }
    }
}

const bear = new CrewCandidate('Bubba', 135, [88, 85, 90]);
const maltese = new CrewCandidate('Merry', 1.5, [93,88,97]);
const gator = new CrewCandidate('Glad', 225, [75,78,62]);

// console.log(bear);
// console.log(maltese);
// console.log(gator);

// bear.addScore(83);
// console.log(bear.scores);

// console.log(maltese.average().toFixed(1));


console.log(`${bear.name} earned an average test score of ${bear.average()}% and has a status of ${bear.status()}.`);
console.log(`${maltese.name} earned an average test score of ${maltese.average()}% and has a status of ${maltese.status()}.`);
console.log(`${gator.name} earned an average test score of ${gator.average()}% and has a status of ${gator.status()}.`);
//Declare a class called CrewCandidate with a constructor that takes three parameters—name, mass, and scores. Note that scores will be an array of test results.



//Add methods for adding scores, averaging scores and determining candidate status as described in the studio activity.



//Part 4 - Use the methods to boost Glad Gator’s status to Reserve or higher. How many tests will it take to reach Reserve status? How many to reach Accepted? Remember, scores cannot exceed 100%.