const firstSimbolupperCase = (str) => {
    return str[0].toUpperCase()+str.slice(1)
}

const trimming = (str, len) => {
    for(let i = len; str.length; i++){
        if(/[ ,.!?:;]/u.test(str[i])){
            return str.slice(0, i)+"..."
        }
    }
    return str
}

const isSubstring = (str1 = "", str2 = "") => {
    if(str1.length<str2.length){
        let strSwap = str1
        str1 = str2
        str2 = strSwap
    }       

    let j = 0
    for(let i = str2.length; i<=str1.length; i++){
        if(str2===str1.slice(j, i)){
            return true
        }
        j++
    }
    return false
}
