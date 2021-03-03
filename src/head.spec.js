const head = require('./head');

describe('head', () => {

    it('[] is null', () => {
        expect(head()).toEqual(null);
    });

    it('[1,2,3] is 1', () => {
        expect(head([1,2,3])).toEqual(1);
    });

})
