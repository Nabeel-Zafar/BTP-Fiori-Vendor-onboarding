const axios = require('axios');
const qs = require('querystring');



module.exports = (srv) => {
    const { Vendor } = srv.entities;

    srv.before('CREATE', Vendor, async (req) => {
        const data = req.data;
        
        if (!data.registration_number || isNaN(data.registration_number)) {
            req.error(400, 'Registration Number must be a number');
        }
    
        // Validation for tax_number: Mandatory and must be a number
        if (!data.tax_number || isNaN(data.tax_number)) {
            req.error(400, 'Tax Number must be a number');
        }
    
        // Validation for contact_person_name: Mandatory
        if (!data.contact_person_name || typeof data.contact_person_name !== 'string' || !data.contact_person_name.trim()) {
            req.error(400, 'Contact Person Name is mandatory');
        }
    
        // Validation for contact_person_email: Mandatory email
        if (!data.contact_person_email || typeof data.contact_person_email !== 'string' || !isValidEmail(data.contact_person_email)) {
            req.error(400, 'Contact Person Email must be a valid email');
        }
    
        // Validation for contact_person_number: Mandatory and must be a number
        if (!data.contact_person_number || isNaN(data.contact_person_number)) {
            req.error(400, 'Contact Person Number must be a number');
        }
    
        // Validation for bank_name: Mandatory
        if (!data.bank_name || typeof data.bank_name !== 'string' || !data.bank_name.trim()) {
            req.error(400, 'Bank Name is mandatory');
        }
    
        // Validation for bank_account_number: Mandatory
        if (!data.bank_account_number || typeof data.bank_account_number !== 'string' || !data.bank_account_number.trim()) {
            req.error(400, 'Bank Account Number is mandatory');
        }
    
        // Validation for license_number: Mandatory
        if (!data.license_number || typeof data.license_number !== 'string' || !data.license_number.trim()) {
            req.error(400, 'License Number is mandatory');
        }
    
       
    });
    
    // Helper function to validate email format
    function isValidEmail(email) {
        // Regular expression for email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }
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

    srv.on('ApproveOrRejectAction', async (req) => {
        const { vendorId, status } = req.data.input;

        console.log("Custom Endpoint Hit: ", vendorId, status)

        // Example logic: Update the status of a vendor based on the provided vendorId and Status
        // This is a placeholder for your actual logic
        // const updatedVendor = await UPDATE(Vendor)
        //     .set({ status: Status })
        //     .where({ id: vendorId })
        //     .execute();

        // Return the result of the operation
        return { result: `Vendor with ID ${vendorId} status updated to ${status}` };
    });
};