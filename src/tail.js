const tail = (array) => {
    if(array==null)
        return array;
    return array.splice(1);
}

module.exports = tail;
