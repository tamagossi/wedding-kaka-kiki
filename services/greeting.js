import RequestAdapterService from './request-adapter';

export default class GreetingService extends RequestAdapterService {
	async addGreeting(greeting) {
		try {
			const { data } = await super.sendPostRequest(`${this.baseUrl}/greeting.json`, greeting);

			return data;
		} catch (error) {
			throw new Error('Adding greeting: ' + error);
		}
	}

	async getGreetings() {
		try {
			const { data } = await super.sendGetRequest(`${this.baseUrl}/greeting.json`);

			return data;
		} catch (error) {
			throw new Error('Get greetins: ' + error);
		}
	}
}
