const map = (array,function_) => {
    if(array==null)
        return array;
    if(function_==="identity")
        return array;
    for(var i = 0;i<array.length;i++){
        array[i] = array[i]*array[i]*array[i];
    }
    return array;
}

module.exports = map;
