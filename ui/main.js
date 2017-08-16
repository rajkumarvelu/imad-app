//console.log('Loaded!');
var button= document.getElementById('counter');
var counter=0;

button.onclick=function(){
    
    var request = XMLHttpRequest();
    request.onreadystatechange = function(){
      if(request.readyState === XMLHttpRequest.DONE)
      {
      
         if(request.Status ==== 200)
         {
             var counter = request.responseText;
             var span = document.getElementById('count');
              span.innerHTML = counter.toString();
             
         }
      }
      
      
    };
    //counter = counter + 1;
    
};
