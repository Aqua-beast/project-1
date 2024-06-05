const jwt = require('jsonwebtoken');
const cookie = require('cookie');
require('dotenv').config();

const secret = process.env.SECRET_KEY;

function verifyToken(req, res, next) {
    const cookies = cookie.parse(req.headers.cookie || '');
    const token = cookies.UserInfo;
    if (token) {
        try {
            const verifyToken = jwt.verify(token, secret);
            if (verifyToken) {
                next();
            } else {
                return res.status(400).json({ error: 'Token has been modified.' })
            }
        } catch (err) {
            console.log(err);
            return res.status(400).json({ error: 'Invalid Token' });
        }

    } else {
        res.status(400).json({ error: 'No token recieved.' })
    }
}

module.exports = verifyToken