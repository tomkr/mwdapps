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

