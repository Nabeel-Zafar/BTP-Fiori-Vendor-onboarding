sap.ui.define([
	"sap/ui/core/mvc/XMLView"
], (XMLView) => {
	"use strict";

	XMLView.create({
		viewName: "ns.risks.view.OnboardingForm"
	}).then((oView) => oView.placeAt("content"));  
	
	
		UIComponent.prototype.init.apply(this, arguments);

		// Initialize router
		this.getRouter().initialize();
});
