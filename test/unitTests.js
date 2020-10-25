const chai = require('chai');
const assert = chai.assert;
const functions = require('../functions');

describe('sum',function(){
    it('should return 4 when adding 2 and 2', function(){
        assert.equal(functions.sum(2, 2), 4);
    });

    
        it('should return 0 when adding 5 and -5', function(){
            assert.equal(functions.sum(5, -5), 0);
        });

        
            it('should return 10.1 when adding 9 and 1.1', function(){
                assert.equal(functions.sum(9, 1.1), 10.1);
            });
});

describe('tail', function(){
  it('should return null when provided array is empty[]', function(){
      let arr = [];
assert.isNull(functions.tail(arr));
  });

  it('should return 3 when provided array is [1, 2, 3]', function(){
    let arr = [1, 2, 3];
assert.equal(functions.tail(arr), 3);
});

it('should return hello when provided array is [hello]', function(){
    let arr = ['hello'];
assert.equal(functions.tail(arr), 'hello');
});  
});

describe('merge', function(){
    it ('should return null when both provided arrays are empty', function(){
         let arr1 = [];
         let arr2 = [];
         assert.isNull(functions.merge(arr1, arr2));

    });

    it ('should return [1, 3] when one array is empty and other is [1, 3]', function(){
        let arr1 = [];
        let arr2 = [1, 3];
        assert.deepEqual(functions.merge(arr1, arr2), [1, 3]);

   });

   it ('should return [a, b, c, d] when one array is [a, b] and other is [c, d]', function(){
    let arr1 = ['a', 'b'];
    let arr2 = ['c', 'd'];
    assert.deepEqual(functions.merge(arr1, arr2), ['a', 'c', 'b', 'd']);

});


});