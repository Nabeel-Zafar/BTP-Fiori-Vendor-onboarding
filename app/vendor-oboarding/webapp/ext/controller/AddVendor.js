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
                        text: "OK",
                        press: function () {
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
