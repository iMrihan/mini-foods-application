/** @format */

async function getData(url) {
	try {
		let res = await fetch(url);
		let data = await res.json();
		let response = data.meals;
		return response;
	} catch (e) {
		console.log("e:", e);
	}
}

function appendData(data, location) {
	data.map(({ strMealThumb, strMeal }) => {
		let div = document.createElement("div");
		let image = document.createElement("img");
		image.src = strMealThumb;
		let title = document.createElement("p");
		title.innerHTML = strMeal;
		div.append(image, title);
		location.append(div);
	});
}

function random(data, location) {
	data.map(({ strMealThumb, strMeal, strArea, strCategory }) => {
		let div = document.createElement("div");
		let image = document.createElement("img");
		image.src = strMealThumb;
		let title = document.createElement("p");
		title.innerHTML = `<span>Dish name:</span> ${strMeal}`;
		let area = document.createElement("p");
		area.innerHTML = `<span>Area:</span> ${strArea}`;

		let Category = document.createElement("p");
		Category.innerHTML = `<span>Category:</span> ${strCategory}`;

		let making = document.createElement("p");
		making.innerHTML = `<span>How to make:</span>"Vegetable Oil "Plain Fl "Bicarbonate Of S "Su "E "S "Cinna "Carr "Walnuts""Cream Cheese""Caster Sugar""Butter" "In a medium saucepan, stir the clotted cream, butter and cornflour over a low-ish heat and bring to a low simmer. Turn off the heat and keep warm.\r\nMeanwhile, put the cheese and nutmeg in a small bowl and add a good grinding of black pepper, then stir everything together (don’t add any salt at this stage).\r\nPut the pasta in another pan with 2 tsp salt, pour over some boiling water and cook following pack instructions (usually 3-4 mins). When cooked, scoop some of the cooking water into a heatproof jug or mug and drain the pasta, but not too thoroughly.\r\nAdd the pasta to the pan with the clotted cream mixture, then sprinkle over the cheese and gently fold everything together over a low heat using a rubber spatula. When combined, splash in 3 tbsp of the cooking water. At first, the pasta will look wet and sloppy: keep stirring until the water is absorbed and the sauce is glossy. Check the seasoning before transferring to heated bowls. Sprinkle over some chives or parsley, then serve immediately."
        strMeal: "Fettucine alfredo"`;

		div.append(image, title, Category, area, making);
		location.append(div);
	});
}
export { getData, appendData, random };
