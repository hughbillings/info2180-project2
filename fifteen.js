
window.onload = function() {

	var puzzlearea = document.getElementById('puzzlearea');
	var puzzlepieces = puzzlearea.querySelectorAll('div');
	var tester = puzzlepieces;
	var piecefor4;
	var piecefor3;
	var emptytop3;
	var emptyleft3;
	var emptytop4;
	var emptyleft4;

	
	// Adding the 3x3 and 4x4 options
	var controls = document.getElementById("controls");
	var by3 = document.createElement("button");
	var by4 = document.createElement("button");
	by3.addEventListener("click",create3by,false);
	by4.addEventListener("click",create4by,false);
	by3.innerHTML = "3x3";
	by4.innerHTML = "4x4";
	controls.appendChild(by4);
	controls.appendChild(by3);
	var shuffle = document.getElementById("shufflebutton");
	puzzlearea.style.visibility = "hidden";



function create4by() 
{	
	puzzlearea.style.visibility = "visible";
	piecefor4 = puzzlepieces;
	emptytop4 = "300px";
	emptyleft4 = "300px";
	var top = 0;
	var left = 0;
	
 
	for (var i = 0; i < piecefor4.length; i++)
	{
		if(left == 400)
		{
			top += 100;
			left = 0;
		} else if (top == 400) 
		{
			break;
		}
		piecefor4[i].style.visibility = "visible";
		piecefor4[i].classList.add("puzzlepiece");
		piecefor4[i].style.top = `${top}px`;
		piecefor4[i].style.left = `${left}px`;
		left += 100;	

		piecefor4[i].addEventListener("mouseover", function()
				{	
					
					if(emptyisnear(this,emptyleft4,emptytop4))
					{
						this.classList.add("movablepiece");
					}
				},false);
			



		piecefor4[i].addEventListener("mouseout", function () 
				{
					this.classList.remove("movablepiece");
				}, false);


		piecefor4[i].addEventListener("click",function() 
			{
				
				if(emptyisnear(this,emptyleft4,emptytop4)){
					values4(this);
				}
			});
	}

		shuffle.addEventListener("click",shuffles
		,false);


}

function removeexcess(x)
{
	for (var i = 8; i < x.length; i++)
	{
		x[i].style.visibility = "hidden";
	}
}
function create3by() 
{	
	puzzlearea.style.visibility = "visible";
	piecefor3 = puzzlepieces;
	emptytop4 = "200px";
	emptyleft4 = "200px";
	var top = 0;
	var left = 0;
	removeexcess(piecefor3);
	
 
	for (var i = 0; i < piecefor3.length; i++)
	{
		if(left == 300)
		{
			top += 100;
			left = 0;
		} else if (top == 300) 
		{
			break;
		}
		piecefor3[i].classList.add("puzzlepiece");
		piecefor3[i].style.top = `${top}px`;
		piecefor3[i].style.left = `${left}px`;
		left += 100;	

		piecefor3[i].addEventListener("mouseover", function()
				{	
					
					if(emptyisnear(this,emptyleft4,emptytop4))
					{
						this.classList.add("movablepiece");
					}
				},false);
			



		piecefor3[i].addEventListener("mouseout", function () 
				{
					this.classList.remove("movablepiece");
				}, false);


		piecefor3[i].addEventListener("click",function() 
			{
				
				if(emptyisnear(this,emptyleft3,emptytop3)){
					values3(this);
				}
			});
	}

		shuffle.addEventListener("click",shuffles
		,false);


}






	function emptyisnear(z,x,y)
	{
		
		var status = true;

			if((parseInt(z.style.top) - 100) == parseInt(y) && parseInt(z.style.left) == parseInt(x)){
				
				status = true;

			} else if((parseInt(z.style.left) + 100) == parseInt(x) && parseInt(z.style.top) == parseInt(y))

			{
				status = true;

			} else if((parseInt(z.style.top) + 100) == parseInt(y) && parseInt(z.style.left) == parseInt(x))

			{
				status = true;

			} else if((parseInt(z.style.left) - 100) == parseInt(x) && parseInt(z.style.top) == parseInt(y))

			{
				status = true;
			}
			else {
				status = false;
			}

			return status;
		
	} 

	function values3(z)
	{
		var switcher = z.style.top;
		z.style.top = emptytop3;
		emptytop3 = switcher;
		switcher = z.style.left;
		z.style.left = emptyleft3;
		emptyleft3 = switcher;

	}

	function values4(z) 
	{

		
		var switcher = z.style.top;
		z.style.top = emptytop4;
		emptytop4 = switcher;
		switcher = z.style.left;
		z.style.left = emptyleft4;
		emptyleft4 = switcher;

	}

	function shuffles()
	{
		var nearsquares = [];
		
			for(var x = 0; x < piecefor4.length; x++)
			{
				if(emptyisnear(piecefor4[x]))
				{
					nearsquares.push(piecefor4[x]);
					position = Math.floor(Math.random()*Math.floor(nearsquares.length));
					values4(nearsquares[position]);
					nearsquares = [];
				}
			}
		
	}



	}