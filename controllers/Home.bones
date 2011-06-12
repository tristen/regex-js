controller = Backbone.Controller.extend({
    routes: {
        '/': 'home'
    },

    home: function() {
        var view = new views['Home'];
        this.res && this.res.send(view.el);
    }
});
