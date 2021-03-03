const max = require('./max');

describe('max', () => {

    it('[1,2,3,4] is 4', () => {
        expect(max([1,2,3,4])).toEqual(4);
    });

    it('[123,2,3,4] is 123', () => {
        expect(max([123,2,3,4])).toEqual(123);
    });

    it('[-1,-2,-3,-4] is -1', () => {
        expect(max([-1,-2,-3,-4])).toEqual(-1);
    });

    it('[-1] is -1', () => {
        expect(max([-1])).toEqual(-1);
    });

    it('[] is []', () => {
        expect(max([])).toEqual([]);
    });
})
