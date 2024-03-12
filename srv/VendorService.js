const axios = require('axios');
const qs = require('querystring');

module.exports = (srv) => {
    const { Vendor } = srv.entities;
    srv.on('CREATE', 'Vendor', async (req) => {
        const { data } = req;
        console.log('-----------', data);
        // Obtain OAuth2 access token
        const tokenResponse = await axios.post('https://ef5e34f8trial.authentication.us10.hana.ondemand.com/oauth/token', qs.stringify({
            grant_type: 'client_credentials',
            client_id: 'sb-98c9d028-d051-45df-9747-c5fdcf8d1a8f!b256510|xsuaa!b49390',
            client_secret: '7dc28357-e143-4ec1-95cb-949423f1c542$_-AnS-ned6GOoZUjSJjxJCmnpvb89LwHe_XkPAYlo9U=',
        }), {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        });
        const accessToken = tokenResponse.data.access_token;
        // Construct the JSON payload
        const payload = {
            definitionId: "us10.ef5e34f8trial.vendoronboardingv1.accessRequestTriggerForm",
            context: {
                "userconfig": {
                    "First_Name": "Nabeel",
                    "Last_Name": "Zafar",
                    "Email": "nabeel.zafar@faircg.com",
                    "Location_ID": "12345",
                    "Department_ID": "54321",
                    "Is_Admin": "False"
                }
            }
        };
        // Make the POST request to the SAP Build Process Automation API
        const apiResponse = await axios.post('https://spa-api-gateway-bpi-us-prod.cfapps.us10.hana.ondemand.com/workflow/rest/v1/workflow-instances', payload, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${accessToken}`
            }
        });
        console.log('API Response:', apiResponse.data);
        // Proceed with the original logic for creating the Vendor entity
        const result = await INSERT.into(Vendor).entries(data);
        return result;
    });
};