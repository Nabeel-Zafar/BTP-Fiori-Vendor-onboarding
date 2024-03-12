using my.app as my from '../db/vendor';

service VendorService {
    @odata.draft.enabled
    entity Vendor as projection on my.Vendor;
}
// annotate VendorService.Vendor with @odata.draft.enabled;