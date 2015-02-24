

$(document).ready(function() {
	$("button").click(function() {
		$("#box").animate({
			height: 'toggle'
		});
	});
});






//------digital clock-----//



function renderTime() {
	var currentTime = new Date();
	var diem = "AM";
	var h = currentTime.getHours();
	var m = currentTime.getMinutes();
	var s = currentTime.getSeconds();
	var n = currentTime.getMilliseconds();
	var myClock = document.getElementById('clockDisplay')
	setTimeout('renderTime()', 1);

	if (h == 0) {
		h = 12;
	} else if (h > 12) {
		h = h - 12;
		diem = "PM";
	}
	if (h < 10) {
		h = "0" + h;
	}
	if (m < 10) {
		m = "0" + m;
	}
	if (s < 10) {
		s = "0" + s;
	}

	if (s % 2 === 0) {

		myClock.style.backgroundColor = "red"
	} else {
		myClock.style.backgroundColor = "black"
	}



	myClock.textContent = h + ":" + m + ":" + s + ":" + n + diem;
	myClock.innerText = h + ":" + m + ":" + s + ":" + n + diem;
}

$(function(){
	renderTime();	
})




