const squared = (a)=>{
    let counter = 0;
    for(let i=0; i<a.length; i++){
      for(let j=0; j<a.length; j++){
        console.log(counter+=1);
      }
    }
    return counter;
  }
  squared([1,2,3,4,5]);//25
  