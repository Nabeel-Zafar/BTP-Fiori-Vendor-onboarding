using { sap.ui.riskmanagement as my } from '../db/schema';
@path: 'service/risk'
service RiskService {
  entity Risks as projection on my.Risks;
    annotate Risks with @odata.draft.enabled;
  entity Mitigations as projection on my.Mitigations;
    annotate Mitigations with @odata.draft.enabled;
}
 
using { sap.ui.riskmanagement as form } from '../db/onboardingSchema';
@path: 'service/risk'
service VendorOnboardingFormService {
  entity VendorOnboardingForm as projection on form.VendorOnboardingForm;
    annotate VendorOnboardingForm with @odata.draft.enabled;
}