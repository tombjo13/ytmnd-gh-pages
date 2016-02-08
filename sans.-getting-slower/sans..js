var sans = new Howl({
	src: ["audio/sans..ogg"],
	loop: true,
});

var update_time = new Date();

var percent_time = 0.57686;

sansrot = 0
sansmod = Math.round(Math.random() * 4)

var rate = 1;
var rate_timer = percent_time;

function update() {

	var divwidth = document.getElementById('rumbling_sans').offsetWidth;
	var divheight = document.getElementById('rumbling_sans').offsetHeight;

	var new_time = new Date();
	var delta = new_time.getTime() - update_time.getTime();
	update_time.setTime(new_time.getTime());

	rate_timer -= rate * 25 / (delta / (rate));

	if (rate_timer <= 0) {
		rate_timer += percent_time;
		rate -= (0.0001 * rate);
		if (rate <= 0.0001) {
			rate = 0.0001
		}		
		sans.rate(rate);
		document.getElementById("speed").innerHTML = "speed: " + (rate * 100).toFixed(2) + "%";
	}
	//transform:rotate(25deg)
	document.getElementById("sans").style.transform = "rotate("+sansrot+"deg)";
	document.getElementById("sans").style.top = ((rate - Math.random() * rate * 2)+((divheight-500)/2)) + "px";
	document.getElementById("sans").style.left = ((rate - Math.random() * rate * 2)+((divwidth-500)/2)) + "px";
	sansrot = sansrot + ((Math.round(Math.random()) * 4 - sansmod) * rate)
	requestAnimationFrame(update);
}

function run() {
	sans.play();
	update_time = new Date();
	requestAnimationFrame(update);
}
