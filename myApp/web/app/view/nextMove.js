Ext.define('myApp.view.nextMove', {
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
                height: 360,
                width: 320,
                centered: true,
                items: [
                    {
                        xtype: 'label',
                        html: 'Table <br><br>'
                    },
                    {
                        xtype: 'container',
                        layout: 'hbox',
                        id: 'table',
                        items: [
                            
                            {
                                xtype: 'button',
                                id: 'table1',
                                height: 64,
                                width: 50,
                                padding: '0'
                            },
                            {
                                xtype: 'button',
                                id: 'table2',
                                height: 64,
                                width: 50,
                                padding: '0'
                            },
                            {
                                xtype: 'button',
                                id: 'table3',
                                height: 64,
                                width: 50,
                                padding: '0'
                            }
                        ]
                    },
                    {
                        xtype: 'label',
                        html: '<br> Your Hand <br><br>'
                    },
                    {
                        xtype: 'container',
                        layout: 'hbox',
                        //centered: true,
                        items: [
                            // can we find a way to dynamically generate tehse buttons?
                            // how do we link the values of the buttons with the values of the cards
                            // go through and show only the first five cards of hand1
                            // how do you make them in one row--should it be a segmented button?
                            {
                                xtype: 'button',
                                id: 'card1',
                                height: 64,
                                width: 50,
                                //icon: 'images/C/10.png'
                                padding: '0'
                            },
                            {
                                xtype: 'button',
                                id: 'card2',
                                height: 64,
                                width: 50,
                                padding: '0'
                            },
                            {
                                xtype: 'button',
                                id: 'card3',
                                height: 64,
                                width: 50,
                                padding: '0'
                            },
                            {
                                xtype: 'button',
                                id: 'card4',
                                height: 64,
                                width: 50,
                                padding: '0'
                            },
                            {
                                xtype: 'button',
                                id: 'card5',
                                height: 64,
                                width: 50,
                                padding: '0'
                            }
                        ]
                    },
                    {
                        xtype: 'container',
                        layout: 'hbox',
                        //centered: true,
                        items: [
                            // can we find a way to dynamically generate tehse buttons?
                            // how do we link the values of the buttons with the values of the cards
                            // go through and show only the first five cards of hand1
                            // how do you make them in one row--should it be a segmented button?
                            {
                                xtype: 'button',
                                id: 'card6',
                                height: 64,
                                width: 50,
                                //icon: 'images/C/10.png'
                                padding: '0'
                            },
                            {
                                xtype: 'button',
                                id: 'card7',
                                height: 64,
                                width: 50,
                                padding: '0'
                            },
                            {
                                xtype: 'button',
                                id: 'card8',
                                height: 64,
                                width: 50,
                                padding: '0'
                            },
                            {
                                xtype: 'button',
                                id: 'card9',
                                height: 64,
                                width: 50,
                                padding: '0'
                            },
                            {
                                xtype: 'button',
                                id: 'card10',
                                height: 64,
                                width: 50,
                                padding: '0'
                            }
                        ]
                    }
                ]
            },

            {
                xtype: 'toolbar',
                docked: 'bottom',
                // put player name here
                title: '',
                id: 'playerNameBar',
                width: '100%',
                centered: true,
                items: [
                    {
                        xtype: 'button',
                        id: 'trumpValue',
                        width: '20%'
                        // need to make this more dynamic
                    },
                    {
                        xtype: 'label',
                        // somehow make it centered/look nice
                        id: 'playerName2',
                        width: '54%'
                    },
                    {
                        xtype: 'button',
                        text: 'Status',
                        // image or resize button
                        id: 'statusButton',
                        width: '20%'
                    },
                ]
            }
        ]
    }

});