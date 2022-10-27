const obj1 = {
  fruit: 'apple',
  nutrients: {
    energy: '255kJ',
    name: 'calcium',
    price: {
      red: 200,
      green: 400
    }
  }
};

const obj2 = {
  fruit: 'apple',
  nutrients: {
    energy: '255kJ',
    name: 'calcium',
    price: {
     green: 4001,
      red: 2002
    }
  }
};

function checkSameObject(obj1, obj2, result = true){
      var x = result;
      var temp =Object.keys(obj1);
      for(let i=0; i < temp.length; i++){
          let key = temp[i];
          let value  = obj1[key];
          if(typeof value !== 'object'){
              if((obj2.hasOwnProperty(key)) && (value == obj2[key])){
                  x = true;
              }else{
                  console.log(key, value, '===')
                  x = false;
                  return false;
              }
          }          
          if((typeof value == 'object') && (x === true)){
              console.log(typeof value == 'object',"----")
              checkSameObject(obj1[key], obj2[key], x)
          }
      }
      return x;
}



console.log(checkSameObject(obj1, obj2))