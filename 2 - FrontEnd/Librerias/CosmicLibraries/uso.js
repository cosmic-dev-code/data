
const element = $("#idElement");

const element = $(
	document.getElementById("#idElement")
);

element.target;

// Iteraciones.

$(".container > div", (div, index, array) => {
	div.val();
	array.len();
});

var elements = $(".container > div", true)

elements.len();

elements.each((div, index, array) => {
	div.val();
	array.len()
});

// Tipado

element.typeObject; // "HTMLDivElement"
element.typeTag; // "div"
element.typeOf; // "object"
element.bySelector; // "#idElement"
element.isInput();

// Extraer valores.

element.val(); // value | textContent
element.valHtml(); // innerHTML
element.valText(); // textContent
element.valTag(); // outerHTML

// Modificar valores.

element.setVal("Hola"); // value
element.html("");
element.addHtml("");
element.text("");
element.addText("");
element.remove();
element.reset(); // form.reset() | input.value | element.textContent

// Manipular hijos y padres.

element.lenTags();
element.rmTag(".counter");
element.rpcTag(
	document.getElementById("idDiv"), 
	oldElement
);
element.rpcTag(
	$("#idNewElement"), 
	$("#idOldElement")
);
element.firstTag();
element.lastTag();
element.allTags();
element.allTags((tag, index, array) => {
	tag.val();
	array.len();
});
element.tags("p:p:p:f").val();
element.tags("p:f:f:l").val();
element.tags("p:f:3:l").val();

let nodes = element.nodes();
	nodes.all() // array
	nodes.allText(); // array
	nodes.count;
	nodes.first;
	nodes.last

element.parentTag().val();
element.append();

element.append(
	document.getElementById("idDiv")
);
element.append(
	$("#idDiv")
);

// Eventos.

$("button").on("click", event => {
	// ...
});

$("button").click(event => {
	// ...
});

$("button").dblclick(event => {
	// ...
});

$("button").hover(event => {
	// ...
});

$("button").hover(
	event => {
		// hover...
	}, 
	event => {
		// leave...
	}
);
// load, keydown, keyup, keypress
$("button").mouseover(event => {});
$("button").key(event => {});
$("button").key("arrowUp", event => {});

$("button").fireEvent("click");
$("button").rmEvent("click");

// Modificar atributos.

$("img").attr("src", "url");
$("img").hasAttr("src");
$("img").rpcAttr("src", "href", "url");
$("img").rmAttr("src");
$("img").getAttr("src");
$("img").togAttr("src", "url");

$("div").attr({
	src: "Hola", 
	onclick: "alert('hola')", 
	style: "width: 100px; height: 100px;"
});

let attrs = $("img").allAttr();
	attrs.all; // [ [attr, value], [attr, value], [attr, value] ]
	attrs.attribs; // [attr, attr, attr]
	attrs.values; // [value, value, value]

// Modificar clases.

$("img").addClass("clase");
$("img").hasClass("clase");
$("img").rmClass("clase");
$("img").togClass("clase");
$("img").rpcClass("clase-antigua", "clase-nueva");
$("img").allClass(); // [ "clase-0", "clase-1", "clase-2" ]

// Modificar CSS.

$("section").css("width", 500);
$("section").css("height", 500);

$("section").css({
	width: 500, 
	height: 500
});

$("section").css("to-glass");
$("section").css("title");

$("div").toArrow("top");
$("div").toArrow("right");
$("div").toArrow("bottom", "#888");
$("div").toArrow("left");

// Otros.

$("div").click(e => {
	$("div").fullScreen();
});

$.log("Normal", "Mensaje");
$.log("Normal", "i"); // info
$.log("Normal", "s"); // success
$.log("Normal", "e"); // error

$.log("Normal", "Lol", "Boostrap", "i");