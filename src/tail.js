const tail = (array) => {
    if(array==null)
        return array;
    spliced_array = [];
    return spliceArray(array,0,1,array.length,spliced_array,0);
}

function spliceArray(array,index,spliced_start_index,spliced_end_index,spliced_array,spliced_array_index){
    if(index>=array.length)
        return spliced_array;
    if(index>=spliced_start_index && index<spliced_end_index){
        spliced_array[spliced_array_index] = array[index];
        spliced_array_index+=1;
    }
    return spliceArray(array,index+1,spliced_start_index,spliced_end_index,spliced_array,spliced_array_index);
}

module.exports = tail;
