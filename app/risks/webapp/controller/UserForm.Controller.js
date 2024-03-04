sap.ui.define([
    "sap/ui/core/mvc/Controller",
    'sap/ui/model/json/JSONModel',
    "sap/m/MessageBox",
    "sap/m/MessageToast"
], function (Controller,MessageToast) {
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

    var xhr = new XMLHttpRequest();
    
    var url = "http://localhost:4004/odata/v4/user/User"; 
    
    xhr.open("POST", url, true);
    xhr.setRequestHeader("Content-Type", "application/json");
    
    xhr.onreadystatechange = function() {
        if (xhr.readyState === XMLHttpRequest.DONE) {
            if (xhr.status === 200 || 201) {
                // console.log("Data sent successfully to CAP application.");
                this.clearFormFields();
                alert("User created successfully");
            } else {
                // alert("Failed to create user"+ xhr.status);
                this.clearFormFields();
                alert("Failed to send data to CAP application. Status code: " + xhr.status);
            }
        }
    }.bind(this);
    
    var jsonData = JSON.stringify(userForm);
    
    xhr.send(jsonData);

        },

        clearFormFields: function() {
            this.byId("first_name").setValue(" ");
            this.byId("last_name").setValue(" ");
            this.byId("user_email").setValue(" ");
            this.byId("role").setSelectedKey(" ");
            this.byId("phone_number").setValue(" ");
            this.byId("password").setValue("");
          }
    });
});
