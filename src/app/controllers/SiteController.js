class SiteController {
    index(req, res) {
        res.render('home');
    }
    show(req, res) {
        res.send('Contact');
}
}

                    module.exports = new SiteController();
