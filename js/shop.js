
// NavBar Template 
var source=document.getElementById('navTemplate').innerHTML;
var template=Handlebars.compile(source);
var data={
	navBrand: "SpaceBooks",
	About: "Our Team",
	Products:"Books",
	Contact:"Email"
};
var output=template(data);
document.getElementById("navRender").innerHTML=output;

// Header Template 

var source=document.getElementById('shopTemplate').innerHTML;
var template=Handlebars.compile(source);
var data={
	name:"EBooks", 
	menu: [
	{link:"http://google.com",Category: "Coding"},
	{link:"http://google.com",Category: "Neuroscience"},
	{link:"http://google.com",Category:"Fiction"},
	]
};
var output=template(data);
document.getElementById("shopdiv").innerHTML=output;


// Carousel Template 

var source=document.getElementById('carouselTemplate').innerHTML;
var template=Handlebars.compile(source);
var data={
	image1:"http://placehold.it/800x300",
	image2:"http://placehold.it/800x300",
	image3:"http://placehold.it/800x300"
};
var output=template(data);
document.getElementById("carouselRender").innerHTML=output;

 // Price Template 

var source=document.getElementById('itemTemplate').innerHTML;
var template=Handlebars.compile(source);
var data={
product:[
{Price: "$24.99",Captian: "1",Author: "Yes",Description:"This is a bla la bla bla bla bla bla", Stock: "In Stock"},
{Price: "$44.99",Captian: "3",Description:"This is a pizza"},
{Price: "$64.99",Captian: "4",Description:"This is a brain", Stock: "In Stock"},
{Price: "$84.99",Captian: "5",Description:"This is a book", Author: "Yes"},
]
};
var output=template(data);
document.getElementById("itemRender").innerHTML=output;



// Footer Render

var source=document.getElementById('footerTemplate').innerHTML;
var template=Handlebars.compile(source);
var data={
text: ""
};
var output=template(data);
document.getElementById("footerRender").innerHTML=output;


