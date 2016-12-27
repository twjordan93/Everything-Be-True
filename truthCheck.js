function truthCheck(collection, pre) {
  // Is everyone being true?
  //console.log(pre);
  var ourPred = pre;
  var ourCollection = collection;
  //console.log(ourCollection);
  //console.log(ourCollection[0]);
  //console.log(ourCollection[0][pre]);
  //console.log(ourCollection[0].hasOwnProperty(pre));
  
  //define a true or false variable to use
  var pass = true;
  
  //console.log(isNaN(collection[0][pre]));
  //check if each object has the property
  
  for(var i = 0; i < collection.length; i++){
    //console.log(collection[i]);
    //check if the object has the property
    if(collection[i].hasOwnProperty(pre)){
     // console.log(collection[i].hasOwnProperty(pre));
      //determine if valid element ex: age:0 not ok
     // console.log(collection[i][pre]);
      switch(collection[i][pre]){
        case 0:
          pass = false;
          break;
        case null:
          pass = false;
          break;
        case "":
          pass = false;
          break;
        case undefined:
          pass = false;
          break;
        //case NaN:
          //console.log(2);
          //pass = false;
         // break;
        default:
          console.log(isNaN(collection[i][pre]) + "test");
          console.log(typeof collection[i][pre] === 'string');
          
          //Handle NaN: check if not a number and its not a string then pass is false.(NaN)
          if(isNaN(collection[i][pre]) && typeof collection[i][pre] !== 'string'){
            pass = false;
            console.log(pass);
          }
          //if it is a string then pass is true
          else if(typeof collection[i][pre] === 'string'){
          pass = true;
          break;
          }
         
      }
       console.log(pass);
      //if(collection[i][pre] === 0){
        //pass = false;
        //break;
      //}
      //if pass ever becomes false during the for loop we break the loop and set pass to false.
      if(pass === false){
        break;
      }
     
    }
    //if the object doesnt have the property, we set pass to false and break thef or loop
     else if(collection[i].hasOwnProperty(pre) !== true){
       
       pass = false;
       break;
       
     }
    
    //console.log(pass);
  }
  //console.log(pass);
  return pass;
  
}