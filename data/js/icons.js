var puentes_icon = L.icon({
 iconUrl    : "data/plugins/images/puentes.png",
 iconSize   :[25,25],


});

//Crear ícono personalizado para la edificacion
var vivienda_icon = L.icon({
    iconUrl		:	"data/plugins/images/marcador.png",
    iconSize	: 	[25,25],
   
});

//Crear ícono personalizado para la edificacion
var vivienda_colectiva_icon = L.icon({
    iconUrl		:	"data/plugins/images/marcador1.png",
    iconSize	: 	[25,25],
});


//Crear ícono personalizado para la edificacion
var edificacion_icon = L.icon({
    iconUrl		:	"data/plugins/images/marcador2.png",
    iconSize	: 	[25,25],
});


//Crear ícono personalizado para la edificacion
var otrosusos_icon = L.icon({
    iconUrl		:	"data/plugins/images/marcador3.png",
    iconSize	: 	[25,25],
});

//Función para obtener el ícono según categoría
function obtenerIconEr (feature){

    if (feature.properties.USO_EDIFIC === "VIVIENDA"){
        return vivienda_icon;
    } 
    else if (feature.properties.USO_EDIFIC === "VIVIENDA COLECTIVA"){
        return vivienda_colectiva_icon;
    } 
    else if (feature.properties.USO_EDIFIC === "EDIFICACION"){
        return edificacion_icon;
    } 
    else if (feature.properties.USO_EDIFIC === "OTRO USO"){
        return otrosusos_icon;
    }
};



//Función para añadir el ícono correcto a cada categoría del GeoJSON
function cargarIconEr(feature, layer){
layer.setIcon(obtenerIconEr (feature));
};
