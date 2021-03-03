const filter = require('./filter');

describe('filter', () => {

    const filterUpperCase = (character) => {
        return character==character.toUpperCase();            
    }   
    const filterLowerCase = (character) => {
        return character==character.toLowerCase();            
    }
    

    it('filter([], x => true) should give []', () => {
        expect(filter([],x => true)).toEqual([]);
    });

    it('filter([1,2,3], x => true) should give [1,2,3]', () => {
        expect(filter([1,2,3],x => true)).toEqual([1,2,3]);
    });

    it('filter([1,2,3],x => false) should give []', () => {
        expect(filter([1,2,3],x => false)).toEqual([]);
    });

    it('filter([1,2,3],x => x > 1) should give [2,3]', () => {
        expect(filter([1,2,3],x => x > 1)).toEqual([2,3]);
    });

    it('filter([a,B,c,D], filterUpperCase) should be [B,D]', () => {
        expect(filter(['a','B','c','D'],filterUpperCase)).toEqual(['B','D']);
    });

    it('filter([a,B,c,D], filterUpperCase) should be [B,D]', () => {
        
        expect(filter(['a','B','c','D'],filterUpperCase)).toEqual(['B','D']);
    });

    it('filter([a,B,c,D], filterUpperCase) should be [B]', () => {
        
        expect(filter(['B'],filterLowerCase)).toEqual([]);
    }); 

})

