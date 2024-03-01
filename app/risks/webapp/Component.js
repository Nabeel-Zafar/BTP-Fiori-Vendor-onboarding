sap.ui.define(
    ["sap/fe/core/AppComponent"],
    function (Component) {
        "use strict";

        return Component.extend("ns.risks.Component", {
            metadata: {
                manifest: "json"
            },
            init: function() {
                // Call the init function of the parent
                UIComponent.prototype.init.apply(this, arguments);
    
                // Initialize router
                this.getRouter().initialize();
            }
        });

        
    }
);