var controller = {
    routes: [
        '/home',
        '/contact',
        '/test',
        '/'
    ],
    handle: function(app) {
        app.get('*', function(req, res) {
            var url = req.url;
            if (this.routes.includes(url)) {

            } else {
                res.send('<b>404 page</b>');
            }
        });
    },
    checkInRoutes: function(url, routes) {
        routes.forEach(function(elem) {
            if (elem == url) {

            }
        });
    }
};

module.exports = controller;
