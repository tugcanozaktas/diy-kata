const { joinNames, reachDestination } = require("../src");

describe("joinNames", () => {
  test("returns string of names, seperated by commas and an ampersand", () => {
    expect(joinNames([{

      name: 'Bart'
    
    }, {
    
      name: 'Lisa'
    
    }, {
    
      name: 'Maggie'
    
    }])).toBe("Bart, Lisa & Maggie");

    expect(joinNames([{

      name: 'Ali'
    
    }, {
    
      name: 'Veli'
    
    }, {
    
      name: 'Memed'
    
    }, {
      name: 'suzan'
    }
  ])).toBe("Ali, Veli, Memed & suzan");

  expect(joinNames([{

    name: 'Ali'
  
  }, {
  
    name: 'Veli'
  
  }, {
  
    name: 'Memed'
  
  }, {
    name: 'suzan'
  }, {
    name: 'sazanali'
  }
])).toBe("Ali, Veli, Memed, suzan & sazanali");
  });
});
