const tail = require('./tail');

describe('tail', () => {

    it('[] is []', () => {
        expect(tail()).toEqual();
    });

    it('[1,2,3] is [2,3]', () => {
        expect(tail([1,2,3])).toEqual([2,3]);
    });

    it('[-11] is []', () => {
        expect(tail([-11])).toEqual([]);
    });

    it('[-11,21,13,45] is [21,13,45]', () => {
        expect(tail([-11,21,13,45])).toEqual([21,13,45]);
    });

    it('[1203,23,88] is [23,88]', () => {
        expect(tail([1203,23,88])).toEqual([23,88]);
    });

})
