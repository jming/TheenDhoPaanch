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
                        id: 'transitionStage',
                        height: 40
                    },
                    {
                        xtype: 'button',
                        id: 'continueButton',
                        docked: 'bottom',
                        text: 'Continue',
                        ui: 'decline-round'
                        
                    },
                ]
            },
             {
                xtype: 'toolbar',
                docked: 'bottom',
                // put player name here
                title: '',
                id: 'nextplayerturn',
                width: '100%',
                centered: true,
                items: [
                    {
                        xtype: 'button',
                        id: 'trumpValue2',
                        width: '20%'
                        // need to make this more dynamic
                    },
                    {
                        xtype: 'label',
                        // somehow make it centered/look nice
                        id: 'Nextplayer',
                        width: '54%'
                    },
                    {
                        xtype: 'button',
                        text: 'Status',
                        // image or resize button
                        id: 'statusButton',
                        width: '20%',
                    },
                ]
             }
        ]
    }

});