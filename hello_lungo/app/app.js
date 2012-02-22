var App = (function(lng, undefined) {

    lng.App.init({
        name: 'Hello Lungo',
        version: '0.1'
    });

    return {
    };

})(LUNGO);

App.Events = (function(lng, undefined) {
  
    lng.dom("#submitButton").tap(function(event) {
        var name = lng.dom("#name").val();
        lng.dom("#hello-name").html("Hello "+name+"!");
        lng.Router.section("hello");
    });

})(LUNGO);
