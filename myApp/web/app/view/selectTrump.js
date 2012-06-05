Ext.define('myApp.view.selectTrump', {
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
                        html:'As the first player you have to make five hands. Please chose the trump suite based on your first five cards.<br>'
                    },
                    {
                        xtype: 'label',
                        html: '<br>'
                    },
                    {
                        xtype: 'selectfield',
                        /*label: 'Please chose the trump suite based on your first five cards',*/
                        options: [
                            {
                                text: 'Clubs', value: 'Clubs'
                            },
                            {
                                text: 'Diamonds', value: 'Diamonds'
                            },
                            {
                                text: 'Hearts', value: 'Hearts'
                            },
                            {
                                text: 'Spades', value: 'Spades'
                            }
                        ],
                        id: 'selected'
                    },
                    {
                        xtype: 'label',
                        html: '<br>'
                    },
                    {
                        xtype: 'button',
                        text: 'Select Trump!',
                        id: 'selectTrumpButton',
                        ui: 'decline-round'
                    },
                    {
                        xtype: 'label',
                        html: '<br>'
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
                                id: 'card1a',
                                height: 64,
                                width: 50,
                                //icon: 'images/C/10.png'
                                padding: '0'
                            },
                            {
                                xtype: 'button',
                                id: 'card2a',
                                height: 64,
                                width: 50,
                                padding: '0'
                            },
                            {
                                xtype: 'button',
                                id: 'card3a',
                                height: 64,
                                width: 50,
                                padding: '0'
                            },
                            {
                                xtype: 'button',
                                id: 'card4a',
                                height: 64,
                                width: 50,
                                padding: '0'
                            },
                            {
                                xtype: 'button',
                                id: 'card5a',
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
                centered: true,
                items: [
                    {
                        xtype: 'label',
                        // somehow make it centered/look nice
                        id: 'playerName',
                        width: '70%'
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