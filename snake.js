 
var foodx;
var foody;
var color=["red","black","orange","white"];
var score=0;

var r;
 canvas = document.getElementById('box');
	 pen = canvas.getContext('2d');
wi=canvas.width;
 hi=canvas.height;
img=document.getElementById("apple");
function getfood(){

foodx=Math.round((Math.random()*(wi-10))/10);
 foody=Math.round((Math.random()*(hi-10))/10);
	 r=Math.round(Math.random()*3);
}
	
getfood();
function score1()
{score++;
document.getElementById('score1').innerHTML=score;}

					
	var snake={
		  len:5,
		 cell:[],
		direction:"right",
		 color:"orange",
		
       drawsnake:function()
		{
		for(var i=this.len-1;i>=0;i--)
		{	this.cell.push({x:i,y:0});/*this is necessary as if we donot consider,this reperesent the variable of object not of function in js if we use varaible without declaring it so it automativally declares it and undefined it so if use cells.push directly so it makes cell array and undefined it but we want to push in cell arrray of object so use this which represent the variable of object so no array or varaible creates in function it uses object variable*/
		     }
		},
			
			fillsnake:function(){  
				if(this.cell[0].x*10==wi ||this.cell[0].y*10==hi || this.cell[0].y==-1){
				document.getElementById("over").innerHTML="GAME OVER";
					window.alert("GAME OVER");
					
					
					
					
				}
							
		      for(var i=0;i<this.cell.length;i++)
		{   pen.fillStyle="yellow";
pen.fillRect(this.cell[i].x*10,this.cell[i].y*10,10,10);
  pen.fillStyle=color[r];
pen.drawImage(img,foodx*10,foody*10,16,12);

		}
				
		 for(var i=0;i<this.cell.length;i++)
		{   pen.strokeStyle="white";
		 pen.lineWidth=1;
pen.strokeRect(this.cell[i].x*10,this.cell[i].y*10,10,10);
		
		}
				
		},
		update:function()
		{  
	      var mouthx=this.cell[0].x;
		var mouthy=this.cell[0].y;
			if(mouthx==foodx &&mouthy==foody)
				{
				  getfood();
				score1();
                      
					this.cell.push({x:1,y:1});
					
				}
			
			if(this.direction=="right"){
		   var newx=mouthx+1;
		    var newy=mouthy;
			}
		  
	     
		 if(this.direction=="up") {
			   
		   var newx=mouthx;
		    var newy=mouthy-1;
			 
		  
	   
		 }
		 if(this.direction=="left")
			 {
				   
		   var newx=mouthx-1;
		    var newy=mouthy;
		  
	    
			 }
		 if(this.direction=="down")
			 {
				 
		   var newx=mouthx;
		    var newy=mouthy+1;
		  
	   
			 }
			 this.cell.pop();
		this.cell.unshift({x:newx,y:newy});
	      pen.clearRect(0,0,wi,hi);
			
			
			}
		
		
	};
function gameloop()
{

	snake.update();
	snake.fillsnake();

}
function keyval(info)
{  console.log(info);
	if(info.key==="ArrowDown")
		{snake.direction="down";}
	if(info.key=="ArrowUp")
		{snake.direction="up";}
	if(info.key==="ArrowRight")
		{snake.direction="right";}
	if(info.key==="ArrowLeft")
		{snake.direction="left";}
	
}

	  
     
  snake.drawsnake();
  snake.fillsnake();      



document.addEventListener("keydown",keyval);

	 setInterval(gameloop,150);
	