$( document ).ready(function(){

  /* ============================================== */
 /*    Establish variables and Dom maniplation     */

   //1:  Generate a random Target Number for user to guess 
   var targetNumber = Math.floor(Math.random()*102)+19;
        
   //2: Display the target number in browser
   $('#usertarget').text(targetNumber);
        
   //3: Generate each random crystal values 
   var crystal1 = Math.floor(Math.random()*12)+1;
   var crystal2 = Math.floor(Math.random()*12)+1;
   var crystal3 = Math.floor(Math.random()*12)+1;
   var crystal4 = Math.floor(Math.random()*12)+1;
        
   //4: Game counters 
    var userScore = 0; 
    var wins = 0;
    var losses = 0;
        
    //5: display  wins and losses to user
     $('#wincounter').text(wins);
     $('#losscounter').text(losses);




 /*===================================================*/
 /*      Game Functions + Dom Manipulation            */
      

  // 1: Function -- Start and Reset the Game
    
  function startAndResetGame (){

      targetNumber=Math.floor(Math.random()*102)+19;
        $("#userTarget").text(targetNumber);

      crystal1= Math.floor(Math.random()*12)+1;
      crystal2 = Math.floor(Math.random()*12)+1;
      crystal3= Math.floor(Math.random()*12)+1;
      crystal4= Math.floor(Math.random()*12)+1;

       userScore= 0;
       $('#userScore').text(userScore);

    } //function SRG ends

 //2: Call SRG function

    startAndResetGame();

// 3: Crystal CLicks and Corresponding Functions

    //Blue Crystal
    $("#blue").on ("click", function(){
     userScore = userScore + crystal1;
          
    $('#userscore').text(userScore); 
                
     if (userScore == targetNumber){
                userwins();
         } else if ( userScore > targetNumber){
                userlosses();
              }   

     console.log(userScore);
  })  

     //Purple Crystal
      $("#purple").on ("click", function(){
        userScore =  userScore + crystal2;
             
       $('#userscore').text(userScore); 
                   
        if (userScore == targetNumber){
                   userwins();
            } else if ( userScore > targetNumber){
                   userlosses();
                 }   
 })  


     //Green Crystal
     $("#green").on ("click", function(){
        userScore = userScore+ crystal3;
             
       $('#userscore').text(userScore); 
                   
        if (userScore == targetNumber){
                   userwins();
            } else if ( userScore > targetNumber){
                   userlosses();
                 }   
 })  

   
     //Red Crystal
     $("#red").on ("click", function(){
        userScore = userScore + crystal4;
             
       $('#userscore').text(userScore); 
                   
        if (userScore == targetNumber){
                   userwins();
            } else if ( userScore > targetNumber){
                   userlosses();
                 }   
 })  


  // 4:  Win and lose functions
   
    //If the user wins
      
       function userwins(){
        swal("You win!");
          wins++; 

          $('#wincounter').text(wins);
          startAndResetGame();
        }

    // If the user losses

        function userlosses(){
        swal ("You lose!");
          losses++;

          $('#losscounter').text(losses);
          startAndResetGame()
        }




      }); 