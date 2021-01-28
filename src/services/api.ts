import axios from 'axios';

const apiCountries = axios.create({
  baseURL: 'https://restcountries.eu/rest/v2/',
});

const api = axios.create({
  baseURL: 'https://backend-places.herokuapp.com',
});

export { apiCountries, api };
