module.exports = (srv) => {
    const { Vendor } = srv.entities;

    // srv.on('READ', 'Vendor', async (req) => {
    //     console.log('read request')
    //     const vendors = await SELECT.from(Vendor);
    //     console.log(vendors);

    //     return vendors;
    // });

    // srv.on('CREATE', 'Vendor', async (req) => {
    //     const { data } = req;
    //     console.log('-----------', data)
    //     const result = await INSERT.into(Vendor).entries(data);
    //     return result;
    // });
};
