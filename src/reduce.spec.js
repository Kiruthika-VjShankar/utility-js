const reduce = require('./reduce');

describe('reduce', () => {

    it('reduce([],(x,y)=>x+y) should be undefined', () => {
        expect(reduce([],(x,y)=>x+y)).toEqual(undefined);
    });

    it('reduce([],v(x,y)=>x+y,10) should be 10', () => {
        expect(reduce([],(x,y)=>x+y,10)).toEqual(10);
    });

    it('reduce([a,b,c],(x,y)=>x+y) should be abc', () => {
        expect(reduce(['a','b','c'],(x,y)=>x+y)).toEqual('abc');
    });

    it('reduce([a,b,c],(x,y)=>x+y,z), should be zabc', () => {
        expect(reduce(['a','b','c'],(x,y)=>x+y,'z')).toEqual('zabc');
    });

    it('reduce([],(x,y)=>x+y,A) should be undefined', () => {
        expect(reduce([],(x,y)=>x+y,'A')).toEqual('A');
    });

    it('reduce([],v(x,y)=>x+y,10) should be 10', () => {
        expect(reduce([],(x,y)=>x+y+10,10)).toEqual(10);
    });
    
    it('reduce([],v(x,y)=>x+y,10) should be 10', () => {
        expect(reduce([1,2,3],(x,y)=>x+y)).toEqual(6);
    });
})


