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
        $(".myPosts").append("\n\t\t\t<div class=\"col-sm-12 col-md-6 col-lg-3\">\n\t\t\t\t<div class=\"rounded bg-white p-2 m-1\">\n\t\t\t\t\t<h2>" + this.name + "</h2>\n\t\t\t\t\t<p>" + this.adress + ", " + this.zipCode + " " + this.city + "</p>\n\t\t\t\t\t<div class=\"position-relative\">\n\t\t\t\t\t\t<img class=\"rounded d-sm-none d-md-inline\" src=\"" + this.img + "\" style=\"height: 110px; width: auto;\">\n\t\t\t\t\t\t<p class=\"position-absolute text-white m-0\" style=\"bottom: 0;\">" + this.date + ", " + this.time + "</p>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t");
    };
    return MyPlace;
}());
var karlskirche = new MyPlace("St. Charles Church", "Karlsplatz 1", 1010, "Vienna", "img/vienna.jfif", "22.02.2020", "00:00");
myArray.push(karlskirche);
var schoenbrunn = new MyPlace("Schönbrunn Park", "Maxingstraße 13b", 1130, "Vienna", "img/schoenbrunn.jfif", "23.02.2020", "00:00");
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
        $(".myPosts").append("\n\t\t\t<div class=\"col-sm-12 col-md-6 col-lg-3\">\n\t\t\t\t<div class=\"rounded bg-white p-2 m-1\">\n\t\t\t\t\t<h2>" + this.name + "</h2>\n\t\t\t\t\t<p class=\"m-0\">" + this.adress + ", " + this.zipCode + " " + this.city + ", " + this.telNumber + "</p>\n\t\t\t\t\t<p class=\"m-0\">" + this.type + "</p>\n\t\t\t\t\t<a href=\"" + this.webAdress + "\" target=\"_blank\"><p class=\"m-0\">" + this.webAdress + "</p></a>\n\t\t\t\t\t<div class=\"position-relative\">\n\t\t\t\t\t\t<img class=\"rounded d-sm-none d-md-inline\" src=\"" + this.img + "\" style=\"height: 110px; width: auto;\">\n\t\t\t\t\t\t<p class=\"position-absolute text-white m-0\" style=\"bottom: 0;\">" + this.date + ", " + this.time + "</p>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t");
    };
    return MyRestaurant;
}(MyPlace));
var onRestaurant = new MyRestaurant("ON Restaurant", "Wehrgasse 8", 1050, "Vienna", "img/onRestaurant.jfif", "23.02.2020", "00:00", "+43(1)5854900", "Chinese", "http://www.restaurant-on.at/");
myArray.push(onRestaurant);
var bioFrische = new MyRestaurant("BioFrische", "Stutterheimstraße 6", 1150, "Vienna", "img/bioFrische.jfif", "23.02.2020", "00:00", "+43(1) 9529215", "Indian", "https://biofrische.wien");
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
        $(".myPosts").append("\n\t\t\t<div class=\"col-sm-12 col-md-6 col-lg-3\">\n\t\t\t\t<div class=\"rounded bg-white p-2 m-1\">\n\t\t\t\t\t<h2>" + this.name + "</h2>\n\t\t\t\t\t<p class=\"m-0\">" + this.adress + ", " + this.zipCode + " " + this.city + "</p>\n\t\t\t\t\t<p class=\"m-0\">" + this.eventDate + ", " + this.eventTime + "</p>\n\t\t\t\t\t<p class=\"m-0\">\u20AC " + this.ticketPrice + "</p>\n\t\t\t\t\t<a href=\"" + this.webAdress + "\" target=\"_blank\"><p class=\"m-0\">" + this.webAdress + "</p></a>\n\t\t\t\t\t<div class=\"position-relative\">\n\t\t\t\t\t\t<img class=\"rounded d-sm-none d-md-inline\" src=\"" + this.img + "\" style=\"height: 110px; width: auto;\">\n\t\t\t\t\t\t<p class=\"position-absolute text-white m-0\" style=\"bottom: 0;\">" + this.date + ", " + this.time + "</p>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t");
    };
    return MyEvent;
}(MyPlace));
var cats = new MyEvent("Cats - the musical", "Ronacher- Seilerstätte 9", 1010, "Vienna", "img/cats.png", "15.12.2020", "20:00", "http://catsmusical.at", "15.12.2020", "20:00", "120");
myArray.push(cats);
var guns = new MyEvent("Guns ‘n Roses", "Ernst-Happel Stadion, Meiereistraße 7", 1020, "Vienna", "img/guns.jfif", "09.06.2020", "19:30", "http://catsmusical.at", "09.06.2020", "19:30", "95,50");
myArray.push(guns);
for (var _i = 0, myArray_1 = myArray; _i < myArray_1.length; _i++) {
    var value = myArray_1[_i];
    value.display();
}
