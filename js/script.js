function myFirstApp(name, age) {

alert("Привет, меня зовут " + name + " и это моя первая программа!");

	function showSkills() {
			let skills = ["html", "css", "Ph", "Ai"];

			for (let i=0; i < skills.length; i++) {
			alert("Я владею " + skills[i]);	
			}
	}

	showSkills();

	function checkAge() {
		if (age > 18) {
			alert("У вас отличные шансы стать FrontEnd-разработчиком!");
		} else { 
			alert("У вас все равно отличные шансы стать FrontEnd-разработчиком!");
		}
	}
	checkAge();

	function calcPow(num) {
		console.log(num*num)
	}
	calcPow(4)
}

myFirstApp("Ilya", 26)