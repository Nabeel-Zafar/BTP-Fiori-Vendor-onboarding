// Main.controller.js
sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/core/routing/History"
], function(Controller, History) {
    "use strict";

    return Controller.extend("ns.risks.Main", {
        onOpenCustomView: function() {
            var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
            oRouter.navTo("customViewRoute");
        }
    });
});
