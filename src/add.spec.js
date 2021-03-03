const add = require('./add');

describe('Add', () => {

    it('Sum of 0 and 0 is 0', () => {
        expect(add(0, 0)).toEqual(0);
    });

    it('Sum of 1 and 0 is 1', () => {
        expect(add(1, 0)).toEqual(1);
    });

    it('Sum of -11 and 11 is 0', () => {
        expect(add(-11, 11)).toEqual(0);
    });

    it('Sum of 120 and 1 is 121', () => {
        expect(add(120, 1)).toEqual(121);
    });

    it('Sum of 100 and 100 is 200', () => {
        expect(add(100, 100)).toEqual(200);
    });

})
