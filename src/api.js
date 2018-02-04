const API_URL = 'https://lineageos-stats-server.herokuapp.com/api/';

async function queryAPI(query) {
	const res = await fetch(API_URL + query);
	const data = await res.json();
	return data;
}

export async function getTotalInstalls() {
	return await queryAPI('installs');
}

export async function getLastUpdated() {
	return await queryAPI('updated');
}

export async function getModels() {
	return await queryAPI('models');
}

export async function getCountries() {
	const countries = await queryAPI('countries');
	return countries.slice(1);
}

export async function getMostActiveModel() {
	const models = await getModels();
	return models[0];
}

export async function getMostActiveCountry() {
	const countries = await getCountries();
	return countries[0];
}
