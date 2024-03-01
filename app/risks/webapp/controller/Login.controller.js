sap.ui.define([
    "sap/ui/core/mvc/Controller",
    'sap/ui/model/json/JSONModel'
], function (Controller) {
    "use strict";

    return Controller.extend("ns.risks.controller.Login", {


        toOnboardingForm: function () {
            var oRouter = sap.ui.core.UIComponent.getRouterFor(this);

            oRouter.navTo("OnboardingForm",{})
        }
    });
});
