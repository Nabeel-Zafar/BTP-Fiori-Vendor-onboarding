module.exports = (srv) => {
    const { Vendor } = srv.entities;

    srv.on('READ', 'Vendor', async (req) => {
        const vendors = await SELECT.from(Vendor);
        return vendors;
    });

    srv.on('CREATE', 'Vendor', async (req) => {
        const { data } = req;
        console.log('-----------baby', data)
        const result = await INSERT.into(Vendor).entries(data);
        return result;
    });
};
