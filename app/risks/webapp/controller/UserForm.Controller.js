sap.ui.define([
    "sap/ui/core/mvc/Controller",
    'sap/ui/model/json/JSONModel'
], function (Controller) {
    "use strict";

    return Controller.extend("ns.risks.controller.UserForm", {


        onInit: function () {


            var role = [
                { key: "1", text: "Admin" },
                { key: "2", text: "SCO" },
            ];

            var oModel = new sap.ui.model.json.JSONModel();
            oModel.setData({ role: role });

            this.getView().setModel(oModel, "role");
        },


        onSubmitUser: function () {
            var userForm = {};

            userForm.first_name = this.byId("first_name").getValue();
            userForm.last_name = this.byId("last_name").getValue();
            userForm.user_email = this.byId("user_email").getValue();
            userForm.role = this.byId("role").getValue();
            userForm.phone_number = this.byId("phone_number").getValue();
            userForm.password = this.byId("password").getValue();

            console.log("userForm", userForm);

            // Create a new HTTP request
    // var xhr = new XMLHttpRequest();
    
    // Define the endpoint URL of your CAP application
    // var url = "http://localhost:4004/odata/v4/vendor/Vendor"; Replace with your actual CAP application URL
    
    // Configure the request
    // xhr.open("POST", url, true);
    // xhr.setRequestHeader("Content-Type", "application/json");
    
    // Define a callback function to handle the response
    // xhr.onreadystatechange = function() {
    //     if (xhr.readyState === XMLHttpRequest.DONE) {
    //         if (xhr.status === 200) {
                // Request successful
                // console.log("Data sent successfully to CAP application.");
            // } else {
                // Request failed
                // console.error("Failed to send data to CAP application. Status code: " + xhr.status);
            // }
        // }
    // };
    
    // Convert the data to JSON format
    // var jsonData = JSON.stringify(vendorOnboardingForm);
    
    // Send the request with the data
    // xhr.send(jsonData);

        }
    });
});
