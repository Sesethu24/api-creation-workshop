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
 
    res.json
 posts
} )

app.post('/login', (req,res)=>{

//authentication of user here

const username = req.body.username
const user = { name: username}
const accessToken = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET)
res.json({
    accessToken: accessToken
})
})
function authenticateToken(res,req,next) {
    
}

app.listen(5000)