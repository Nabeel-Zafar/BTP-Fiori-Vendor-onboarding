sap.ui.define([
	"sap/ui/core/mvc/XMLView"
], (XMLView) => {
	"use strict";

	XMLView.create({
		viewName: "ns.risks.view.Dashboard"
	}).then((oView) => oView.placeAt("content"));    
});
