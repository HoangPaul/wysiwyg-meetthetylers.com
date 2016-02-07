requirejs.config({
    paths: {
        "app": "../app",
        "jquery": "https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js"
    }
});

requirejs(["app/scripts"]);
