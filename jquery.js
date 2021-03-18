var playing=false;
var score;
var trailsleft;
var step;
var action;
var fruits=['apple','banana','grapes','mango','pineApple'];
$(function(){
    $("#startreset").click(function(){
    if(playing){
        location.reload();

    }else{
        $("#gameover").hide();
        playing=true;
        score=0;
        $("#value").html(score);
        $("#trailsleft").show();
        trailsleft=3;
        addHeart();
        $("#startreset").html("Reset Game")
        startAction();
    }
    });
    $("#fruit1").mouseover(function(){
        score++;
        $("#value").html(score);
      
        $("#slicesound")[0].play();
        clearInterval(action);
        $("#fruit1").hide("explode", 500);
 
        setTimeout(startAction,500);
        // startAction();


    })

function addHeart(){
    $("#trailsleft").empty();
    for(i=0;i<trailsleft;i++){
        
        $("#trailsleft").append('<img src="images/heart.png" class="heart">');
    }
}
function startAction(){
    // $("#fruitContainer").append('<img src="images/apple.png "class="fruits">')
    $("#fruit1").show();
    choosefruit();
    $("#fruit1").css({'left':Math.round(550*Math.random()), 'top':-100});

//random step
    step=1+Math.round(5*Math.random());
    action =setInterval(function(){
        $("#fruit1").css('top',
        $("#fruit1").position().top+step);
   
        //chech for tooo low
      if($("#fruit1").position().top>$("#fruitContainer").height()){
       if(trailsleft>1){
        $("#fruit1").show();
        choosefruit();
        $("#fruit1").css({'left':Math.round(550*Math.random()), 'top':-100});
    
    //random step
        step=1+Math.round(5*Math.random());
           trailsleft--;
           addHeart();
       }else{
        playing=false;
        $("#startreset").html("Start Game");
        $("#gameover").show();
        $("#gameover").html('<p>Game Over</p><p>Your Score is'+score+'</p>');
        $("#trailsleft").hide();

        stopAction() ;          
    }


      }

    },10);
}
function choosefruit(){
    $("#fruit1").attr('src','images/'+fruits[Math.round(4*Math.random())]+'.png');
}
function stopAction(){
    clearInterval(action);
    $("#fruit").hide();
    // $("")
    // $("#gameover").hide();

}
//click on start or reset game
  //are we playing 
     //yes
        //reload game
    //no
       //show trial left
//"to reset game"
      //create a random
//fruit
        //define a randoms
// one step at every 30 sec
          //is fruit too low
          //no--> repaeat n2
          //yes-->any trials
//left
             // yes repeat
//nb1 
               // no: show game over,button text:start game

//slice a fruit
     //play sound
     //expore fruit
    });