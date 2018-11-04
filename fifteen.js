window.onload = function () 
{
	var puzzlearea = document.getElementById("puzzlearea");
	var puzzlepieces = puzzlearea.querySelectorAll('div');
	var emptysquaretop;
	var emptysquareleft;
	var background;
	

	// Implement Backgrounds and Shuffle Button

	var shufflebutton = document.getElementById("shufflebutton");

	var controls = document.getElementById("controls");
	shufflebutton.addEventListener("click", shuffle);
	
	var image1 = document.createElement("button");
	image1.innerHTML = "CREATOR";
	image1.addEventListener("click", function()
		{
			background = "background.jpg";
			for (var i = 0; i < puzzlepieces.length; i++)
			{

				puzzlepieces[i].style.backgroundImage=  "url("+ `${background}` +")";
			}
		});
	var image2 = document.createElement("button");
		image2.innerHTML = "BIRDS";
	image2.addEventListener("click", function()
		{
			background = "birds.jpg";
			for (var i = 0; i < puzzlepieces.length; i++)
			{

				puzzlepieces[i].style.backgroundImage=  "url("+ `${background}` +")";
			}
		});
	var image3 = document.createElement("button");
		image3.innerHTML = "MINIONS";
	image3.addEventListener("click", function()
		{
			background = "minions.jpg";
			for (var i = 0; i < puzzlepieces.length; i++)
			{

				puzzlepieces[i].style.backgroundImage=  "url("+ `${background}` +")";
			}
		});
	var image4 = document.createElement("button");
		image4.innerHTML = "NICESTUFF";
	image4.addEventListener("click", function()
		{
			background = "nicestuff.jpg";
			for (var i = 0; i < puzzlepieces.length; i++)
			{

				puzzlepieces[i].style.backgroundImage=  "url("+ `${background}` +")";
			}
		});

	
	controls.appendChild(image1);
	controls.appendChild(image2);
	controls.appendChild(image3);
	controls.appendChild(image4);

	puzzleappearance();







function puzzleappearance () 
{
	var top;
	var left;
	emptysquaretop = "300px";
	emptysquareleft = "300px";
	background = selectbackground();
	

	for (var i = 0; i< puzzlepieces.length; i++)
	{
		top = parseInt(i/4);
		left = i%4;

		puzzlepieces[i].classList.add("puzzlepiece");
		puzzlepieces[i].style.backgroundImage = "url("+ `${background}` +")";
		puzzlepieces[i].style.top = (top*100)+"px";
		puzzlepieces[i].style.left = (left*100)+"px";
		var bgtop = "-"+(top*100)+"px";
		var bgleft = "-"+(left*100)+"px";
		puzzlepieces[i].setAttribute("id",`${top},${left}`);
		puzzlepieces[i].style.backgroundSize = "400px 400px"; 
		puzzlepieces[i].style.backgroundPosition = `${bgleft} ${bgtop}`;
		puzzlepieces[i].addEventListener("mouseover", function()
			{
				if(emptyisnear(this,emptysquareleft,emptysquaretop))
				{
					this.classList.add("movablepiece");
				}
			}
			,false);
		puzzlepieces[i].addEventListener("mouseout", function()
			{
				this.classList.remove("movablepiece");
			},false);
		puzzlepieces[i].addEventListener("click", function() 
			{
				if(emptyisnear(this,emptysquareleft,emptysquaretop))
				{
					movesquaretoempty(this);
				}
			});

	}
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


function movesquaretoempty(z)

{	
	var val = z.style.top;
	z.style.top = emptysquaretop;
	emptysquaretop =val;
	val = z.style.left;
	z.style.left = emptysquareleft;
	emptysquareleft = val; 
}

function findingsquareo(x,y)
{
	var square = document.getElementById(`${x},${y}`);
	return square;
}

function shuffle()
{	var i = 0;
	while ( i < 100)
	{
		var piece = findingsquareo(Math.floor(Math.random() * 100)%4, Math.floor(Math.random() * 100)%4);
		movesquaretoempty(piece);
		i++;
	}
}

function selectbackground()
{
	var backgrounds = ["background.jpg", "birds.jpg","minions.jpg", "nicestuff.jpg"];
	var val = Math.floor(Math.random()*100)%4;
	return backgrounds[val];
}

}
