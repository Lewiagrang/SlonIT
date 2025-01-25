const mySlice = (arr, start = 0, end = arr.length) => {
    const result = []

    start = start >= 0 ? start : arr.length + start
    end = end >= 0 ? end : arr.length + end

    for(let i = start; i<end; i++){
        result.push(arr[i])
    }

    return result
}

const myIndexOf = (arr, item, from = 0) => {
    from = from >= 0 ? from : arr.length + from

    for(let i = +from; i<arr.length; i++){
        if(item === arr[i]) return i
    }

    return -1
}

const myIncludes = (arr, item, from = 0) => {
    from = from >= 0 ? from : arr.length + from

    for(let i = +from; i<arr.length; i++){
        if(item === arr[i]) return true
    }

    return false
}

