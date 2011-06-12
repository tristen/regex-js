$(function() {
    Bones.start();

    Bones.initialize(function(models, views, controllers, templates) {
        Bones.user = new models['User']();
        Bones.user.status();

        // Fix for [IE8 AJAX payload caching][1]. Only applied to authenticated
        // users to allow proxy caching to take effect.
        // [1]: http://stackoverflow.com/questions/1013637/unexpected-caching-of-ajax-results-in-ie8
        Bones.user.bind('auth:status', function(user) {
            $.ajaxSetup({ cache: !user.authenticated });
        });

        // Add bones-admin view.
        Bones.admin = new views['Admin']({
            model: Bones.user,
            auth: views['AdminLogin'],
            dropdowns: [
                views['AdminDropdownUser']
            ]
        });
    });

    if (!location.hash) {
        location.hash = '/';
    }
});
