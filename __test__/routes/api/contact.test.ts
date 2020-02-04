import request from 'supertest';
import App from '../../../src/app';

let app: any;
let server: any;

beforeEach(() => {
	app = new App().getInstance();
	server = app.listen();
});

describe('GET api/contacts', () => {
	test('respond with 200', async () => {
		const res = await request(server).get('/api/contacts');
		expect(res.status).toEqual(200);
	});
});