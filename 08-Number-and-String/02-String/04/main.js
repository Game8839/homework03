function checkstr(str){
    lowstr = str.toLowerCase()
    if (lowstr.includes(`xxx`) || lowstr.includes(`porn`) || lowstr.includes(`sex`)){
        return true
    }
    return false
}

console.log(checkstr(`fghghs`))
