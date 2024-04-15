const jwt = require('jsonwebtoken');

const generateTokenSetCookies = (userId, res) => {
	const token = jwt.sign({ userId }, process.env.SECRET_TOKEN, {
		expiresIn: '15d',
	});

	res.cookie('jwt', token, {
		maxAge: 15 * 24 * 60 * 60 * 1000,
		httpOnly: true,
		sameSite: 'strict',
		secure: process.env.NODE_ENV !== 'development',
	});
};

module.exports = generateTokenSetCookies;