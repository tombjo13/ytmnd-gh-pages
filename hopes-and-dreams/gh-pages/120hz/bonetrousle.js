var bonetrousle = new Howl({
	src: ["audio/Undertale_Ost_087_-_Hopes_and_Dreams.mp3"],
	loop: true,
});

var update_time = new Date();

var percent_time = 1.82184;

var rate = 1;
var rate_timer = percent_time;

function update() {

	var new_time = new Date();
	var delta = new_time.getTime() - update_time.getTime();
	update_time.setTime(new_time.getTime());

	rate_timer -= rate * delta / 500;

	if (rate_timer <= 0) {
		rate_timer += percent_time;
		rate += 0.005;
		bonetrousle.rate(rate);
		document.getElementById("speed").innerHTML = "speed: " + (rate * 100).toFixed(1) + "%";
	}

	document.getElementById("papyrus").style.top = (rate - Math.random() * rate * 2) + "px";
	document.getElementById("papyrus").style.left = (rate - Math.random() * rate * 2) + "px";
	requestAnimationFrame(update);
}

function run() {
	bonetrousle.play();
	update_time = new Date();
	requestAnimationFrame(update);
}
