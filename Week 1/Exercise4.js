
function challenge4(text,character){
    let count = 0;
    for(let i = 0; i < text.length; i++) {
        if(text[i] === character) {
            count++;
        }
    }
    return count;
}
let text1 = "hello world"
let character1 = 'o';
console.log(challenge4(text1, character1));
let text2 = "aaa bbb a";
let character2 = 'a';
console.log(challenge4(text2, character2));
let text3 = "abc";
let character3 = 'd';
console.log(challenge4(text3,character3));