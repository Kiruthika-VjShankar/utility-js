const tail = require('./tail');

const map = require('./map');

describe('map', () => {

    it('map([], cube) should give []', () => {
        expect(map([],"cube")).toEqual([]);
    });

    it('map([1,2,3], identity) should give [1,2,3]', () => {
        expect(map([1,2,3],"identity")).toEqual([1,2,3]);
    });

    it('map([1,2,3], cube) should give [1,8,27]', () => {
        expect(map([1,2,3],"cube")).toEqual([1,8,27]);
    });

    it('map([10,1], cube) should give [1000,1]', () => {
        expect(map([10,1],"cube")).toEqual([1000,1]);
    });

    it('map([-1], cube) should give [-1]', () => {
        expect(map([-1],"cube")).toEqual([-1]);
    });

    it('map([-1], cube) should give [-1]', () => {
        expect(map([0],"cube")).toEqual([0]);
    });

    it('map([-1], cube) should give [-1]', () => {
        expect(map([-1],"cube")).toEqual([-1]);
    });

    it('map([-1], cube) should give [-1]', () => {
        expect(map([-1],"square")).toEqual([1]);
    });

    it('map([2,8], cube) should give [4,64]', () => {
        expect(map([2,8],"square")).toEqual([4,64]);
    });
})
