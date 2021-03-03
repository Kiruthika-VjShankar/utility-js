const head = (array) => {
    if(array == null)
        return null;
    return head(array);
}

function head(array){
    return array[0];
}

module.exports = head;
