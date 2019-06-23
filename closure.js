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