//console.log('Loaded!');
var button= document.getElementById('counter');
var counter=0;

button.onclick = function() {
    
        var request = new XMLHttpRequest();
    request.onreadystatechange = function()
    {
      if (request.readyState === XMLHttpRequest.DONE)
      {
               if (request.Status === 200)
         {
             var counter = request.responseText;
             var span = document.getElementById('counter');
              span.innerHTML = counter.toString();
             
         }
      }
      
      
    };
    
    request.open('GET', 'http://velurajkumar.imad.hasura-app.io/counter',true);
    request.send(null);
    
    
   // counter = counter + 1;
    
};
