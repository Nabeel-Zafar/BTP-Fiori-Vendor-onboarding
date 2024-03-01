sap.ui.define([
	"sap/ui/core/mvc/XMLView"
], (XMLView) => {
	"use strict";

	XMLView.create({
		viewName: "ns.risks.view.UserForm"
	}).then((oView) => oView.placeAt("content"));    
});
