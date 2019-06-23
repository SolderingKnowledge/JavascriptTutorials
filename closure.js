if(true){
    let i = "aikol";
    var f = ()=>{ //var gets hoisted
      console.log(i);
    }
  }
  
  f(); // 'aikol


  if(true){
    let i = "aikol";
    let f = ()=>{//creates lexical scope
      console.log(i);
    }
  }
  
  f();//  Can't find variable: f -> because it created lexical scope and doesn't get hoisted


///////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////


for(let i=0; i<3; i++){//creates lexical scope
    setTimeout(()=>{
        console.log(i);
    }, 0)
}

console.log("after the time");//output: after the time &  0,1,2


for(var i=0; i<3; i++){//gets hoisted and setTimeOut will get the last values of i
    setTimeout(()=>{
        console.log(i);
    }, 0)
}
console.log("after the time");//output: after the time &  3,3,3