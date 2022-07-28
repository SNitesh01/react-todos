
function sorting (array, sortBy, type, isAss){
    if(type === 'string'){
      array.sort((a,b) => { 
        a=a[sortBy].toLowerCase(); 
        b=b[sortBy].toLowerCase();
      
      if(a>b) return isAss ? -1: 1;
      if(a<b) return isAss ? 1 : -1;
      return 0; 
      
      });
  
    }else if (type === 'number'){
      array.sort((a,b) => {
        a = a[sortBy];
        b = b[sortBy];
        if(isAss)
        return a-b;
        return b-a;
      });
    }
     return array;
  }

  export {sorting}