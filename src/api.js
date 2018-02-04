const API_URL = '/api/';

async function queryAPI(query) {
	const res = await fetch(API_URL + query);
	const data = await res.json();
	return data;
}

async function getTotalInstalls() {
	return await queryAPI('installs');
}

async function getLastUpdated() {
	return await queryAPI('updated');
}

async function getModels() {
	return await queryAPI('models');
}

async function getCountries() {
	return await queryAPI('countries');
}

async function getMostActiveModel() {
	const models = await getModels();
	return models[0];
}

async function getMostActiveCountry() {
	const countries = await getCountries();
	return countries[0];
}

export default {
	getTotalInstalls,
	getLastUpdated,
	getModels,
	getCountries,
	getMostActiveCountry,
	getMostActiveModel
};
