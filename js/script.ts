let myArray = [];
let myPosts = $(".myPosts");
class MyPlace{
	name = "";
	adress = "";
	zipCode = 0;
	city = "";
	img = "";
	dateAndTime = "";
	constructor(name:string, adress:string, zipCode:number, city:string, img:string, dateAndTime:string){
		this.name = name;
		this.adress = adress;
		this.zipCode = zipCode;
		this.city = city;
		this.img = img;
		this.dateAndTime = dateAndTime;dateAndTime
	}
	display(){
		myPosts.append(`
			<div class="col-sm-12 col-md-6 col-lg-3">
				<div class="rounded bg-white p-2 m-1">
					<h4 class="bg-secondary mb-0">${this.name}</h2>
					<div class="position-relative">
						<img class="d-sm-none d-md-inline" src="${this.img}" style="width: 100%; height: auto;">
						<p class="position-absolute text-white m-0" style="bottom: 0; right: 0;">Created: ${this.dateAndTime}</p>
					</div>
					<p class="m-0">${this.adress}, ${this.zipCode} ${this.city}</p>
				</div>
			</div>
		`)
	}
}
let karlskirche = new MyPlace("St. Charles Church", "Karlsplatz 1", 1010, "Vienna", "img/vienna.jfif", "Jan 01 2020 00:00");
myArray.push(karlskirche);
let schoenbrunn = new MyPlace("Schönbrunn Park", "Maxingstraße 13b", 1130 , "Vienna", "img/schoenbrunn.jfif", "Jan 01 2020 00:10");
myArray.push(schoenbrunn);
class MyRestaurant extends MyPlace{
	telNumber = "";
	type = "";
	webAdress = "";
	constructor(name:string, adress:string, zipCode:number, city:string, img:string, dateAndTime:string, telNumber:string, type:string, webAdress:string){
		super(name, adress, zipCode, city, img, dateAndTime);
		this.telNumber = telNumber;
		this.type = type;
		this.webAdress = webAdress;
	}
	display(){
		myPosts.append(`
			<div class="col-sm-12 col-md-6 col-lg-3">
				<div class="rounded bg-white p-2 m-1">
					<h4 class="bg-secondary mb-0">${this.name}</h2>
					<div class="position-relative">
						<img class="d-sm-none d-md-inline" src="${this.img}" style="width: 100%; height: auto;">
						<p class="position-absolute text-white m-0" style="bottom: 0; right: 0;">Created: ${this.dateAndTime}</p>
					</div>
					<p class="m-0">${this.adress}, ${this.zipCode} ${this.city}, ${this.telNumber}</p>
					<p class="m-0">${this.type}</p>
					<a href="${this.webAdress}" target="_blank"><p class="m-0">${this.webAdress}</p></a>
				</div>
			</div>
		`)
	}
}
let onRestaurant = new MyRestaurant("ON Restaurant", "Wehrgasse 8", 1050, "Vienna", "img/onRestaurant.jfif", "Jan 01 2020 10:10", "+43(1)5854900", "Chinese", "http://www.restaurant-on.at/");
myArray.push(onRestaurant);
let bioFrische = new MyRestaurant("BioFrische", "Stutterheimstraße 6", 1150, "Vienna", "img/bioFrische.jfif", "Jan 10 2020 10:10", "+43(1) 9529215", "Indian", "https://biofrische.wien");
myArray.push(bioFrische);
class MyEvent extends MyPlace{
	webAdress = "";
	eventDate = "";
	eventTime = "";
	ticketPrice = "";
	constructor(name:string, adress:string, zipCode:number, city:string, img:string, dateAndTime:string, webAdress:string, eventDate:string, eventTime:string, ticketPrice:string){
		super(name, adress, zipCode, city, img, dateAndTime);
		this.webAdress = webAdress;
		this.eventDate = eventDate;
		this.eventTime = eventTime;
		this.ticketPrice = ticketPrice;
	}
	display(){
		myPosts.append(`
			<div class="col-sm-12 col-md-6 col-lg-3">
				<div class="rounded bg-white p-2 m-1">
				<h4 class="bg-secondary mb-0">${this.name}</h2>
					<div class="position-relative">
						<img class="d-sm-none d-md-inline" src="${this.img}" style="width: 100%; height: auto;">
						<p class="position-absolute text-white m-0" style="bottom: 0; right: 0;">Created: ${this.dateAndTime}</p>
					</div>
					<p class="m-0">${this.adress}, ${this.zipCode} ${this.city}</p>
					<p class="m-0">${this.eventDate}, ${this.eventTime}</p>
					<p class="m-0">€ ${this.ticketPrice}</p>
					<a href="${this.webAdress}" target="_blank"><p class="m-0">${this.webAdress}</p></a>
				</div>
			</div>
		`)
	}
}
let cats = new MyEvent("Cats - the musical", "Ronacher- Seilerstätte 9", 1010, "Vienna", "img/cats.png", "Feb 10 2020 10:10", "http://catsmusical.at", "Feb 10 2020", "10:10", "120");
myArray.push(cats);
let guns = new MyEvent("Guns ‘n Roses", "Ernst-Happel Stadion, Meiereistraße 7", 1020, "Vienna", "img/guns.jfif", "Feb 10 2021 10:10", "http://catsmusical.at", "Feb 10 2021", "10:10", "95,50");
myArray.push(guns);
function displayThem(){
	for(let value of myArray){
	value.display();
	}
}
displayThem();
myArray.sort(function(a, b){
	let dateA:any = new Date(a.dateAndTime);
	let dateB:any = new Date(b.dateAndTime);
	return dateB - dateA;
})
myPosts = $(".ascending");
displayThem();
myArray.reverse();
myPosts = $(".descending");
displayThem();
//first attempt to sort using self-composed multi-layer sort function 
//(I failed to debug it for lack of time, but I think it's beautiful)
// function giveMeYear(obj){
// 	let d = new Date(obj.dateAndTime);
// 	let year = d.getFullYear();
// 	return year;
// }
// function giveMeMonth(obj){
// 	let d = new Date(obj.dateAndTime);
// 	let month = d.getMonth();
// 	return month;
// }
// function giveMeDay(obj){
// 	let d = new Date(obj.dateAndTime);
// 	let day = d.getDate();
// 	return day;
// }
// function giveMeHour(obj){
// 	let d = new Date(obj.dateAndTime);
// 	let hour = d.getHours();
// 	return hour;
// }
// function giveMeMinute(obj){
// 	let d = new Date(obj.dateAndTime);
// 	let minute = d.getMinutes();
// 	return minute;
// }
// let layer = 1;
// function myFunction(obj){
// 	let result;
// 	switch(true){
// 		case layer == 1:
// 		result = giveMeYear(obj);
// 		break;
// 		case layer == 2:
// 		result = giveMeMonth(obj);
// 		break;
// 		case layer == 3:
// 		result = giveMeDay(obj);
// 		break;
// 		case layer == 4:
// 		result = giveMeHour(obj);
// 		break;
// 		case layer == 5:
// 		result = giveMeMinute(obj);
// 		break;
// 	}
// 	return result;
// }
// let itemToCompare;
// let itemToCompareWith;
// function compareItems(){
// 	if(myFunction(itemToCompare) < myFunction(itemToCompareWith)){
// 		//swap items
// 		let rememberItem = itemToCompare;
// 		itemToCompare = itemToCompareWith;
// 		itemToCompareWith = rememberItem;
// 	} if(myFunction(itemToCompare) == myFunction(itemToCompareWith)){
// 		//go to next layer
// 		layer++;
// 		compareItems();
// 		//go back to previous layer
// 		layer--;
// 	}
// }
// for(let i = 0; i < myArray.length; i++){
// 	itemToCompare = myArray[i];
// 	for(let moveIndex = 1; moveIndex < myArray.length; moveIndex++){
// 		let newIndex;
// 		if(i + moveIndex < myArray.length){
// 			newIndex = i + moveIndex;
// 		} if(i + moveIndex >= myArray.length){
// 			newIndex = i + moveIndex - myArray.length;
// 		} 
// 		itemToCompareWith = myArray[newIndex];
// 		compareItems();
// 		//write items into array
// 		myArray[i] = itemToCompare;
// 		myArray[newIndex] = itemToCompareWith;
// 	}
// }