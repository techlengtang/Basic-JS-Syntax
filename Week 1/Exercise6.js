function challenge6(Votes){
    if(Votes.length==0){
        return "There is not vote yet.";
    }
    countA=0;
    countB=0;
    countC=0;  

    for(let i = 0; i<Votes.length; i++) {
        if(Votes[i]=='A'){
            countA++;
        }
        if(Votes[i]=='B'){
            countB++;
        }
        if(Votes[i]=='C'){
            countC++;
        }
    }
    if(countA > countB){
        if(countA > countC){
            return "A is the winner with " + countA + " votes.";
        }
        else if(countA < countC){
            return "C is the winner with " + countC + " votes.";
        }
        else{
            return "A and C win with " + countA + " votes.";
        }
    }
    else if(countA<countB){
        if(countB > countC){
            return "B is the winner with " + countB + " votes.";
        }
        else if(countB < countC){
            return "C is the winner with " + countC + " votes.";
        }
        else{
            return "B and C win with " + countB + " votes.";
        }
    }
    else if(countA == countB){
        return "A and B win with " + countA + " votes.";
    }
    else{
        return "It's a tie.";
    }
}
let votes1 = ['A', 'B', 'A', 'C', 'A'];
console.log(challenge6(votes1));

let votes2 = ['A', 'B', 'B', 'C', 'A'];
console.log(challenge6(votes2));

let votes3 = [];
console.log(challenge6(votes3));