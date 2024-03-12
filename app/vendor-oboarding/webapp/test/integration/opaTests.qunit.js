sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'vendoroboarding/test/integration/FirstJourney',
		'vendoroboarding/test/integration/pages/VendorList',
		'vendoroboarding/test/integration/pages/VendorObjectPage'
    ],
    function(JourneyRunner, opaJourney, VendorList, VendorObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('vendoroboarding') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onTheVendorList: VendorList,
					onTheVendorObjectPage: VendorObjectPage
                }
            },
            opaJourney.run
        );
    }
);