const routes = require('next-routes')();

routes
    .add('/MemberPortal', '/portal/MemberPortal')
    .add('/AgencyPortal', '/portal/AgencyPortal');

module.exports = routes;
