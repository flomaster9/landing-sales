var id;

var scroller = function() {
	var curTop = window.pageYOffset;
	var top = document.querySelector(this.hash).getBoundingClientRect().top
	top = Math.round(top + window.pageYOffset);	
	var temp = curTop > top ? -1 : 1;
	var length = curTop - top;

	var scr = function () {
		if (Math.abs(length/4) < Math.abs(curTop-top)){
			temp = Math.abs(temp) > 300 ? temp : temp*1.4;
		}
		else{
			temp *= 0.95;
		}
		curTop += temp;
	    window.scrollTo(0, curTop);
		if ((temp > 0 && curTop > top)||(temp < 0 && curTop < top)){
			cancelAnimationFrame(id);
			console.log("exit")
			return;
		}
	id = requestAnimationFrame(scr);
	}

id = requestAnimationFrame(scr);
}

document.querySelectorAll('a[href^="#"]').forEach(function(item) {
	console.log(item);
	item.addEventListener('click',scroller);
})
