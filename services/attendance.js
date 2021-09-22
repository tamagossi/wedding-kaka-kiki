import RequestAdapterService from './request-adapter';

export default class AttendanceService extends RequestAdapterService {
	async addAttendances(attendance) {
		try {
			const { data } = await super.sendPostRequest(
				`${this.baseUrl}/attendance.json`,
				attendance
			);

			return data;
		} catch (error) {
			throw new Error('Adding attendance: ' + error);
		}
	}

	async getAttendances() {
		try {
			const response = await super.sendPostRequest(`${process.env.AUTH_API}/login`);

			return response;
		} catch (error) {
			throw new Error('Get attendances: ' + error);
		}
	}
}
