const min = require('./min');

describe('min', () => {

    it('[1,2,3,4] is 1', () => {
        expect(min([1,2,3,4])).toEqual(1);
    });

    it('[123,2,3,4] is 4', () => {
        expect(min([123,2,3,4])).toEqual(4);
    });

    it('[-1,-2,-3,-4] is -4', () => {
        expect(min([-1,-2,-3,-4])).toEqual(-4);
    });

    it('[-1] is -1', () => {
        expect(min([-1])).toEqual(-1);
    });

    it('[] is []', () => {
        expect(min([])).toEqual([]);
    });
})
