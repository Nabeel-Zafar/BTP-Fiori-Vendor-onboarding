using VendorService as service from '../../srv/VendorService';
annotate service.Vendor with @(odata.draft.enabled:true);


annotate service.Vendor with @(
    UI.LineItem : [
        {
            $Type : 'UI.DataField',
            Label : '{i18n>CompanyName}',
            Value : company_name,
        },
        {
            $Type : 'UI.DataField',
            Label : '{i18n>CompanyAddress}',
            Value : company_address,
        },
        {
            $Type : 'UI.DataField',
            Label : '{i18n>RegistrationNumber}',
            Value : registration_number,
        },
        {
            $Type : 'UI.DataField',
            Label : '{i18n>CompanyType}',
            Value : company_type,
        },
        {
            $Type : 'UI.DataField',
            Label : 'tax_number',
            Value : tax_number,
        },
    ]
);
annotate service.Vendor with @(
    UI.FieldGroup #GeneratedGroup1 : {
        $Type : 'UI.FieldGroupType',
        Data : [
            {
                $Type : 'UI.DataField',
                Label : '{i18n>CompanyName}',
                Value : company_name,
            },
            {
                $Type : 'UI.DataField',
                Label : '{i18n>CompanyAddress}',
                Value : company_address,
            },
            {
                $Type : 'UI.DataField',
                Label : '{i18n>RegistrationNumber}',
                Value : registration_number,
            },
            {
                $Type : 'UI.DataField',
                Label : '{i18n>CompanyType}',
                Value : company_type,
            },
            {
                $Type : 'UI.DataField',
                Label : '{i18n>TaxNumber}',
                Value : tax_number,
            },
            {
                $Type : 'UI.DataField',
                Label : 'contact_person_name',
                Value : contact_person_name,
            },
            {
                $Type : 'UI.DataField',
                Label : 'contact_person_email',
                Value : contact_person_email,
            },
            {
                $Type : 'UI.DataField',
                Label : 'industry',
                Value : industry,
            },
            {
                $Type : 'UI.DataField',
                Label : 'contact_person_number',
                Value : contact_person_number,
            },
            {
                $Type : 'UI.DataField',
                Label : 'bank_name',
                Value : bank_name,
            },
            {
                $Type : 'UI.DataField',
                Label : 'bank_account_number',
                Value : bank_account_number,
            },
            {
                $Type : 'UI.DataField',
                Label : 'license_number',
                Value : license_number,
            },
            {
                $Type : 'UI.DataField',
                Label : 'service_offering',
                Value : service_offering,
            },
            {
                $Type : 'UI.DataField',
                Label : 'service_description',
                Value : service_description,
            },
            {
                $Type : 'UI.DataField',
                Label : 'additional_comments',
                Value : additional_comments,
            },
            {
                $Type : 'UI.DataField',
                Label : 'reference',
                Value : reference,
            },
        ],
    },
    UI.Facets : [
        {
            $Type : 'UI.ReferenceFacet',
            ID : 'GeneratedFacet1',
            Label : 'General Information',
            Target : '@UI.FieldGroup#GeneratedGroup1',
        },
    ]
);
// annotate service.Vendor with @(
//     UI.SelectionFields : [
//         company_name,
//     ]
// );
// annotate service.Vendor with {
//     company_name @Common.Label : '{i18n>CompanyName}'
// };