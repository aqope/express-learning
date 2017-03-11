var controller = {
    routes: {
        home: 'something-home',
        contact: 'something-contact',
        test: 'test-test'
    },
    handle: function(app) {
        app.get('*', function(req, res) {
            var url = req.url;
            console.log(url);
            var urlParts = url.split('/');
            console.log(urlParts);
            if (typeof urlParts[1] != 'undefined') {
                if (typeof this.routes[urlParts[1]] != 'undefined') {
                    res.send(this.routes[urlParts[1]]);
                } else {
                    res.send('404');
                }
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
