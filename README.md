# Zorgcowboys

<img src="https://github.com/sarkis1997/sarkis1997.GITHUB.IO/blob/master/media/scrhome.png">

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

## functies
* Wisselen per jaar
* Wisselen tussen alle zorgsectoren en weergave per zorgsector (IN ONTWIKKELING)
* Live zoekfunctie
* Weergave aantal zorginstellingen per jaar
* Hover per zorgintelling
* Klik per zorginstelling (IN ONTWIKKELING)
* Klikbare legenda filter
* Range Slider omzet


## API
The API is a dataset of around 700.000 objects of the NMVW. 
I have fetched all the objects related to slavery.
To be more specific, I have fetched the following things per object:
* Titles
* Descriptions
* Periods
* Images

## Query
```
PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
   PREFIX dc: <http://purl.org/dc/elements/1.1/>
   PREFIX dct: <http://purl.org/dc/terms/>
   PREFIX skos: <http://www.w3.org/2004/02/skos/core#>
   PREFIX edm: <http://www.europeana.eu/schemas/edm/>
   PREFIX foaf: <http://xmlns.com/foaf/0.1/>

   SELECT ?cho ?title ?description ?objLabel ?img ?period WHERE {
     ?cho edm:isRelatedTo <https://hdl.handle.net/20.500.11840/termmaster2647> .
     ?cho dc:title ?title .
       FILTER langMatches(lang(?title), "ned")
     OPTIONAL { ?cho dc:description ?description } .
     ?cho edm:object ?obj .
       VALUES ?type { "gereedschap en uitrusting" "slavenketens" }
     ?obj skos:prefLabel ?objLabel .
     ?cho edm:isShownBy ?img .
     ?cho dct:created ?period
   }
```

## License
<a href="https://github.com/sarkis1997/frontend-applications/blob/master/LICENSE">MIT</a> @ Sarkis Moeradjan
