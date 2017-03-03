var bonetrousle = new Howl({
	src: ["audio/LazyTown_We_are_Number_One_Music_Video.ogg"],
	loop: true,
});

var update_time = new Date();

var percent_time = 0.57686;

var rate = 1;
var rate_timer = percent_time;

function update() {

	var new_time = new Date();
	var delta = new_time.getTime() - update_time.getTime();
	update_time.setTime(new_time.getTime());

	rate_timer -= rate * delta / 2795;

	if (rate_timer <= 0) {
		rate_timer += percent_time;
		rate += 0.01;
		bonetrousle.rate(rate);
		document.getElementById("speed").innerHTML = "speed: " + (rate * 100).toFixed(0) + "%";
	}

	document.getElementById("219448071f721abedc440b38fa6a61ab").style.top = (rate - Math.random() * rate * 2) + "px";
	document.getElementById("219448071f721abedc440b38fa6a61ab").style.left = (rate - Math.random() * rate * 2) + "px";
	requestAnimationFrame(update);
}

function run() {
	bonetrousle.play();
	update_time = new Date();
	requestAnimationFrame(update);
}
