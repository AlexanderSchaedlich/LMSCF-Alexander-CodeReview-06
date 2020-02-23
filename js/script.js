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
    function MyPlace(name, adress, zipCode, city, img, date, time) {
        this.name = "";
        this.adress = "";
        this.zipCode = 0;
        this.city = "";
        this.img = "";
        this.date = "";
        this.time = "";
        this.name = name;
        this.adress = adress;
        this.zipCode = zipCode;
        this.city = city;
        this.img = img;
        this.date = date;
        this.time = time;
    }
    MyPlace.prototype.display = function () {
        myPosts.append("\n\t\t\t<div class=\"col-sm-12 col-md-6 col-lg-3\">\n\t\t\t\t<div class=\"rounded bg-white p-2 m-1\">\n\t\t\t\t\t<h4 class=\"bg-secondary mb-0\">" + this.name + "</h2>\n\t\t\t\t\t<div class=\"position-relative\">\n\t\t\t\t\t\t<img class=\"d-sm-none d-md-inline\" src=\"" + this.img + "\" style=\"width: 100%; height: auto;\">\n\t\t\t\t\t\t<p class=\"position-absolute text-white m-0\" style=\"bottom: 0; right: 0;\">Created: " + this.date + ", " + this.time + "</p>\n\t\t\t\t\t</div>\n\t\t\t\t\t<p class=\"m-0\">" + this.adress + ", " + this.zipCode + " " + this.city + "</p>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t");
    };
    return MyPlace;
}());
var karlskirche = new MyPlace("St. Charles Church", "Karlsplatz 1", 1010, "Vienna", "img/vienna.jfif", "Jan 01 2020", "00:00");
myArray.push(karlskirche);
var schoenbrunn = new MyPlace("Schönbrunn Park", "Maxingstraße 13b", 1130, "Vienna", "img/schoenbrunn.jfif", "Jan 01 2020", "00:10");
myArray.push(schoenbrunn);
var MyRestaurant = /** @class */ (function (_super) {
    __extends(MyRestaurant, _super);
    function MyRestaurant(name, adress, zipCode, city, img, date, time, telNumber, type, webAdress) {
        var _this = _super.call(this, name, adress, zipCode, city, img, date, time) || this;
        _this.telNumber = "";
        _this.type = "";
        _this.webAdress = "";
        _this.telNumber = telNumber;
        _this.type = type;
        _this.webAdress = webAdress;
        return _this;
    }
    MyRestaurant.prototype.display = function () {
        myPosts.append("\n\t\t\t<div class=\"col-sm-12 col-md-6 col-lg-3\">\n\t\t\t\t<div class=\"rounded bg-white p-2 m-1\">\n\t\t\t\t\t<h4 class=\"bg-secondary mb-0\">" + this.name + "</h2>\n\t\t\t\t\t<div class=\"position-relative\">\n\t\t\t\t\t\t<img class=\"d-sm-none d-md-inline\" src=\"" + this.img + "\" style=\"width: 100%; height: auto;\">\n\t\t\t\t\t\t<p class=\"position-absolute text-white m-0\" style=\"bottom: 0; right: 0;\">Created: " + this.date + ", " + this.time + "</p>\n\t\t\t\t\t</div>\n\t\t\t\t\t<p class=\"m-0\">" + this.adress + ", " + this.zipCode + " " + this.city + ", " + this.telNumber + "</p>\n\t\t\t\t\t<p class=\"m-0\">" + this.type + "</p>\n\t\t\t\t\t<a href=\"" + this.webAdress + "\" target=\"_blank\"><p class=\"m-0\">" + this.webAdress + "</p></a>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t");
    };
    return MyRestaurant;
}(MyPlace));
var onRestaurant = new MyRestaurant("ON Restaurant", "Wehrgasse 8", 1050, "Vienna", "img/onRestaurant.jfif", "Jan 01 2020", "10:10", "+43(1)5854900", "Chinese", "http://www.restaurant-on.at/");
myArray.push(onRestaurant);
var bioFrische = new MyRestaurant("BioFrische", "Stutterheimstraße 6", 1150, "Vienna", "img/bioFrische.jfif", "Jan 10 2020", "10:10", "+43(1) 9529215", "Indian", "https://biofrische.wien");
myArray.push(bioFrische);
var MyEvent = /** @class */ (function (_super) {
    __extends(MyEvent, _super);
    function MyEvent(name, adress, zipCode, city, img, date, time, webAdress, eventDate, eventTime, ticketPrice) {
        var _this = _super.call(this, name, adress, zipCode, city, img, date, time) || this;
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
        myPosts.append("\n\t\t\t<div class=\"col-sm-12 col-md-6 col-lg-3\">\n\t\t\t\t<div class=\"rounded bg-white p-2 m-1\">\n\t\t\t\t<h4 class=\"bg-secondary mb-0\">" + this.name + "</h2>\n\t\t\t\t\t<div class=\"position-relative\">\n\t\t\t\t\t\t<img class=\"d-sm-none d-md-inline\" src=\"" + this.img + "\" style=\"width: 100%; height: auto;\">\n\t\t\t\t\t\t<p class=\"position-absolute text-white m-0\" style=\"bottom: 0; right: 0;\">Created: " + this.date + ", " + this.time + "</p>\n\t\t\t\t\t</div>\n\t\t\t\t\t<p class=\"m-0\">" + this.adress + ", " + this.zipCode + " " + this.city + "</p>\n\t\t\t\t\t<p class=\"m-0\">" + this.eventDate + ", " + this.eventTime + "</p>\n\t\t\t\t\t<p class=\"m-0\">\u20AC " + this.ticketPrice + "</p>\n\t\t\t\t\t<a href=\"" + this.webAdress + "\" target=\"_blank\"><p class=\"m-0\">" + this.webAdress + "</p></a>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t");
    };
    return MyEvent;
}(MyPlace));
var cats = new MyEvent("Cats - the musical", "Ronacher- Seilerstätte 9", 1010, "Vienna", "img/cats.png", "Feb 10 2020", "10:10", "http://catsmusical.at", "Feb 10 2020", "10:10", "120");
myArray.push(cats);
var guns = new MyEvent("Guns ‘n Roses", "Ernst-Happel Stadion, Meiereistraße 7", 1020, "Vienna", "img/guns.jfif", "Feb 10 2021", "10:10", "http://catsmusical.at", "Feb 10 2021", "10:10", "95,50");
myArray.push(guns);
for (var _i = 0, myArray_1 = myArray; _i < myArray_1.length; _i++) {
    var value = myArray_1[_i];
    value.display();
    // console.log(value.date + " " + value.time);
}
// console.log(myArray)
// myPosts = $(".ascending");
// for(let value of myArray){
// 	let dateArray = [];
// 	let d = new Date(value.date);
// 	let year = $(this).year = d.getFullYear();
// 	let month = $(this).month = d.getMonth();
// 	let day = $(this).day = d.getDay();
// 	console.log(month);
// 	myArray.sort(function(a,b){ return b.month - a.month });
// 	value.display();
// }
function giveMeYear(obj) {
    var d = new Date(obj.date);
    var year = d.getFullYear();
    return year;
}
function giveMeMonth(obj) {
    var d = new Date(obj.date);
    var month = d.getMonth();
    return month;
}
function giveMeDay(obj) {
    var d = new Date(obj.date);
    var day = d.getDate();
    return day;
}
function giveMeHour(obj) {
    var string = obj.date + " " + obj.time;
    var d = new Date(string);
    var hour = d.getHours();
    return hour;
}
function giveMeMinute(obj) {
    var string = obj.date + " " + obj.time;
    var d = new Date(string);
    var minute = d.getMinutes();
    return minute;
}
var layer = 1;
function myFunction(obj) {
    var result;
    switch (true) {
        case layer == 1:
            result = giveMeYear(obj);
            break;
        case layer == 2:
            result = giveMeMonth(obj);
            break;
        case layer == 3:
            result = giveMeDay(obj);
            break;
        case layer == 4:
            result = giveMeHour(obj);
            break;
        case layer == 5:
            result = giveMeMinute(obj);
            break;
    }
    return result;
}
var itemToCompare;
var itemToCompareWith;
function compareItems() {
    if (myFunction(itemToCompare) < myFunction(itemToCompareWith)) {
        //swap items
        var rememberItem = itemToCompare;
        itemToCompare = itemToCompareWith;
        itemToCompareWith = rememberItem;
    }
    if (myFunction(itemToCompare) == myFunction(itemToCompareWith)) {
        //go to different layer
        layer++;
        compareItems();
        layer--;
    }
}
for (var i = 0; i < myArray.length; i++) {
    // console.log(myArray[i]);
    itemToCompare = myArray[i];
    for (var moveIndex = 1; moveIndex < myArray.length; moveIndex++) {
        var newIndex = void 0;
        if (i + moveIndex < myArray.length) {
            newIndex = i + moveIndex;
        }
        if (i + moveIndex >= myArray.length) {
            newIndex = i + moveIndex - myArray.length;
        }
        itemToCompareWith = myArray[newIndex];
        compareItems();
        //write items into array
        myArray[i] = itemToCompare;
        myArray[newIndex] = itemToCompareWith;
    }
}
// for(let value of myArray){
// 	console.log(value.date + " " + value.time);
// }
// console.log(myArray)
