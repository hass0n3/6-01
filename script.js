function MyFunction() { 
                          var x  = document.getElementById("number").value ;
                          x  = parseInt(x,10);

                          answer = Math.floor(Math.random() * 7);
                          answer  = parseInt(answer,10);

                          if (x == answer){ 
                          
                            document.getElementById("demo1").innerHTML = "You Win!" ;

                          }else {
                          
                            document.getElementById("demo1").innerHTML = "You lose!" ;

                          }            
}