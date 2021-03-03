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

})
