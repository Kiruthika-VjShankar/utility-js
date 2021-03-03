const min = (array) => {
    if(array.length == 0)
        return array;
      minElement = Infinity;
      return findMin(array,0,minElement);
  }
  
  function findMin(array,index,minElement){
    if(index>=array.length)
      return minElement;
    if(array[index]<minElement)
      minElement = array[index];
    return findMin(array,index+1,minElement)
  }
  
  module.exports = min;