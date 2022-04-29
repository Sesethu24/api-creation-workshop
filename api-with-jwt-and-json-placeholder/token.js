require('dotenv').config();
const express =require('express');
const req = require('express/lib/request');
const app = express()
const jwt = require('jsonwebtoken');

app.use(express.json());

const posts = [{
     username : 'Sesethu24'
}];

app.get('/api/posts', authenticateToken,(req,res) => {
     
    res.json(posts.filter(post => post.username === req.user.name))
 posts
} )
function authenticateToken(res,req,next) {
    const authHeader = req.headers['authorization']
    const token = authHeader && authHeader.split(' ')[1]
    if (token === null) return res.sendStatus(401);
    try {
        jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
        next()
    } catch(err) {
        console.log(err);
        if (err) return res.sendStatus(403)
        req.user = user
        next()
      }
}

app.listen(5000)