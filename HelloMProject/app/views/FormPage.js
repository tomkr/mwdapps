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

