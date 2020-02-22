let myArray = [];
class MyPlace{
	name = "";
	adress = "";
	zipCode = 0;
	city = "";
	img = "";
	date = "";
	time = "";
	constructor(name:string, adress:string, zipCode:number, city:string, img:string, date:string, time:string){
		this.name = name;
		this.adress = adress;
		this.zipCode = zipCode;
		this.city = city;
		this.img = img;
		this.date = date;
		this.time = time;
	}
	display(){
		$(".myPosts").append(`
			<div class="col-sm-12 col-md-6 col-lg-3">
				<div class="rounded bg-white p-2 m-1">
					<h2>${this.name}</h2>
					<p>${this.adress}, ${this.zipCode} ${this.city}</p>
					<div class="position-relative">
						<img class="rounded d-sm-none d-md-inline" src="${this.img}" style="height: 110px; width: auto;">
						<p class="position-absolute text-white m-0" style="bottom: 0;">${this.date}, ${this.time}</p>
					</div>
				</div>
			</div>
		`)
	}
}
let karlskirche = new MyPlace("St. Charles Church", "Karlsplatz 1", 1010, "Vienna", "img/vienna.jfif", "22.02.2020", "00:00");
myArray.push(karlskirche);
let schoenbrunn = new MyPlace("Schönbrunn Park", "Maxingstraße 13b", 1130 , "Vienna", "img/schoenbrunn.jfif", "23.02.2020", "00:00");
myArray.push(schoenbrunn);
class MyRestaurant extends MyPlace{
	telNumber = "";
	type = "";
	webAdress = "";
	constructor(name:string, adress:string, zipCode:number, city:string, img:string, date:string, time:string, telNumber:string, type:string, webAdress:string){
		super(name, adress, zipCode, city, img, date, time);
		this.telNumber = telNumber;
		this.type = type;
		this.webAdress = webAdress;
	}
	display(){
		$(".myPosts").append(`
			<div class="col-sm-12 col-md-6 col-lg-3">
				<div class="rounded bg-white p-2 m-1">
					<h2>${this.name}</h2>
					<p class="m-0">${this.adress}, ${this.zipCode} ${this.city}, ${this.telNumber}</p>
					<p class="m-0">${this.type}</p>
					<a href="${this.webAdress}" target="_blank"><p class="m-0">${this.webAdress}</p></a>
					<div class="position-relative">
						<img class="rounded d-sm-none d-md-inline" src="${this.img}" style="height: 110px; width: auto;">
						<p class="position-absolute text-white m-0" style="bottom: 0;">${this.date}, ${this.time}</p>
					</div>
				</div>
			</div>
		`)
	}
}
let onRestaurant = new MyRestaurant("ON Restaurant", "Wehrgasse 8", 1050, "Vienna", "img/onRestaurant.jfif", "23.02.2020", "00:00", "+43(1)5854900", "Chinese", "http://www.restaurant-on.at/");
myArray.push(onRestaurant);
let bioFrische = new MyRestaurant("BioFrische", "Stutterheimstraße 6", 1150, "Vienna", "img/bioFrische.jfif", "23.02.2020", "00:00", "+43(1) 9529215", "Indian", "https://biofrische.wien");
myArray.push(bioFrische);
class MyEvent extends MyPlace{
	webAdress = "";
	eventDate = "";
	eventTime = "";
	ticketPrice = "";
	constructor(name:string, adress:string, zipCode:number, city:string, img:string, date:string, time:string, webAdress:string, eventDate:string, eventTime:string, ticketPrice:string){
		super(name, adress, zipCode, city, img, date, time);
		this.webAdress = webAdress;
		this.eventDate = eventDate;
		this.eventTime = eventTime;
		this.ticketPrice = ticketPrice;
	}
	display(){
		$(".myPosts").append(`
			<div class="col-sm-12 col-md-6 col-lg-3">
				<div class="rounded bg-white p-2 m-1">
					<h2>${this.name}</h2>
					<p class="m-0">${this.adress}, ${this.zipCode} ${this.city}</p>
					<p class="m-0">${this.eventDate}, ${this.eventTime}</p>
					<p class="m-0">€ ${this.ticketPrice}</p>
					<a href="${this.webAdress}" target="_blank"><p class="m-0">${this.webAdress}</p></a>
					<div class="position-relative">
						<img class="rounded d-sm-none d-md-inline" src="${this.img}" style="height: 110px; width: auto;">
						<p class="position-absolute text-white m-0" style="bottom: 0;">${this.date}, ${this.time}</p>
					</div>
				</div>
			</div>
		`)
	}
}
let cats = new MyEvent("Cats - the musical", "Ronacher- Seilerstätte 9", 1010, "Vienna", "img/cats.png", "15.12.2020", "20:00", "http://catsmusical.at", "15.12.2020", "20:00", "120");
myArray.push(cats);
let guns = new MyEvent("Guns ‘n Roses", "Ernst-Happel Stadion, Meiereistraße 7", 1020, "Vienna", "img/guns.jfif", "09.06.2020", "19:30", "http://catsmusical.at", "09.06.2020", "19:30", "95,50");
myArray.push(guns);
for(let value of myArray){
	value.display();
}