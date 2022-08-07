
function truncate(str,length){
    if(str.length > length){
        let modifystr = str.slice(0,length);
        return modifystr + `...`;
    } else{
        return str
    }

}

console.log(truncate("What I'd like to tell on this topic is:", 20)); 
// What I'd like to te…
truncate("Hi everyone!", 20); // Hi everyone!
