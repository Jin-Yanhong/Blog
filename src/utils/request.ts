import axios from 'axios';

const service = axios.create({
	baseURL: process.env.REACT_APP_SERVER_URL, // url = base url + request url
	timeout: 5000,
	// withCredentials: true, // send cookies when cross-domain requests
});

// Request interceptors
service.interceptors.request.use(
	(config) => config,
	(error) => console.log(error),
);

// Response interceptors
service.interceptors.response.use(
	(response) => response.data.data,
	(error) => console.log(error),
);

export default service;
