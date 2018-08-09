$( document ).ready(function(){
  
    var target = [Math.floor(Math.random()*120)+19];
    $('#usertarget').html(target);
    
    //Generate random number for each crystal
    var crystal1 = [Math.floor(Math.random()*12)+1];
    var crystal2 = [Math.floor(Math.random()*12)+1];
    var crystal3 = [Math.floor(Math.random()*12)+1];
    var crystal4 = [Math.floor(Math.random()*12)+1];
    
    // Variables to keep track of wins, losses and total
    var score = 0; 
    var wins = 0;
    var losses = 0;
    
  
  $('#wins').text(wins);
  $('#losses').text(losses);

   reset();
  
  // Reset game
  function reset(){

        target = Math.floor(Math.random()*120)+19;
        $('#usertarget').html(target);

        crystal1 = Math.floor(Math.random()*12)+1;
        crystal2 = Math.floor(Math.random()*12)+1;
        crystal3 = Math.floor(Math.random()*12)+1;
        crystal4 = Math.floor(Math.random()*12)+1;

        score= 0;
        $('#userscore').html(score);
   } 

  // Clicking crystals
    $('#blue').on ('click', function(){
      score = score + crystal1;
      console.log(score);
      $('#userscore').text(score); 
            //Win & lose conditions
          if (score == target){
            alert("You Win");
            reset();
          }
          else if ( score > target){
            alert("You Lose");
            reset();
          }   

          
  
    })  

    $('#purple').on ('click', function(){
      score = score + crystal2;
      console.log(score);
      $('#userscore').text(score); 
            //Win & lose conditions
          if (score == target){
            swal("You Win");
            reset();
          }
          else if ( score > target){
            swal("You Lose");
            reset();
          }   

          
  
    })  


    $('#green').on ('click', function(){
      score = score + crystal3;
      console.log(score);
      $('#userscore').text(score); 
            //Win & lose conditions
          if (score == target){
            swal("You Win");
            reset();
          }
          else if ( score > target){
            swal("You Lose");
            reset();
          }   

          
  
    })  


    $('#red').on ('click', function(){
      score = score + crystal4;
      console.log(score);
      $('#userscore').text(score); 
            //Win & lose conditions
          if (score == target){
            swal("You Win");
            reset();
          }
          else if ( score > target){
            swal("You Lose");
            reset();
          }   

         
  
    })  


       
  }); 