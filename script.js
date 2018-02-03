var array = [];

for (var i = 0; i < 10; i++) {
	array.push(function () {});
	console.log(i);
}

array.forEach(function (element) {
	element();
});