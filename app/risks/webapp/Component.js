sap.ui.define(["sap/ui/core/UIComponent", "sap/ui/core/mvc/XMLView"],
    function (UIComponent, XMLView) {
        "use strict";

        return UIComponent.extend("ns.risks.Component", {
            metadata: {
                manifest: "json"
            },

            init: function () {
                // call the init function of the parent
                UIComponent.prototype.init.apply(this, arguments);

                // create the views based on the url/hash
                XMLView.create({
                    viewName: "ns.risks.view.App" // Adjust the view name if necessary
                }).then(function (oView) {
                    oView.placeAt("content"); // Place the view in the DOM
                });

                // Initialize the router
                this.getRouter().initialize();
            }
        });
    }
);
