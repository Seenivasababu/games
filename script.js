
for(let i=0;i<5;i++){
   let timerId = setInterval(()=>{
      console.log("Logging : " + i + ": "+ Date.now())
      
   },10000)
  
}