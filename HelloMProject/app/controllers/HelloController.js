// ==========================================================================
// The M-Project - Mobile HTML5 Application Framework
// Generated with: Espresso 
//
// Project: HelloMProject
// Controller: HelloController
// ==========================================================================

HelloMProject.HelloController = M.Controller.extend({

    greeting: '',

    /*
    * Function to greet the user.
    */
    greet: function() {
        this.set('greeting', 'Hello '+ M.ViewManager.getView('form', 'form').value + '!');
        this.switchToPage('hello');
    }
});
