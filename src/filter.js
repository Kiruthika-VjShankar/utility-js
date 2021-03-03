const filter = (array,func) => {
    new_Array = [];
    new_array_index = 0;
    parse_index = 0;
    return arrayFilter(array,func,new_Array,new_array_index,parse_index);
}
  
function arrayFilter(arr, func,new_Array,new_array_index,parse_index) {
    if(parse_index>=arr.length)
        return new_Array;
    if(func(arr[parse_index])){
        new_Array[new_array_index] = arr[parse_index];
        new_array_index+=1;
    }
    return arrayFilter(arr,func,new_Array,new_array_index,parse_index+1);
}

module.exports = filter;