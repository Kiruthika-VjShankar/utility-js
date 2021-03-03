const min = require('./min');

describe('min', () => {

    it('[1,2,3,4] is 1', () => {
        expect(min([1,2,3,4])).toEqual(1);
    });

    it('[123,2,3,4] is 4', () => {
        expect(min([123,2,3,4])).toEqual(2);
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

    it('[-2,9,0] is -2', () => {
        expect(min([-2,9,0])).toEqual(-2);
    });

    it('[0,1] is 0', () => {
        expect(min([0,1])).toEqual(0);
    });
    
})
