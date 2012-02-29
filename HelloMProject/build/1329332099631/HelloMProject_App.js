
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

// ==========================================================================
// The M-Project - Mobile HTML5 Application Framework
// Generated with: Espresso 
//
// Project: HelloMProject
// View: FormPage
// ==========================================================================

HelloMProject.FormPage = M.PageView.design({

    childViews: 'header content',

    header: M.ToolbarView.design({
        value: 'Hello The M Project',
        anchorLocation: M.TOP
    }),

    content: M.ScrollView.design({
        childViews: 'label form button',
        label: M.LabelView.design({
            value: 'Enter your name'
        }),
        form: M.TextFieldView.design({
        }),
        button: M.ButtonView.design({
            value: 'Submit',
            events: {
                tap: {
                    target: HelloMProject.HelloController,
                    action: 'greet'
                }
            }
        })
    })
});


// ==========================================================================
// The M-Project - Mobile HTML5 Application Framework
// Generated with: Espresso 
//
// Project: HelloMProject
// View: HelloPage
// ==========================================================================

HelloMProject.HelloPage = M.PageView.design({

    childViews: 'header content',

    header: M.ToolbarView.design({
        value: 'Welcome!',
        anchorLocation: M.TOP,
        showBackButton: YES
    }),

    content: M.ScrollView.design({
        childViews: 'label',
        label: M.LabelView.design({
            contentBinding: {
                target: HelloMProject.HelloController,
                property: 'greeting'
            }
        })
    })
});


// ==========================================================================
// The M-Project - Mobile HTML5 Application Framework
// Generated with: Espresso 
//
// Project: HelloMProject 
// ==========================================================================

var HelloMProject  = HelloMProject || {};

HelloMProject.app = M.Application.design({

    /* Define the entry/start page of your app. This property must be provided! */
    entryPage : 'form',

    form: HelloMProject.FormPage,

    hello: HelloMProject.HelloPage

});
