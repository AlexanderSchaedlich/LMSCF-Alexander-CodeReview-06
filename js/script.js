var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var myArray = [];
var myPosts = $(".myPosts");
var MyPlace = /** @class */ (function () {
    function MyPlace(name, adress, zipCode, city, img, dateAndTime) {
        this.name = "";
        this.adress = "";
        this.zipCode = 0;
        this.city = "";
        this.img = "";
        this.dateAndTime = "";
        this.name = name;
        this.adress = adress;
        this.zipCode = zipCode;
        this.city = city;
        this.img = img;
        this.dateAndTime = dateAndTime;
        dateAndTime;
    }
    MyPlace.prototype.display = function () {
        myPosts.append("\n\t\t\t<div class=\"col-sm-12 col-md-6 col-lg-3\">\n\t\t\t\t<div class=\"rounded bg-white p-2 m-1\">\n\t\t\t\t\t<h4 class=\"bg-secondary mb-0\">" + this.name + "</h2>\n\t\t\t\t\t<div class=\"position-relative\">\n\t\t\t\t\t\t<img class=\"d-sm-none d-md-inline\" src=\"" + this.img + "\" style=\"width: 100%; height: auto;\">\n\t\t\t\t\t\t<p class=\"position-absolute text-white m-0\" style=\"bottom: 0; right: 0;\">Created: " + this.dateAndTime + "</p>\n\t\t\t\t\t</div>\n\t\t\t\t\t<p class=\"m-0\">" + this.adress + ", " + this.zipCode + " " + this.city + "</p>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t");
    };
    return MyPlace;
}());
var karlskirche = new MyPlace("St. Charles Church", "Karlsplatz 1", 1010, "Vienna", "img/vienna.jfif", "Jan 01 2020 00:00");
myArray.push(karlskirche);
var schoenbrunn = new MyPlace("Schönbrunn Park", "Maxingstraße 13b", 1130, "Vienna", "img/schoenbrunn.jfif", "Jan 01 2020 00:10");
myArray.push(schoenbrunn);
var MyRestaurant = /** @class */ (function (_super) {
    __extends(MyRestaurant, _super);
    function MyRestaurant(name, adress, zipCode, city, img, dateAndTime, telNumber, type, webAdress) {
        var _this = _super.call(this, name, adress, zipCode, city, img, dateAndTime) || this;
        _this.telNumber = "";
        _this.type = "";
        _this.webAdress = "";
        _this.telNumber = telNumber;
        _this.type = type;
        _this.webAdress = webAdress;
        return _this;
    }
    MyRestaurant.prototype.display = function () {
        myPosts.append("\n\t\t\t<div class=\"col-sm-12 col-md-6 col-lg-3\">\n\t\t\t\t<div class=\"rounded bg-white p-2 m-1\">\n\t\t\t\t\t<h4 class=\"bg-secondary mb-0\">" + this.name + "</h2>\n\t\t\t\t\t<div class=\"position-relative\">\n\t\t\t\t\t\t<img class=\"d-sm-none d-md-inline\" src=\"" + this.img + "\" style=\"width: 100%; height: auto;\">\n\t\t\t\t\t\t<p class=\"position-absolute text-white m-0\" style=\"bottom: 0; right: 0;\">Created: " + this.dateAndTime + "</p>\n\t\t\t\t\t</div>\n\t\t\t\t\t<p class=\"m-0\">" + this.adress + ", " + this.zipCode + " " + this.city + ", " + this.telNumber + "</p>\n\t\t\t\t\t<p class=\"m-0\">" + this.type + "</p>\n\t\t\t\t\t<a href=\"" + this.webAdress + "\" target=\"_blank\"><p class=\"m-0\">" + this.webAdress + "</p></a>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t");
    };
    return MyRestaurant;
}(MyPlace));
var onRestaurant = new MyRestaurant("ON Restaurant", "Wehrgasse 8", 1050, "Vienna", "img/onRestaurant.jfif", "Jan 01 2020 10:10", "+43(1)5854900", "Chinese", "http://www.restaurant-on.at/");
myArray.push(onRestaurant);
var bioFrische = new MyRestaurant("BioFrische", "Stutterheimstraße 6", 1150, "Vienna", "img/bioFrische.jfif", "Jan 10 2020 10:10", "+43(1) 9529215", "Indian", "https://biofrische.wien");
myArray.push(bioFrische);
var MyEvent = /** @class */ (function (_super) {
    __extends(MyEvent, _super);
    function MyEvent(name, adress, zipCode, city, img, dateAndTime, webAdress, eventDate, eventTime, ticketPrice) {
        var _this = _super.call(this, name, adress, zipCode, city, img, dateAndTime) || this;
        _this.webAdress = "";
        _this.eventDate = "";
        _this.eventTime = "";
        _this.ticketPrice = "";
        _this.webAdress = webAdress;
        _this.eventDate = eventDate;
        _this.eventTime = eventTime;
        _this.ticketPrice = ticketPrice;
        return _this;
    }
    MyEvent.prototype.display = function () {
        myPosts.append("\n\t\t\t<div class=\"col-sm-12 col-md-6 col-lg-3\">\n\t\t\t\t<div class=\"rounded bg-white p-2 m-1\">\n\t\t\t\t<h4 class=\"bg-secondary mb-0\">" + this.name + "</h2>\n\t\t\t\t\t<div class=\"position-relative\">\n\t\t\t\t\t\t<img class=\"d-sm-none d-md-inline\" src=\"" + this.img + "\" style=\"width: 100%; height: auto;\">\n\t\t\t\t\t\t<p class=\"position-absolute text-white m-0\" style=\"bottom: 0; right: 0;\">Created: " + this.dateAndTime + "</p>\n\t\t\t\t\t</div>\n\t\t\t\t\t<p class=\"m-0\">" + this.adress + ", " + this.zipCode + " " + this.city + "</p>\n\t\t\t\t\t<p class=\"m-0\">" + this.eventDate + ", " + this.eventTime + "</p>\n\t\t\t\t\t<p class=\"m-0\">\u20AC " + this.ticketPrice + "</p>\n\t\t\t\t\t<a href=\"" + this.webAdress + "\" target=\"_blank\"><p class=\"m-0\">" + this.webAdress + "</p></a>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t");
    };
    return MyEvent;
}(MyPlace));
var cats = new MyEvent("Cats - the musical", "Ronacher- Seilerstätte 9", 1010, "Vienna", "img/cats.png", "Feb 10 2020 10:10", "http://catsmusical.at", "Feb 10 2020", "10:10", "120");
myArray.push(cats);
var guns = new MyEvent("Guns ‘n Roses", "Ernst-Happel Stadion, Meiereistraße 7", 1020, "Vienna", "img/guns.jfif", "Feb 10 2021 10:10", "http://catsmusical.at", "Feb 10 2021", "10:10", "95,50");
myArray.push(guns);
function displayThem() {
    for (var _i = 0, myArray_1 = myArray; _i < myArray_1.length; _i++) {
        var value = myArray_1[_i];
        value.display();
    }
}
displayThem();
myArray.sort(function (a, b) {
    var dateA = new Date(a.dateAndTime);
    var dateB = new Date(b.dateAndTime);
    return dateB - dateA;
});
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
