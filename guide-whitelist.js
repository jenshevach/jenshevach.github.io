function basic_install(isUpdate) {
    var visitor = document.getElementById("myVisitor").value;
    var account = document.getElementById("myAccount").value;
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
            apiKey: "358d840f-d7f9-4999-4d02-fffb827c114a",
            visitor: {
                id: visitor,   // Required if user is logged in
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
