const axios = require("axios");
const qs = require("querystring");

module.exports = (srv) => {
  const { Vendor } = srv.entities;

  srv.before("CREATE", Vendor, async (req) => {
    const data = req.data;

    if (!data.registration_number || isNaN(data.registration_number)) {
      req.error(400, "Registration Number must be a number");
    }

    // Validation for tax_number: Mandatory and must be a number
    if (!data.tax_number || isNaN(data.tax_number)) {
      req.error(400, "Tax Number must be a number");
    }

    // Validation for contact_person_name: Mandatory
    if (
      !data.contact_person_name ||
      typeof data.contact_person_name !== "string" ||
      !data.contact_person_name.trim()
    ) {
      req.error(400, "Contact Person Name is mandatory");
    }

    // Validation for contact_person_email: Mandatory email
    if (
      !data.contact_person_email ||
      typeof data.contact_person_email !== "string" ||
      !isValidEmail(data.contact_person_email)
    ) {
      req.error(400, "Contact Person Email must be a valid email");
    }

    // Validation for contact_person_number: Mandatory and must be a number
    if (!data.contact_person_number || isNaN(data.contact_person_number)) {
      req.error(400, "Contact Person Number must be a number");
    }

    // Validation for bank_name: Mandatory
    if (
      !data.bank_name ||
      typeof data.bank_name !== "string" ||
      !data.bank_name.trim()
    ) {
      req.error(400, "Bank Name is mandatory");
    }

    // Validation for bank_account_number: Mandatory
    if (
      !data.bank_account_number ||
      typeof data.bank_account_number !== "string" ||
      !data.bank_account_number.trim()
    ) {
      req.error(400, "Bank Account Number is mandatory");
    }

    // Validation for license_number: Mandatory
    if (
      !data.license_number ||
      typeof data.license_number !== "string" ||
      !data.license_number.trim()
    ) {
      req.error(400, "License Number is mandatory");
    }
  });

  // Helper function to validate email format
  function isValidEmail(email) {
    // Regular expression for email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }
  srv.on("CREATE", "Vendor", async (req) => {
    const { data } = req;
  
    try {
      // Obtain OAuth2 access token
      const tokenResponse = await axios.post(
        "https://ef5e34f8trial.authentication.us10.hana.ondemand.com/oauth/token",
        qs.stringify({
          grant_type: "client_credentials",
          client_id:
            "sb-98c9d028-d051-45df-9747-c5fdcf8d1a8f!b256510|xsuaa!b49390",
          client_secret:
            "7dc28357-e143-4ec1-95cb-949423f1c542$_-AnS-ned6GOoZUjSJjxJCmnpvb89LwHe_XkPAYlo9U=",
        }),
        {
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
        }
      );
  
      const accessToken = tokenResponse.data.access_token;
  
      // Construct the JSON payload
      const payload = {
        definitionId:
          "us10.ef5e34f8trial.vendoronboardingv1.accessRequestTriggerForm",
        context: {
          userconfig: {
            ID: data.ID || "",
            company_name: data.company_name || "",
            company_address: data.company_address || "",
            registration_number: data.registration_number || "",
            company_type: data.company_type || "",
            tax_number: data.tax_number || "",
            contact_person_name: data.contact_person_name || "",
            contact_person_email: data.contact_person_email || "",
            industry: data.industry || "",
            contact_person_number: data.contact_person_number || "",
            bank_name: data.bank_name || "",
            bank_account_number: data.bank_account_number || "",
            license_number: data.license_number || "",
            service_offering: data.service_offering || "",
            service_description: data.service_description || "",
            additional_comments: data.additional_comments || "",
            reference: data.reference || "",
            approve: "Approved",
            reject: "Rejected",
          },
        },
      };
  
      // Make the POST request to the SAP Build Process Automation API
      console.log("payload", payload);
      const apiResponse = await axios.post(
        "https://spa-api-gateway-bpi-us-prod.cfapps.us10.hana.ondemand.com/workflow/rest/v1/workflow-instances",
        payload,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );
  
      console.log("API Response:", apiResponse.data);
  
      // Proceed with the original logic for creating the Vendor entity
      const result = await INSERT.into(Vendor).entries(data);
      return result;
    } catch (error) {
      console.error("Error:", error.response ? error.response.data : error.message);
      throw error;
    }
  });
  

  srv.on("ApproveOrRejectAction", async (req) => {
    const { vendorId, status } = req.data.input;
    console.log("Custom Endpoint Hit: ", vendorId, status);
    // Use cds.transaction to perform the update operation
    await cds.transaction(async (tx) => {
        const affectedRows = await tx.run(
            UPDATE(Vendor)
                .set({ status: status })
                .where({ ID: vendorId })
        );
        console.log(`Vendor with ID ${vendorId} status updated to ${status}. Affected rows: ${affectedRows}`);
    });
    // Return the result of the operation
    return { result: `Vendor with ID ${vendorId} status updated to ${status}` };
});
   
};
