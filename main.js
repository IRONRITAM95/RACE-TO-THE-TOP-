canvas = document.getElementById("myCanvas") ;
ctx = canvas.getContext("2d");

car1_image = "car1.png" ;
car1_x = 10;
car1_y = 10;
car1_width = 150;
car1_height = 100;

car2_image = "car2.png" ;
car2_x = 10;
car2_y = 200;
car2_width = 150;
car2_height = 100;

background_image = src="background.jpg" ;

function add()
 {
    background_imgTag = new Image(); 
    background_imgTag.onload = uploadBackground(); 
    background_imgTag.src = background_image;   

    car1_imgTag = new Image(); 
    car1_imgTag.onload = uploadcar1(); 
    car1_imgTag.src = car1_image;  
    
    car2_imgTag = new Image(); 
    car2_imgTag.onload = uploadcar2(); 
    car2_imgTag.src = car2_image;  
}

function uploadBackground()
 {
    ctx.drawImage(background_imgTag, 0, 0, canvas.width, canvas.height);
 }
 function uploadcar1()
 {
    ctx.drawImage(car1_imgTag, car1_x, car1_y, car1_width, car1_height); 
 }
 function uploadcar2()
 {
    ctx.drawImage(car2_imgTag, car2_x, car2_y, car2_width, car2_height); 
 }


 window.addEventListener("keydown", my_keydown);

 function my_keydown(e) {
keypressed = e.keyCode;
console.log(keypressed);

if(keypressed == "38"){
   up();
   }
   
   if(keypressed == "40"){
      down();
      }
   
      if(keypressed == "37"){
         left();
         }
   
         if(keypressed == "39"){
            right();
            }


            if(keypressed == "87"){
               up2();
               }
               
               if(keypressed == "83"){
                  down2();
                  }
               
                  if(keypressed == "65"){
                     left2();
                     }
               
                     if(keypressed == "68"){
                        right2();
                        }
 }

 function up(){
   if(car1_y>=10){
      car1_y=car1_y-10;
     uploadBackground();
     uploadcar1(); 
     uploadcar2();
   }
}

function down(){
   if(car1_y<=350){
      car1_y=car1_y+10;
      uploadBackground();
      uploadcar1();
      uploadcar2();
   }
}

function left(){
   if(car1_x>=10){
      car1_x=car1_x-10;
      uploadBackground();
      uploadcar1();
      uploadcar2();
   }
}

function right(){
   if(car1_x<=590){
      car1_x=car1_x+10;
      uploadBackground();
      uploadcar1();
      uploadcar2();
   }
}





function up2(){
   if(car2_y>=10){
      car2_y=car2_y-10;
     uploadBackground();
     uploadcar1();
     uploadcar2(); 
   }
}

function down2(){
   if(car2_y<=350){
      car2_y=car2_y+10;
      uploadBackground();
      uploadcar1();
      uploadcar2();
   }
}

function left2(){
   if(car2_x>=10){
      car2_x=car2_x-10;
      uploadBackground();
      uploadcar1();
      uploadcar2();
   }
}

function right2(){
   if(car2_x<=590){
      car2_x=car2_x+10;
      uploadBackground();
      uploadcar1();
      uploadcar2();
   }
}