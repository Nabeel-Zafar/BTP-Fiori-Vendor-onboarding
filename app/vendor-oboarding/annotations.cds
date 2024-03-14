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
            Value : contact_person_name,
            Label : '{i18n>ContactPersonName}',
        },
        {
            $Type : 'UI.DataField',
            Value : contact_person_email,
            Label : '{i18n>ContactPersonEmail}',
        },
        {
            $Type : 'UI.DataField',
            Value : status,
            Label : 'Status',
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
            Value : contact_person_number,
            Label : '{i18n>ContactPersonNumber}',
        },
        {
            $Type : 'UI.DataField',
            Value : additional_comments,
            Label : '{i18n>AdditionalComments}',
        },
        {
            $Type : 'UI.DataField',
            Value : bank_account_number,
            Label : '{i18n>BankAccountNumber}',
        },
        {
            $Type : 'UI.DataField',
            Value : bank_name,
            Label : '{i18n>BankName}',
        },
        {
            $Type : 'UI.DataField',
            Value : industry,
            Label : '{i18n>Industry}',
        },
        {
            $Type : 'UI.DataField',
            Value : license_number,
            Label : '{i18n>LicenseNumber}',
        },
        {
            $Type : 'UI.DataField',
            Value : reference,
            Label : '{i18n>Reference}',
        },
        {
            $Type : 'UI.DataField',
            Value : service_description,
            Label : 'Service Description',
        },
        {
            $Type : 'UI.DataField',
            Value : service_offering,
            Label : 'Service Offering',
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
                Label : '{i18n>ContactPersonName}',
                Value : contact_person_name,
            },
            {
                $Type : 'UI.DataField',
                Label : '{i18n>ContactPersonEmail}',
                Value : contact_person_email,
            },
            {
                $Type : 'UI.DataField',
                Label : '{i18n>Industry}',
                Value : industry,
            },
            {
                $Type : 'UI.DataField',
                Label : '{i18n>ContactPersonNumber}',
                Value : contact_person_number,
            },
            {
                $Type : 'UI.DataField',
                Label : '{i18n>BankName}',
                Value : bank_name,
            },
            {
                $Type : 'UI.DataField',
                Label : '{i18n>BankAccountNumber}',
                Value : bank_account_number,
            },
            {
                $Type : 'UI.DataField',
                Label : '{i18n>LicenseNumber}',
                Value : license_number,
            },
            {
                $Type : 'UI.DataField',
                Label : '{i18n>ServiceOffering}',
                Value : service_offering,
            },
            {
                $Type : 'UI.DataField',
                Label : '{i18n>ServiceDescription}',
                Value : service_description,
            },
            {
                $Type : 'UI.DataField',
                Label : '{i18n>AdditionalComments}',
                Value : additional_comments,
            },
            {
                $Type : 'UI.DataField',
                Label : '{i18n>Reference}',
                Value : reference,
            },
            {
                $Type : 'UI.DataField',
                Label : 'Status',
                Value : status,
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
annotate service.Vendor with {
    service_offering @UI.MultiLineText : true
};
annotate service.Vendor with {
    service_description @UI.MultiLineText : true
};
annotate service.Vendor with {
    additional_comments @UI.MultiLineText : true
};
annotate service.Vendor with @(
    UI.HeaderInfo : {
        TypeName : '',
        TypeNamePlural : '',
        Title : {
            $Type : 'UI.DataField',
            Value : company_name,
        },
        Initials : bank_name,
    }
);
annotate service.Vendor with {
    company_name @Common.FieldControl : #Mandatory
};
annotate service.Vendor with {
    registration_number @Common.FieldControl : #Mandatory
};
annotate service.Vendor with {
    company_address @Common.FieldControl : #Optional
};
annotate service.Vendor with {
    company_type @Common.FieldControl : #Optional
};
annotate service.Vendor with {
    tax_number @Common.FieldControl : #Mandatory
};
annotate service.Vendor with {
    contact_person_name @Common.FieldControl : #Mandatory
};
annotate service.Vendor with {
    contact_person_email @Common.FieldControl : #Mandatory
};
annotate service.Vendor with {
    industry @Common.FieldControl : #Optional
};
annotate service.Vendor with {
    contact_person_number @Common.FieldControl : #Mandatory
};
annotate service.Vendor with {
    bank_name @Common.FieldControl : #Mandatory
};
annotate service.Vendor with {
    bank_account_number @Common.FieldControl : #Mandatory
};
annotate service.Vendor with {
    license_number @Common.FieldControl : #Mandatory
};
annotate service.Vendor with {
    service_offering @Common.FieldControl : #Optional
};
annotate service.Vendor with {
    service_description @Common.FieldControl : #Optional
};
annotate service.Vendor with {
    additional_comments @Common.FieldControl : #Optional
};
annotate service.Vendor with {
    reference @Common.FieldControl : #Optional
};
annotate service.Vendor with {
    status @Common.FieldControl : #ReadOnly
};
annotate service.Vendor with @(
    UI.SelectionFields : [
        status,
    ]
);
annotate service.Vendor with {
    status @Common.Label : '{i18n>ApprovalStatus}'
};
