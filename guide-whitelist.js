function basic_install(isUpdate) {
    var visitor = document.getElementById("myVisitor").value;
    var account = document.getElementById("myAccount").value;
    var role = document.getElementById("myRole").value;
    var privateInfo = document.getElementById("myPrivateInfo").value;
    var email = document.getElementById("myEmail").value;

    if (isUpdate) {
        pendo.updateOptions({
            visitor: {
                id: visitor,   // Required if user is logged in
                role: role,
                privateInfo: privateInfo,
                email: email
            },
            account: {
                id: account // Highly recommended
            }
        });
    } else {
        pendo.initialize({
            apiKey: "358d840f-d7f9-4999-4d02-fffb827c114a",
            visitor: {
                id: visitor,   // Required if user is logged in
                role: role,
                privateInfo: privateInfo,
                email: email
            },
            account: {
                id: account // Highly recommended
            }
        });

    }
}

function secure_install(isUpdate) {
    var visitor = document.getElementById("myVisitor").value;
    var account = document.getElementById("myAccount").value;
    var role = document.getElementById("myRole").value;
    var privateInfo = document.getElementById("myPrivateInfo").value;
    var email = document.getElementById("myEmail").value;
    var token = generate_jwt(visitor, account, role, privateInfo, email);

    if (isUpdate) {
        pendo.updateOptions({
            visitor: {
                id: token   // Required if user is logged in
            },
            account: {
                id: "secure_snippet" // Highly recommended
            }
        });
    } else {
        pendo.initialize({
            visitor: {
                id: token   // Required if user is logged in
            },
            account: {
                id: "secure_snippet" // Highly recommended
            }
        });
    }
}
