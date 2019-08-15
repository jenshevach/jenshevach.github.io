function basic_install(isUpdate) {
    var visitor = document.getElementById("myVisitor").value;
    var account = document.getElementById("myAccount").value;
    var language = document.getElementById("myLanguage").value;
    var role = document.getElementById("myRole").value;
    var privateInfo = document.getElementById("myPrivateInfo").value;
    var email = document.getElementById("myEmail").value;
    var newfield = document.getElementById("newfield").value;
    var newfieldval = document.getElementById("newfieldval").value;
    var empCount = document.getElementById("empCount").value;

    if (isUpdate) {
        var updOpts = {
            visitor: {
                id: visitor,   // Required if user is logged in
                custom_language: language,
                role: role,
                privateInfo: privateInfo,
                email: email
            },
            account: {
                id: account, // Highly recommended
                employee_count: empCount
            }
        };
        if(newfieldval !== "" && newfield !== "") {
            updOpts.account[newfield] = newfieldval;
        }
        pendo.updateOptions(updOpts);
    } else {
        var initOpts = {
            visitor: {
                id: visitor,   // Required if user is logged in
                custom_language: language,
                role: role,
                privateInfo: privateInfo,
                email: email
            },
            account: {
                id: account, // Highly recommended
                employee_count: empCount
            }
        };
        if(newfieldval !== "" && newfield !== "") {
            initOpts.account[newfield] = newfieldval;
        }
        pendo.initialize(initOpts);
    }
}

function pendo_login() {
    var initOpts = {
        visitor: {
            id: "jennifer@pendo.io"
        },
        account: {
            id: "Pendo"
        }
    };
    pendo.initialize(initOpts);
}
