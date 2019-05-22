const jwt  = require('jsonwebtoken'); // Using node-jsonwebtoken library

function generate_jwt() {
    var visitor = document.getElementById("myVisitor").value;
    var account = document.getElementById("myAccount").value;
    var role = document.getElementById("myRole").value;
    var privateInfo = document.getElementById("myPrivateInfo").value;

    var snippet = {
        visitor: {
            id:              visitor,   // Required if user is logged in
            role: role,
            privateInfo: privateInfo
        },
        account: {
            id:           account // Highly recommended
        }
    };

    console.log("snippet: "+snippet);

    var jwt_token = jwt.sign(snippet, "2f14b5a7-e048-4d37-780d-e837bb68269e", {algorithm: "HS256"}); // A JWT token created using your shared secret

    console.log("token: "+jwt_token);

    return JSON.stringify({ // The encoded token should be passed to the frontend as a javascript object
        jwt: jwt_token
    });
}
