view = Backbone.View.extend({
    initialize: function(options) {
        _.bindAll(this, 'render');
        this.render().trigger('attach');
    },
    render: function() {
        this.starterText();
        this.listenAndMatch();
        return this;
    },
    starterText: function() {
        $('div.textarea').html('regex-js v0.1.0 <br /> <br />regex-js is a tool that allows you to match expressions against the text you type above.');
    },
    listenAndMatch: function() {
        // TODO: Fire only on certain keys
        $('#expression, div.textarea').keydown(function() {
            if ($('#expression').val()) {
                var evaluate = $('div.textarea').text(),
                    pattern = $('#expression').val();

                // Test validity of pattern entered before firing.
                try { 
                    regex = new RegExp(pattern);
                    valid = true;
                } catch(e) {
                    regex = null;
                    valid = false;
                }
                if (valid) {
                    evaluate.replace(regex, function(match) {
                        console.log(match);
                        return $('div.textarea').html('<span class="highlight">' + match + '</span>');
                    });
                } else {
                    console.log('not a valid regular expression');
                }
            };
        });
    }
});