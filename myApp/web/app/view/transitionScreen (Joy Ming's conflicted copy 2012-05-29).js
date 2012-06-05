Ext.define('myApp.view.transitionScreen', {
    extend: 'Ext.Container',
    requires: 'Ext.form.Panel',
    config: {
        items: [
            {
                xtype: 'titlebar',
                docked: 'top',
                title: 'Theen Do Paanch'
            },
            {   
                xtype: 'formpanel',
                id: 'formpanel',
                height: 340,
                width: 319,
                centered: true,
                items: [
                    {
                        xtype: 'label',
                        centered: true,
                        id: 'transitionStage'
                    },
                    {
                        xtype: 'button',
                        centered: true,
                        id: 'continueButton',
                        text: 'Continue'
                        
                    }
                ]
            }
        ]
    }

});