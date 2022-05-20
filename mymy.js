function newScroll(){
	let textPoint = document.querySelector(".text-special");
	let textPosition = textPoint.getBoundingClientRect().top;
	let screenSize= window.innerHeight/1.3;
	//let screenWidth= window.innerWidth;
	
	if(textPosition<screenSize){
		
		textPoint.classList.add('smooth-move');
	}
	//console.log(textPosition);
	//console.log(screenSize, screenWidth);
}

window.addEventListener('scroll',newScroll);