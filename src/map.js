const map = (array,func) => {
    if(array==null)
        return array;
    if(func==="identity")
        return array;

    else if(func=="cube"){
        return arrayCube(array,0);
    }
    else if(func=="square"){
        return arraySquare(array,0);
    }
    return array;
}

function arrayCube(array,index){
    if(index>=array.length)
        return array;
    array[index] = cube(array[index]);
    return arrayCube(array,index+1);
}

function arraySquare(array,index){
    if(index>=array.length)
        return array;
    array[index] = square(array[index]);
    return arraySquare(array,index+1);
}

function cube(number){
    return number*number*number;
}

function square(number){
    return number*number;
}
module.exports = map;
