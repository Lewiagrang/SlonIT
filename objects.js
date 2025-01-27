const sumOfNumbers = (obj) => {
    let accumulator = 0
    for(let prop in obj){
        if(typeof obj[prop] === "number"){
            accumulator+=obj[prop]
        }
    }
    return accumulator
}

const extraCreditQuestion = (obj) => {
    const result = []
    const arrNumbers = [] 
    for(let prop in obj){
        if(typeof obj[prop] === "number"){
            arrNumbers.push({[prop]: obj[prop], prop: obj[prop]})
        }
    }

    arrNumbers.sort((a, b) => a.prop > b.prop ? -1 : 1);

    for(let i = 0; i<arrNumbers.length; i++){
        result.push(...Object.keys(arrNumbers[i])[0])
    }
    return result
}

