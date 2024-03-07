sap.ui.define([
    "sap/m/MessageToast",
    "sap/ui/core/mvc/Controller",
    "sap/m/Dialog",
    "sap/m/Button",
    "sap/m/Input",
    "sap/m/Label",
    "sap/ui/layout/form/SimpleForm",
    "sap/m/library",
    "sap/ui/core/mvc/XMLView"
], function(MessageToast, Controller, Dialog, Button, Input, Label, SimpleForm, mobileLibrary, XMLView) {
    'use strict';

    var ButtonType = mobileLibrary.ButtonType;
    var oController; // Store reference to the controller


    return {
        onInit: function () {
            // Set the controller reference in the dialog module
            setController(this);
        },
        setController: function(controller) {
            oController = controller;
        },
        onAdd: function () {
            if (!this.oDefaultDialog) {

                this.oDefaultDialog = new Dialog({
                    title: "Add Vendor",
                    contentWidth: "800px", 
                    contentHeight: "1000px",
                    beginButton: new Button({
                        type: ButtonType.Emphasized,
                        text: "Save",
                        press: function () {
                            var vendorOnboardingForm = {
                                company_name: oController?.byId("company_name").getValue(),
                                company_address: oController?.byId("company_address").getValue(),
                                registration_number: oController?.byId("registration_number").getValue(),
                                company_type: oController?.byId("company_type").getValue(),
                                tax_number: oController?.byId("tax_number").getValue(),
                                contact_person_name: oController?.byId("contact_person_name").getValue(),
                                contact_person_email: oController?.byId("contact_person_email").getValue(),
                                industry: oController?.byId("industry").getValue(),
                                contact_person_number: oController?.byId("contact_person_number").getValue(),
                                bank_name: oController?.byId("bank_name").getValue(),
                                bank_account_number: oController?.byId("bank_account_number").getValue(),
                                license_number: oController?.byId("license_number").getValue(),
                                service_offering: oController?.byId("service_offering").getValue(),
                                service_description: oController?.byId("service_description").getValue(),
                                additional_comments: oController?.byId("additional_comments").getValue(),
                                reference: oController?.byId("reference").getValue(),
                            };
                        
                            console.log("Vendor Onboarding Form Data:", vendorOnboardingForm);
                        
                            var xhr = new XMLHttpRequest();
                        
                            // Define the endpoint URL of your CAP application
                            var url = "http://localhost:4004/odata/v4/vendor/Vendor"; // Replace with your actual CAP application URL
                        
                            // Configure the request
                            xhr.open("POST", url, true);
                            xhr.setRequestHeader("Content-Type", "application/json");
                        
                            // Define a callback function to handle the response
                            xhr.onreadystatechange = function () {
                                if (xhr.readyState === XMLHttpRequest.DONE) {
                                    if (xhr.status === 200 || xhr.status === 201) {
                                        // Request successful
                                        alert("Data sent successfully to CAP application.");
                                    } else {
                                        // Request failed
                                        alert("Failed to send data to CAP application. Status code: " + xhr.status);
                                    }
                                }
                            }.bind(this);
                        
                            // Convert the data to JSON format
                            var jsonData = JSON.stringify(vendorOnboardingForm);
                        
                            // Send the request with the data
                            xhr.send(jsonData);
                        
                            this.oDefaultDialog.close();
                        }.bind(this)
                        
                    }),
                    endButton: new Button({
                        text: "Close",
                        press: function () {
                            this.oDefaultDialog.close();
                        }.bind(this)
                    }),
                    content: [
                        new XMLView({
                            viewName: "vendoroboarding.ext.view.OnboardingForm" // Replace "namespace.MyView" with your actual view name
                            
                        })
                    ] // Set the form as content of the dialog
                });    
            }
            this.oDefaultDialog.open();
        },
    };
});
