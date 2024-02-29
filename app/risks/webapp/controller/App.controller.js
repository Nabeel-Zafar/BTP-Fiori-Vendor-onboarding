sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function(Controller) {
	"use strict";

	return Controller.extend("risks.sac.controller.App", {


		onPressSubmit: function() {
			var oView = this.getView();
			var oModel = oView.getModel();
	  
			var vendorData = {
			  name: oView.byId("vendorNameInput").getValue(),
			  contactPerson: oView.byId("contactPersonInput").getValue(),
			  email: oView.byId("emailInput").getValue(),
			  phone: oView.byId("phoneInput").getValue()
			};
	  
			// Perform HTTP POST request to CAP application endpoint
			$.ajax({
			  type: "POST",
			  url: "/api/vendors", // Endpoint URL in CAP application
			  contentType: "application/json",
			  data: JSON.stringify(vendorData),
			  success: function(data) {
				// Handle success response
				sap.m.MessageToast.show("Vendor submitted successfully.");
				// Refresh the model to update the view
				oModel.refresh(true);
			  },
			  error: function(xhr, status, error) {
				// Handle error response
				sap.m.MessageToast.show("Failed to submit vendor: " + error);
			  }
			});
		  }

		/**
		 * Called when a controller is instantiated and its View controls (if available) are already created.
		 * Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
		 * @memberOf asset.sac.view.App
		 */
		//	onInit: function() {
		//
		//	},

		/**
		 * Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
		 * (NOT before the first rendering! onInit() is used for that one!).
		 * @memberOf asset.sac.view.App
		 */
		//	onBeforeRendering: function() {
		//
		//	},

		/**
		 * Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
		 * This hook is the same one that SAPUI5 controls get after being rendered.
		 * @memberOf asset.sac.view.App
		 */
		//	onAfterRendering: function() {
		//
		//	},

		/**
		 * Called when the Controller is destroyed. Use this one to free resources and finalize activities.
		 * @memberOf asset.sac.view.App
		 */
		//	onExit: function() {
		//
		//	}

	});

});