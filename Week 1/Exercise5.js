
function challenge5(text){
    let count = 0;
    for(let i = 0; i < text.length; i++) {
        if(text[i]==" "){
            count++;
        }
    }
    return count+1;
}
text1 = "hello world";
console.log(challenge5(text1));
text2 = "this is the best day";
console.log(challenge5(text2));
text3 = "a bb ccc ddddddd e";
console.log(challenge5(text3));