//function for fetching complete dataset with query
function fetchData(url, query) {
	return fetch(url+"?query="+ encodeURIComponent(query) +"&format=json")
		.then(response => response.json(response))
		.then(
			data => {
				return data.results.bindings;
			})
}

//function for mapping data objects into geoName and Qty and returning that as item
export function mapData(url, query) {
	return fetchData(url, query)
		.then(
			// result is the promiseValue Array
			data => {
				//mapping through the array and returning for each item the geoName and qty
				return data.map(
					item => {
						let geoName = item.herkomstSuperLabel.value;
						let geoURI = item.herkomstSuper.value;
						let qty = item.choCount.value;
						return {
							geoName,
							geoURI,
							qty
						}
					}
					)
			})
}

// function to receive the geoName of each item
export function mapDataGeoName(data) {
	return data.map(
		item => {
			return item.geoName;
		}
	)
}

// function to receive the qty name of each item
export function mapDataQty(data) {
		return data.map(
			item => {
				return item.qty;
			}
		)
}










/*



import {makeQuery, url_NMVW07} from "./queries.js";

//function for fetching complete dataset with query
function fetchData(url, query) {
	return fetch(url+"?query="+ encodeURIComponent(query) +"&format=json")
		.then(response => response.json(response))
		.then(
			data => {
				return data.results.bindings;
			})
}

//function for mapping data objects into geoName and Qty and returning that as item
export function mapData(url, query) {
	return fetchData(url, query)
		.then(
			// result is the promiseValue Array
			data => {
				//mapping through the array and returning for each item the geoName and qty
				return data.map(
					item => {
						let geoName = item.herkomstSuperLabel.value;
						let geoURI = item.herkomstSuper.value;
						let qty = item.choCount.value;
						return {
							geoName,
							geoURI,
							qty,
						}
					}
				)
			})
}


function createChildAndParentNode(data) {
	return data.map(
		item => {
			item.childNode = mapData(url_NMVW07, makeQuery(item.geoURI));
		})
}

export let nodeLinks = [];
console.log(nodeLinks);

export function createLinks(data) {
	createChildAndParentNode(data);
	data.map(item => {
		nodeLinks.push(
			{
				source: item.geoURI,
				target: "https://hdl.handle.net/20.500.11840/termmaster22827",
			})
	})
}
*/