const max = (array) => {
  if(array.length == 0)
      return array;
    maxElement = -Infinity;
    return findMax(array,0,maxElement);
}

function findMax(array,index,maxElement){
  if(index>=array.length)
    return maxElement;
  if(array[index]>maxElement)
    maxElement = array[index];
  return findMax(array,index+1,maxElement)
}
module.exports = max;