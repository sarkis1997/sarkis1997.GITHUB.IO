# Zorgcowboys

<img src="https://github.com/sarkis1997/sarkis1997.GITHUB.IO/blob/master/media/scrhome.png">

## functies
* Wisselen per jaar
* Wisselen tussen alle zorgsectoren en weergave per zorgsector (IN ONTWIKKELING)
* Live zoekfunctie
* Weergave aantal zorginstellingen per jaar
* Hover per zorgintelling
* Klik per zorginstelling (IN ONTWIKKELING)
* Klikbare legenda filter
* Range Slider

## bugs
* Wisselen naar 'per zorgsector' weergave werkt nog niet
* Deep Dive (klikken op zorginstellingen) heeft nog geen datavisualisatie
* Mobiele versie is niet beschikaar

## Opzet project
De applicatie is gebouwd zonder framework met html, css en js, maar heeft wel iets weg van een framework.<br>
De structuur is opgedeeld zoals de meeste frameworks. De basis van het project is opgedeeld als volgt: 

* index.html
* js
* css

De map js bestaat uit:
* app.js
* modules map
* utils map

App.js wordt aangeroepen in index.html, waarop vervolgens app.js verschillende utils en modules gebruikt om de app te draaien.

Het project is afhankelijk van 1 library, <a href="https://github.com/RasmusFonseca/d3RangeSlider/blob/master/d3RangeSlider.js">d3RangeSlider.js</a>


## Installatie
1. Run de command line
2. `git clone https://github.com/sarkis1997/sarkis1997.GITHUB.IO/`
3. Open het project en sleep index.html naar je browser

## Data
De dataset is een json bestand en afkomstig van Pointer van KRO-NCRV.<br>
Het bestand bevat voornamelijk financiële informatie over zorginstellingen in Nederland van de periode 2011 t/m 2018.

In deze applicatie wordt de volgende specifieke data gebruikt:
* Naam zorginstelling
* Winst
* Omzet
* Winstpercentage
* Jaar

## License
<a href="https://github.com/sarkis1997/sarkis1997.GITHUB.IO/blob/master/LICENSE">MIT</a> @ Sarkis Moeradjan