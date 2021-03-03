const reduce = (list, reducer, initialValue) => {
    if(list.length === 0) {
        return initialValue;
    }
    
    if(initialValue== undefined && isAlpha(list[0]))
        accumulator = '';
    else if(initialValue==undefined && isAlpha(list[0])==false)
        accumulator = 0;
    else
        accumulator = initialValue;
    index = 0;

    return myReduce(list,index,accumulator,reducer);
     /*else {
      const [first, ...rest] = list;
      const updatedAcc = reducer(initialValue, first);
      return reduce(rest, updatedAcc, reducer);
    }*/
    
  }

  var isAlpha = function(ch){
    return typeof ch === "string" && ch.length === 1
           && (ch >= "a" && ch <= "z" || ch >= "A" && ch <= "Z");
}

function myReduce(array,index,accumulator,func){
    if(index>=array.length)
        return accumulator;
    accumulator = func(accumulator,array[index]);
    return myReduce(array,index+1,accumulator,func);

}

  module.exports = reduce;

  /*Array.prototype.myReduce = function(callback){
    var a =0;                              // Step 1
    for(let i=0; i<this.length; i++)       // Step 2
    {
        callback(a = a+this[i])            // Step 3
    }
     
    return a;                              // Step 4
}*/

