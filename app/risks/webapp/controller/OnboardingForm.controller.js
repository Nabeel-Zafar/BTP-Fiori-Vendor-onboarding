sap.ui.define([
    "sap/ui/core/mvc/Controller",
    'sap/ui/model/json/JSONModel'
], function (Controller) {
    "use strict";

    return Controller.extend("ns.risks.controller.OnboardingForm", {


        onInit: function () {

            var companyTypes = [
                { key: "1", text: "Corporation" },
                { key: "2", text: "Limited Liability Company (LLC)" },
                { key: "3", text: "Partnership" },
                { key: "4", text: "Sole Proprietorship" },
                { key: "5", text: "Other" }
            ];

            var oModel = new sap.ui.model.json.JSONModel();
            oModel.setData({ companyTypes: companyTypes });

            this.getView().setModel(oModel, "companyTypes");


            var industry = [
                { key: "1", text: "Agriculture" },
                { key: "2", text: "Automotive" },
                { key: "3", text: "Banking & Finance" },
                { key: "4", text: "Construction" },
                { key: "5", text: "Education" },
                { key: "6", text: "Energy" },
                { key: "7", text: "Entertainment" },
                { key: "8", text: "Food & Beverage" },
                { key: "9", text: "Healthcare" },
                { key: "10", text: "Information Technology" },
                { key: "11", text: "Manufacturing" },
                { key: "12", text: "Retail" },
                { key: "13", text: "Telecommunications" },
                { key: "14", text: "Transportation" },
                { key: "15", text: "Utilities" },
                { key: "16", text: "Other" }
            ];

            var oModel = new sap.ui.model.json.JSONModel();
            oModel.setData({ industry: industry });

            this.getView().setModel(oModel, "industry");
        },


        onSubmit: function () {
            var vendorOnboardingForm = {};

            vendorOnboardingForm.company_name = this.byId("company_name").getValue();
            vendorOnboardingForm.company_address = this.byId("company_address").getValue();
            vendorOnboardingForm.registration_number = this.byId("registration_number").getValue();
            vendorOnboardingForm.company_type = this.byId("company_type").getValue();
            vendorOnboardingForm.tax_number = this.byId("tax_number").getValue();
            vendorOnboardingForm.contact_person_name = this.byId("contact_person_name").getValue();
            vendorOnboardingForm.contact_person_email = this.byId("contact_person_email").getValue();
            vendorOnboardingForm.industry = this.byId("industry").getValue();
            vendorOnboardingForm.contact_person_number = this.byId("contact_person_number").getValue();
            vendorOnboardingForm.bank_name = this.byId("bank_name").getValue();
            vendorOnboardingForm.bank_account_number = this.byId("bank_account_number").getValue();
            vendorOnboardingForm.license_number = this.byId("license_number").getValue();
            vendorOnboardingForm.service_offering = this.byId("service_offering").getValue();
            vendorOnboardingForm.service_description = this.byId("service_description").getValue();
            vendorOnboardingForm.additional_comments = this.byId("additional_comments").getValue();
            vendorOnboardingForm.reference = this.byId("reference").getValue();

            console.log("Vendor Onboarding Form Data:", vendorOnboardingForm);

            // Create a new HTTP request
    var xhr = new XMLHttpRequest();
    
    // Define the endpoint URL of your CAP application
    var url = "http://localhost:4004/odata/v4/service/risk/VendorOnboardingForm"; // Replace with your actual CAP application URL
    
    // Configure the request
    xhr.open("POST", url, true);
    xhr.setRequestHeader("Content-Type", "application/json");
    
    // Define a callback function to handle the response
    xhr.onreadystatechange = function() {
        if (xhr.readyState === XMLHttpRequest.DONE) {
            if (xhr.status === 200) {
                // Request successful
                console.log("Data sent successfully to CAP application.");
            } else {
                // Request failed
                console.error("Failed to send data to CAP application. Status code: " + xhr.status);
            }
        }
    };
    
    // Convert the data to JSON format
    var jsonData = JSON.stringify(vendorOnboardingForm);
    
    // Send the request with the data
    xhr.send(jsonData);

        }
    });
});
