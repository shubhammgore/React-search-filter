import express from 'express';
const app = express();
import { Users } from './users.js';
import cors from 'cors';

app.use(cors());

app.get('/', (req, res) => {
	const { q } = req.query; // for ?=query

	const keys = ['first_name', 'last_name', 'email'];

	const search = (data) => {
		return data.filter((item) =>
			keys.some((key) => item[key].toLowerCase().includes(q))
		);
	};

	// For MONGODB example
	// const users = User.find({$regex: q})

	// for showing only 10 record  in list
	q ? res.json(search(Users).slice(0, 10)) : res.json(Users.slice(0, 10));
});

app.listen(5000, () => console.log('API is working!'));
