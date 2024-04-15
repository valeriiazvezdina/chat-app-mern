const jwt = require('jsonwebtoken');

const authenticateToken = (req, res, next) => {
    try {
        const token = req.cookies.jwt;

        if (!token) {
            res.status(401).send('Token must be provided');
        } else {
            jwt.verify(token, process.env.SECRET_TOKEN, (err, user) => {
                if (err) {
                    res.status(403).send('access error');
                } else {
                    req.userId = user.userId;
                    next();
                }
            })
        }
    } catch(error) {
        console.log('Error in authenticating user', error);
        res.status(500).json({
            error: 'Internal server error'
        });
    }
};

module.exports = authenticateToken;