var controller = {
    routes: {
        default: "something-default",
        home: 'something-home',
        contact: 'something-contact',
        test: 'test-test'
    },
    handle: function(app) {
        var _this = this;
        app.get('*', function(req, res) {
            var url = req.url;
            var urlParts = url.split('/');
            if (urlParts[1] != '') {
                if (typeof _this.routes['' + urlParts[1] + ''] != 'undefined') {
                    res.send(_this.routes[urlParts[1]]);
                } else {
                    res.send('404');
                }
            } else {
                res.send(_this.routes.default);
            }
        });
    },
    checkInRoutes: function(url, routes) {
        routes.forEach(function(elem) {
            if (elem == url) {

            }
        });
    },
    getData: function() {
        return this.routes;
    }
};

module.exports = controller;
