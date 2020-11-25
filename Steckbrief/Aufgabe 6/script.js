/* Emissionswerte für die Kontinente 2008 und 2018 */
// Namespace benutze ich, wenn ich in einer anderen Datei die gleichen Konstanten habe //  
var NAME;
(function (NAME) {
    var Europa2008 = 4965.7;
    var Europa2018 = 4209.3;
    var Asien2008 = 12954.7;
    var Asien2018 = 16274.1;
    var Nordamerika2008 = 6600.4;
    var Nordamerika2018 = 6035.6;
    var Südamerika2008 = 1132.6;
    var Südamerika2018 = 1261.5;
    var Afrika2008 = 1028;
    var Afrika2018 = 1235.5;
    var Australien2008 = 1993;
    var Australien2018 = 2100.5;
    /* Gesamtemission der Kontinente 2018 */
    var Gesamtemission = Europa2018 + Asien2018 + Nordamerika2018
        + Südamerika2018 + Afrika2018 + Australien2018;
    /* Prozentanteil der Gesamtemission aller Kontinente 2018 */
    var AnteilEuropa = ((Europa2018 / Gesamtemission) * 100);
    var AnteilAsien = ((Asien2018 / Gesamtemission) * 100);
    var AnteilNordamerika = ((Nordamerika2018 / Gesamtemission) * 100);
    var AnteilSüdamerika = ((Südamerika2018 / Gesamtemission) * 100);
    var AnteilAfrika = ((Afrika2018 / Gesamtemission) * 100);
    var AnteilAustralien = ((Australien2018 / Gesamtemission) * 100);
    /* Prozentuale Veränderung der Kontinente im Vergleich 2008 und 2018 */
    var ProzentualeVeränderungEuropa = (((Europa2018 / Europa2008) - 1) * 100);
    var ProzentualeVeränderungAsien = (((Asien2018 / Asien2008) - 1) * 100);
    var ProzentualeVeränderungNordamerika = (((Nordamerika2018 / Nordamerika2008) - 1) * 100);
    var ProzentualeVeränderungSüdamerika = (((Südamerika2018 / Südamerika2008) - 1) * 100);
    var ProzentualeVeränderungAfrika = (((Afrika2018 / Afrika2008) - 1) * 100);
    var ProzentualeVeränderungAustralien = (((Australien2018 / Australien2008) - 1) * 100);
    /* Vergleich von kg CO2 der Kontinente 2008 und 2018 */
    var VeränderungCO2Europa = (Europa2018 - Europa2008);
    var VeränderungCO2Asien = (Asien2018 - Asien2008);
    var VeränderungCO2Nordamerika = (Nordamerika2018 - Nordamerika2008);
    var VeränderungCO2Südamerika = (Südamerika2018 - Südamerika2008);
    var VeränderungCO2Afrika = (Afrika2018 - Afrika2008);
    var VeränderungCO2Australien = (Australien2018 - Australien2008);
    // Funktion //
    function FunktionAllgemein(Wert2018, Anteil, ProzentualeVeränderung, VeränderungCO2, Kontinent) {
        document.getElementById("AbsoluterWert").innerHTML = Wert2018.toFixed(2) + "kg CO2";
        document.getElementById("RelativerWert").innerHTML = Anteil.toFixed(2) + "%";
        document.getElementById("WachstumsrateProzent").innerHTML = ProzentualeVeränderung.toFixed(2) + "%";
        document.getElementById("WachstumsrateAbsolut").innerHTML = VeränderungCO2.toFixed(2);
        document.querySelector(".chart").setAttribute('style', 'height:' + (Wert2018 / Gesamtemission * 100).toFixed(2) + '%');
        document.querySelector("#titleregion").innerHTML = Kontinent;
    }
    // Europa //
    document.getElementById("europe").addEventListener("click", function () {
        FunktionAllgemein(Europa2018, AnteilEuropa, ProzentualeVeränderungEuropa, VeränderungCO2Europa, "Europe");
    });
    // Asien //
    document.getElementById("asia").addEventListener("click", function () {
        FunktionAllgemein(Asien2018, AnteilAsien, ProzentualeVeränderungAsien, VeränderungCO2Asien, "Asia");
    });
    // Nordamerika //
    document.getElementById("northamerica").addEventListener("click", function () {
        FunktionAllgemein(Nordamerika2018, AnteilNordamerika, ProzentualeVeränderungNordamerika, VeränderungCO2Nordamerika, "Northamerica");
    });
    // Südamerika //
    document.getElementById("southamerica").addEventListener("click", function () {
        FunktionAllgemein(Südamerika2018, AnteilSüdamerika, ProzentualeVeränderungSüdamerika, VeränderungCO2Südamerika, "Southamerica");
    });
    // Afrika //
    document.getElementById("africa").addEventListener("click", function () {
        FunktionAllgemein(Afrika2018, AnteilAfrika, ProzentualeVeränderungAfrika, VeränderungCO2Afrika, "Africa");
    });
    // Australien //
    document.getElementById("australia").addEventListener("click", function () {
        FunktionAllgemein(Australien2018, AnteilAustralien, ProzentualeVeränderungAustralien, VeränderungCO2Australien, "Australia");
    });
})(NAME || (NAME = {}));
//# sourceMappingURL=script.js.map