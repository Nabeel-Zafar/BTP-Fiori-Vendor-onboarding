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

    return {
        onAdd: function () {
            if (!this.oDefaultDialog) {

                this.oDefaultDialog = new Dialog({
                    title: "Add Vendor",
                    contentWidth: "800px", 
                    contentHeight: "2000px",
                    beginButton: new Button({
                        type: ButtonType.Emphasized,
                        text: "Save",
                        press: function () {
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
