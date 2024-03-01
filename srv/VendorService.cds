using my.app as my from '../db/vendor';

service VendorService {
    entity Vendor as projection on my.Vendor;
}
