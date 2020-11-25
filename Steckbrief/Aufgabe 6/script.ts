/* Emissionswerte für die Kontinente 2008 und 2018 */

// Namespace benutze ich, wenn ich in einer anderen Datei die gleichen Konstanten habe //  

namespace NAME {                                            
    const Europa2008 : number = 4965.7;
    const Europa2018 : number = 4209.3;

    const Asien2008 : number = 12954.7;
    const Asien2018 : number = 16274.1;

    const Nordamerika2008: number = 6600.4;
    const Nordamerika2018: number = 6035.6;

    const Südamerika2008 : number = 1132.6;
    const Südamerika2018 : number = 1261.5;

    const Afrika2008 : number = 1028;
    const Afrika2018 : number = 1235.5;

    const Australien2008 : number = 1993;
    const Australien2018 : number = 2100.5;


    /* Gesamtemission der Kontinente 2018 */

    const Gesamtemission : number = Europa2018 + Asien2018 + Nordamerika2018
    + Südamerika2018 + Afrika2018 + Australien2018


    /* Prozentanteil der Gesamtemission aller Kontinente 2018 */

    const AnteilEuropa : number = ((Europa2018 / Gesamtemission) * 100);
    const AnteilAsien : number = ((Asien2018 / Gesamtemission) * 100);
    const AnteilNordamerika : number = ((Nordamerika2018 / Gesamtemission) * 100);
    const AnteilSüdamerika : number = ((Südamerika2018 / Gesamtemission) * 100);
    const AnteilAfrika : number = ((Afrika2018 / Gesamtemission) * 100);
    const AnteilAustralien : number = ((Australien2018 / Gesamtemission) * 100);


    /* Prozentuale Veränderung der Kontinente im Vergleich 2008 und 2018 */

    const ProzentualeVeränderungEuropa : number = (((Europa2018 / Europa2008) -1) * 100);
    const ProzentualeVeränderungAsien : number = (((Asien2018 / Asien2008) -1) * 100);
    const ProzentualeVeränderungNordamerika : number = (((Nordamerika2018 / Nordamerika2008) -1) * 100);
    const ProzentualeVeränderungSüdamerika : number = (((Südamerika2018 / Südamerika2008) -1) * 100);
    const ProzentualeVeränderungAfrika : number = (((Afrika2018 / Afrika2008) -1) * 100);
    const ProzentualeVeränderungAustralien : number = (((Australien2018 / Australien2008) -1) * 100);

    /* Vergleich von kg CO2 der Kontinente 2008 und 2018 */

    const VeränderungCO2Europa : number = (Europa2018 - Europa2008);
    const VeränderungCO2Asien : number = (Asien2018 - Asien2008);
    const VeränderungCO2Nordamerika : number = (Nordamerika2018 - Nordamerika2008);
    const VeränderungCO2Südamerika : number = (Südamerika2018 - Südamerika2008);
    const VeränderungCO2Afrika : number = (Afrika2018 - Afrika2008);
    const VeränderungCO2Australien : number = (Australien2018 - Australien2008);


    // Funktion //

   function FunktionAllgemein(Wert2018:number, Anteil:number, ProzentualeVeränderung: number, VeränderungCO2: number, Kontinent: string) {
    document.getElementById("AbsoluterWert").innerHTML = Wert2018.toFixed(2) + "kg CO2";
    document.getElementById("RelativerWert").innerHTML = Anteil.toFixed(2) + "%";
    document.getElementById("WachstumsrateProzent").innerHTML = ProzentualeVeränderung.toFixed(2) + "%";
    document.getElementById("WachstumsrateAbsolut").innerHTML = VeränderungCO2.toFixed(2);
    document.querySelector(".chart").setAttribute('style', 'height:' + (Wert2018 / Gesamtemission * 100).toFixed(2) + '%');
    document.querySelector("#titleregion").innerHTML = Kontinent;

   }

    // Europa //

    document.getElementById("europe").addEventListener("click", function () {
        FunktionAllgemein(Europa2018, AnteilEuropa, ProzentualeVeränderungEuropa, VeränderungCO2Europa, "Europe")

    })
      
    // Asien //

    document.getElementById("asia").addEventListener("click", function () {
        FunktionAllgemein(Asien2018, AnteilAsien, ProzentualeVeränderungAsien, VeränderungCO2Asien, "Asia")

    })

    // Nordamerika //

    document.getElementById("northamerica").addEventListener("click", function () {
        FunktionAllgemein(Nordamerika2018, AnteilNordamerika, ProzentualeVeränderungNordamerika, VeränderungCO2Nordamerika, "Northamerica")

    })

    // Südamerika //

    document.getElementById("southamerica").addEventListener("click", function () {
        FunktionAllgemein(Südamerika2018, AnteilSüdamerika, ProzentualeVeränderungSüdamerika, VeränderungCO2Südamerika, "Southamerica")

    })

    // Afrika //

    document.getElementById("africa").addEventListener("click", function () {
        FunktionAllgemein(Afrika2018, AnteilAfrika, ProzentualeVeränderungAfrika, VeränderungCO2Afrika, "Africa")

    })

    // Australien //

    document.getElementById("australia").addEventListener("click", function () {
        FunktionAllgemein(Australien2018, AnteilAustralien, ProzentualeVeränderungAustralien, VeränderungCO2Australien, "Australia")

    })
}