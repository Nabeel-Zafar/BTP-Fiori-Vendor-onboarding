sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel"
  ], function(Controller, JSONModel) {
    "use strict";
  
    return Controller.extend("ns.risks.controller.UsersPage", {
      onInit: function() {
        this._fetchUserData(); 
      },
  
      _fetchUserData: function() {
        fetch('http://localhost:4004/odata/v4/user/User')
          .then(response => response.json()) // Parse the response as JSON
          .then(data => {
            // Create a JSON model to hold the user data
            var userModel = new JSONModel(data);
            this.getView().setModel(userModel);
          })
          .catch(error => {
            console.error('Error fetching user data:', error);
          });
      }
    });
  });
  