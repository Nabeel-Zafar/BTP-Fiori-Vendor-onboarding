// Dashboard.controller.js

sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel"
], function(Controller, JSONModel) {
    "use strict";

    return Controller.extend("ns.risks.controller.Dashboard", {
        onInit: function() {
            // Create a new JSON model
            var oModel = new JSONModel();

            // Load the mock data into the model
            oModel.loadData("../mock/vendors.json");
            console.log(oModel)

            // Set the model to the view
            this.getView().setModel(oModel, "vendorModel");
        },
        onVendorListItemPress: function(oEvent) {
            // Get the selected item
            var oSelectedItem = oEvent.getSource();
            
            // Get the selected item's binding context
            var oBindingContext = oSelectedItem.getBindingContext("vendorModel");
            
            // Get the selected item's data
            var oSelectedVendor = oBindingContext.getObject();
            
            // Navigate to the detail view
            this.getOwnerComponent().getRouter().navTo("vendorDetail", {
                vendorId: oSelectedVendor.Id // Assuming vendorId is the unique identifier of the vendor
            });
        },

        _fetchUserData: function() {
            fetch('http://localhost:4004/odata/v4/vendor/Vendor')
              .then(response => response.json()) // Parse the response as JSON
              .then(data => {
                // Create a JSON model to hold the user data
                var vendorModel = new JSONModel(data);
                this.getView().setModel(vendorModel);
              })
              .catch(error => {
                console.error('Error fetching user data:', error);
              });
          }

    });
});
