import * as request from 'supertest';
import mongoose from "mongoose";
import App from '../../../src/app';
import config from '../../../src/config/app';

let app, server, connection, db;

beforeAll(async () => {
	app = new App().getInstance();
	server = app.listen();

    connection = await mongoose.connect(config.MONGO_URL, {
      useNewUrlParser: true,
    });
    db = await connection.db(config.MONGO_URL);
});

afterAll(async () => {
    await connection.close();
    await db.close();
});

describe('GET api/contacts', () => {
	test('respond with 200', async () => {
		const res = await request(server).get('/api/contacts');
		expect(res.status).toEqual(200);
	});
});

describe('POST api/contacts', () => {
	test('respond with 200', async () => {
		const res = await request(server).post('/api/contacts');
		expect(res.status).toEqual(201);
	});
});