var africa08 : number = 1028;
var africa18 : number = 1235.5;

var southamerica08 : number = 1132.6;
var southamerica18 : number = 1261.5;

var europe08: number = 4209.3;
var europe18 : number = 4965.7;

var northamerica08 : number = 6600.4;
var northamerica18 : number = 6035.6;

var asia08 : number = 12954.7;
var asia18 : number = 16274.1;

var australia08 : number = 1993;
var australia18 : number = 2100.5;

var total : number = africa18 + southamerica18 + europe18 + northamerica18 + asia18 + australia18;

console. log ("Die Emission von Europa ist " + europe18 + "kg CO2");
console. log("Relativ zur Gesamtemission der Welt verursacht Europa damit" + (europe18/total*100) + "%")
console. log ("Für Europa hat sich 2018 im Vergleich zu 2008 die Emission um" + (europe18/europe08*100) + "% verändert")
console. log ("2018 im Vergleich zu 2008 sind das" + (europe18-europe08) + "kg CO2")

console.log ('Die Emission von Afrika ist' + africa18 + 'kg CO2');
console. log('Relativ zur Gesamtemission der Welt verursacht Afrika damit' + (africa18/total*100) + "%")
console. log ('Für Afrika hat sich 2018 im Vergleich zu 2008 die Emission um' + (africa18/africa08*100) + '% verändert')
console. log ('2018 im Vergleich zu 2008 sind das' + (africa18-africa08) + 'kg CO2')

console. log ('Die Emission von Süd Amerika ist' + southamerica18 + 'kg CO2');
console. log('Relativ zur Gesamtemission der Welt verursacht Süd Amerika damit' + (southamerica18/total*100) + '%')
console. log ('Für Süd Amerika hat sich 2018 im Vergleich zu 2008 die Emission um' + (southamerica18/southamerica08*100) + '% verändert')
console. log ('2018 im Vergleich zu 2008 sind das' + (southamerica18-southamerica08) + 'kg CO2')

console. log ('Die Emission von Nord Amerika ist' + northamerica18 + 'kg CO2');
console. log('Relativ zur Gesamtemission der Welt verursacht Nord Amerika damit' + (northamerica18/total*100) + '%')
console. log ('Für Nord Amerika hat sich 2018 im Vergleich zu 2008 die Emission um' + (northamerica18/northamerica08*100) + '% verändert')
console. log ('2018 im Vergleich zu 2008 sind das' + (northamerica18-northamerica08) + 'kg CO2')

console. log ('Die Emission von Asien ist' + asia18 + 'kg CO2');
console. log('Relativ zur Gesamtemission der Welt verursacht Asien damit' + (asia18/total*100) + '%')
console. log ('Für Asien hat sich 2018 im Vergleich zu 2008 die Emission um' + (asia18/asia08*100) + '% verändert')
console. log ('2018 im Vergleich zu 2008 sind das' + (asia18-asia08) + 'kg CO2')

console. log ('Die Emission von Australien ist' + australia18 + 'kg CO2');
console. log('Relativ zur Gesamtemission der Welt verursacht Australien damit' + (australia18/total*100) + '%')
console. log ('Für Australien hat sich 2018 im Vergleich zu 2008 die Emission um' + (australia18/australia08*100) + '% verändert')
console. log ('2018 im Vergleich zu 2008 sind das' + (australia18-australia08) + 'kg CO2')