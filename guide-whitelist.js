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
            },
            events: {
                validateGuide: function (hashableGuideString, guide) {
                    var guideStrings = {
                        "BgxMOLPwVaPozCkik0YIF2Hs8EY": JSON.stringify([[["content","<strong><%= /*root.*/template.title %></strong> \n<%= /*root.*/template.description %>\n\n\n\n<style id=\"pendo-inline-css\" type=\"text/css\">#_pendo_g_z_9nYx-SHkRFYC0vBNWn2zSs0h4 {\n  /* --- CSS for This Template --- */\n  /* --- Selectors from Global CSS --- */\n}\n#_pendo_g_z_9nYx-SHkRFYC0vBNWn2zSs0h4 ._pendo-guide-container_ {\n  /* Guide border, shadow, background, etc. */\n  background-color: #d9edf7;\n  padding: 15px;\n  line-height: 140%;\n  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.5);\n}\n#_pendo_g_z_9nYx-SHkRFYC0vBNWn2zSs0h4 ._pendo-guide-container_ ._pendo-guide-content_ {\n  /* Content area: use for font attributes, padding, etc. */\n  text-align: center;\n  padding: 0;\n  color: #31708f;\n  font-size: 14px;\n}\n#_pendo_g_z_9nYx-SHkRFYC0vBNWn2zSs0h4 ._pendo-guide-container_ ._pendo-close-guide_ {\n  /* Close guide icon */\n  display: inline;\n  font-size: 26px;\n  font-weight: 100;\n  top: 10px;\n  right: 15px;\n  color: #31708f;\n  opacity: 0.6;\n}\n#_pendo_g_z_9nYx-SHkRFYC0vBNWn2zSs0h4 ._pendo-guide-container_ ._pendo-close-guide_:hover {\n  /* Close guide icon hover effects*/\n  opacity: 0.4;\n}\n</style><script id=\"pendo-inline-script\">\n<% if (typeof guide !== 'undefined') { %>\nvar guide = pendo.findGuideById('<%= guide.id %>');\nvar step = guide && guide.findStepById('<%= step.id %>');\n<% } %>\n/*BEGIN PENDO SCRIPT WRAPPER*/\n\n/* Add JavaScript Here */\n\n/*END PENDO SCRIPT WRAPPER*/</script>"],["variables",[["description","Use this template to communicate a site-wide message without interrupting users."],["title","Announcement:"]]]]]),
                        "PFZ5AYg8Inze0rurgmJjElEgYCQ": JSON.stringify([[["content","T36G5LIuRvIqp95pOhioZSHITvI"],["contentCss","2barULRq1-iSH4nNNiJq4TavR7A"],["contentJs","1ihyNVOvQGxJfIy4UQt3lkf6h10"],["dom","Sp9rUBHV-QNvH64iQYkd-1N_cWA"],["domJsonp","DzeCJ61gZiuNMMcgRQD7BIy0sOU"]]])
                    };
                    if (guideStrings[guide.id] !== hashableGuideString) {
                        console.log("guide " + guide.id + " failed validation");
                        return false;
                    }
                }
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
