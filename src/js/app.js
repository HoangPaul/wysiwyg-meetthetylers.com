requirejs.config({
    shim: {
        'bootstrap': {
            deps: ["jquery"]
        },
        'jasny-bootstrap': {
            deps: ["jquery"]
        }
    },
    paths: {
        "app": "app",
        "jquery": "https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min",
        "handlebars": "https://cdnjs.cloudflare.com/ajax/libs/handlebars.js/4.0.5/handlebars",
        "bootstrap": "https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/js/bootstrap.min",
        "wow": "https://cdnjs.cloudflare.com/ajax/libs/wow/1.1.2/wow",
        "jasny-bootstrap": "https://cdnjs.cloudflare.com/ajax/libs/jasny-bootstrap/3.1.3/js/jasny-bootstrap.min"
    }
});

requirejs(["app/scripts", "bootstrap", "wow", "jasny-bootstrap"]);
