import axios from 'axios';

export default class RequestAdapterService {
	baseUrl = 'https://wedding-kaka-kiki-default-rtdb.asia-southeast1.firebasedatabase.app';

	constructor() {
		let requestHeader = {
			'Content-Type': 'application/json',
		};

		this.reqClient = axios.create({
			headers: requestHeader,
		});
	}

	sendGetRequest(URL, params) {
		return this.reqClient.get(URL, { params });
	}

	sendPostRequest(URL, requestBody) {
		return this.reqClient.post(URL, requestBody);
	}
}
