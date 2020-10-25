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

describe('product',function(){
    it('should return 6 when multiplying 2 and 3', function(){
        assert.equal(functions.product(2, 3), 6);
    });

    
        it('should return -10 when multiplying 5 and -2', function(){
            assert.equal(functions.product(5, -2), -10);
        });

        
            it('should return 10.1 when multiplying 1.1 and 9', function(){
                assert.equal(functions.product(1.1, 9), 9.9);
            });
});

describe('min',function(){
    it('should return 1 when values are 4 and 1', function(){
        assert.equal(functions.min(4, 1), 1);
    });

    
        it('should return -5 when values are -5 and 5', function(){
            assert.equal(functions.min(5, -5), -5);
        });

        
            it('should return 0.25 when values are 25 and 0.25', function(){
                assert.equal(functions.min(25, 0.25), 0.25 );
            });
});

describe('max',function(){
    it('should return 1 when values are 4 and 10', function(){
        assert.equal(functions.max(4, 10), 10);
    });

    
        it('should return -5 when values are -55 and -5', function(){
            assert.equal(functions.max(-5, -55), -5);
        });

        
            it('should return 0.25 when values are 0.025 and 0.25', function(){
                assert.equal(functions.max(0.025, 0.25), 0.25 );
            });
});

describe('head', function(){
    it('should return null when provided array is empty[]', function(){
        let arr = [];
  assert.isNull(functions.head(arr));
    });
  
    it('should return 1 when provided array is [1, 2, 3]', function(){
      let arr = [1, 2, 3];
  assert.equal(functions.head(arr), 1);
  });
  
  it('should return oh when provided array is[ oh, hello]', function(){
      let arr = ['oh', 'hello'];
  assert.equal(functions.head(arr), 'oh');
  });  
  });

  describe('mid',function(){
    it('should return 6 when provided array is [3, 6, 8]', function(){
        let arr = [3, 6, 8];
        assert.equal(functions.mid(arr), 6);
    });

    
        it('should return ["paul", "george"] when provided array is ["john", "paul", "george", "ringo"]', function(){
            let arr =  ["john", "paul", "george", "ringo"];
            assert.deepEqual(functions.mid(arr), ["paul", "george"]);
        });

        
            it('should return [7, 5] when the provided array is  [7, 5]', function(){
                let arr = [7, 5];
                assert.deepEqual(functions.mid(arr), [7, 5] );
            });
});

describe('total', function(){
    it('should return 0 when provided array is empty[]', function(){
        let arr = [];
  assert.deepEqual(functions.total(arr), 0);
    });
  
    it('should return 12 when provided array is [2, 4, 6]', function(){
      let arr = [4, 2, 6];
  assert.equal(functions.total(arr), 12);
  });
  
  it('should return 7 when provided array is [5, 8, -6]', function(){
      let arr = [5, 8, -6];
  assert.equal(functions.total(arr), 7);
  });  
  });

  describe('average', function(){
    it('should return 6 when provided array is [2, 5, 11]', function(){
        let arr = [2, 5, 11];
  assert.equal(functions.average(arr), 6);
    });
  
    it('should return 5 when provided array is [9, 0, 6]', function(){
      let arr = [9, 0, 6];
  assert.equal(functions.average(arr), 5);
  });
  
  it('should return null when provided array is []', function(){
      let arr = [];
  assert.isNull(functions.average(arr));
  });  
  });

  describe('largest', function(){
    it('should return 8 when provided array is [2, 6, 8]', function(){
        let arr = [2, 6, 8];
  assert.equal(functions.largest(arr), 8);
    });
  
    it('should return 5 when provided array is [5, 0, -5]', function(){
      let arr = [5, 0, -5];
  assert.equal(functions.largest(arr), 5);
  });
  
  it('should return null when provided array is []', function(){
      let arr = [];
  assert.isNull(functions.largest(arr));
  });  
  });

  describe('smallest', function(){
    it('should return 2 when provided array is [2, 6, 8]', function(){
        let arr = [2, 6, 8];
  assert.equal(functions.smallest(arr), 2);
    });
  
    it('should return -5 when provided array is [5, 0, -5]', function(){
      let arr = [5, 0, -5];
  assert.equal(functions.smallest(arr), -5);
  });
  
  it('should return null when provided array is []', function(){
      let arr = [];
  assert.isNull(functions.smallest(arr));
  });  
  });


  