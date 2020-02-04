import supertest from 'supertest';
import config from '../src/config/app';
import App from '../src/app';

describe('Server is live', () => {
	test('should response', async () => {
		const app = new App().getInstance();
		const server = app.listen();

		const res = await supertest(server).get('/');

		expect(res.status).toEqual(200);
		expect(res.text).toEqual(config.DEFAULT_LIVE_MESSAGE);
	});
});
