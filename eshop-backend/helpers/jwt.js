const {expressJwt} = require("express-jwt")
function authJwt(){
    const secret = process.env.secret;
    //  const api = process.env.API_URL
    expressJwt({
        secret,
        algorithms: ["HS256"],
        
    }).unless({
        path:[
            `${api}/user/login`,
            // `${api}/user/register`
        ]
    })
}

module.exports = authJwt;