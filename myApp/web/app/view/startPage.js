Ext.define('myApp.view.startPage', {
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
                        html: '<br>3-2-5!<br>Please fill in desired nicknames.<br><br>'
                    },
                    {
                        xtype: 'textfield',
                        label: 'Player 1',
                        id: 'Player1'
                    },
                    {
                        xtype: 'textfield',
                        label: 'Player 2',
                        id: 'Player2'
                    },
                    {
                        xtype: 'textfield',
                        label: 'Player 3',
                        id: 'Player3'
                    },
                    {
                        xtype: 'label',
                        html: '<br>'
                    },
                    {
                        xtype: 'button',
                        text: 'Start',
                        id: 'startButton',
                        ui: 'decline-round'
                    }
                ]
            }
        ]
    }

});