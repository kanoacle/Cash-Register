var calculatorModule = (function(){
//private
  var memory = 0;
  var total = 0;
//public
  return {
    load: function(n){
      total = n;
      if(typeof n !== 'number'){
          throw new Error("That ain't a number boy!");
        }
      return n;
    },

    getTotal: function(){
      return total;
    },

    add: function(n){
      total += n;
      if(typeof n !== 'number'){
          throw new Error("That ain't a number boy!");
        }
      return total;
    },

    subtract: function(n){
      total -= n;
      if(typeof n !== 'number'){
          throw new Error("That ain't a number boy!");
        }
      return total;
    },

    multiply: function(n){
      total *= n;
      if(typeof n !== 'number'){
          throw new Error("That ain't a number boy!");
        }
      return total;
    },

    divide: function(n){
      total /= n;
      if(typeof n !== 'number'){
          throw new Error("That ain't a number boy!");
        }
      return total;
    },

    recallMemory: function(){
      return memory;
    },

    saveMemory: function(){
      memory = total;
    },
    clearMemory: function(){
      memory = 0;
    }
  };
});