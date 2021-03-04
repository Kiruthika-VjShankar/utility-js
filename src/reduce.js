const reduce = (list, reducer, initialValue) => {
    if(list.length === 0) {
        return initialValue;
    }
    
    if(initialValue== undefined && isStringType(list[0]))
        accumulator = '';
    else if(initialValue==undefined && isStringType(list[0])==false)
        accumulator = 0;
    else
        accumulator = initialValue;
    index = 0;

    return myReduce(list,index,accumulator,reducer);    
  }

var isStringType = function(element){
    return typeof element === "string" ;
}

function myReduce(array,index,accumulator,func){
    if(index>=array.length)
        return accumulator;
    accumulator = func(accumulator,array[index]);
    return myReduce(array,index+1,accumulator,func);

}

  module.exports = reduce;