var bonetrousle = new Howl({
	src: ["audio/Undertale - Battle Against a True Hero.mp3"],
	loop: true,
});

var update_time = new Date();

var percent_time = 0.55;

var rate = 1;
var rate_timer = percent_time;

function update() {

	var new_time = new Date();
	var delta = new_time.getTime() - update_time.getTime();
	update_time.setTime(new_time.getTime());

	rate_timer -= rate * delta / 1000;

	if (rate_timer <= 0) {
		rate_timer += percent_time;
		rate += 0.005;
		bonetrousle.rate(rate);
		document.getElementById("speed").innerHTML = "speed: " + (rate * 100).toFixed(1) + "%";
	}

	document.getElementById("papyrus").style.top = (rate - Math.random() * rate * 1) + "px";
	document.getElementById("papyrus").style.left = (rate - Math.random() * rate * 1) + "px";
	requestAnimationFrame(update);
}

function run() {
	bonetrousle.play();
	update_time = new Date();
	requestAnimationFrame(update);
}
