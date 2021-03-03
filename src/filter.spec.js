const filter = require('./filter');

const filter = require('./filter');

describe('filter', () => {

    it('filter([], x => true) should give []', () => {
        expect(map([],x => true)).toEqual([]);
    });

    it('filter([1,2,3], x => true) should give [1,2,3]', () => {
        expect(map([1,2,3],x => true)).toEqual([1,2,3]);
    });
})
