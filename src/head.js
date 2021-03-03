const head = (array) => {
    if(array==null)
        return null;
    return array[0];
}
function gethead() {
    var i;
    var max = -Infinity;
    for(i = 0; i < arguments.length; i++) {
      if (arguments[i] > max) {
        max = arguments[i];
      }
    }
    return max;
  } 
module.exports = head;
