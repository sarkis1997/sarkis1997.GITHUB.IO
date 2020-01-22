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

Het project is afhankelijk van 1 library, <a href="https://github.com/RasmusFonseca/d3RangeSlider/blob/master/d3RangeSlider.js" "target="_blank">d3RangeSlider.js</a>


## Installatie
1. Run de command line
2. `git clone https://github.com/sarkis1997/sarkis1997.GITHUB.IO/`
3. Open het project en sleep index.html naar je browser


## What is this project about?
This project is about to get more attention of younger people for the 'Nationaal Museum van Wereldculturen' (NMVW).

### but how?
I had the idea to create a 'social media' lookalike app where the user can scroll through.
The focus of the app is on slavery.
I wanted to give the users an idea and feeling of slavery by showing all kind of items that were related to slavery.
By showing the images, titles, descriptions and the periods of introduce I'll try to make a timeline in which the items will be showed from past to present. 
At the bottom of the page, there will be images showed of slavery during the period of that product to make an extra impression.

## Features
Scroll through the timeline

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
