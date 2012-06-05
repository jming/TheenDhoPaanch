var hand1 = new Array();
var hand2 = new Array();
var hand3 = new Array();
var hands = [hand1, hand2, hand3];
var player1 = "";
var player2 = "";
var player3 = "";

Ext.define('myApp.controller.deal', {
    
    extend: 'Ext.app.Controller',
    // requires: 'myApp.model.Deck',
    // model: 'myApp.model.Deck',
        
    config: {
        /*control: {
            startButton : { tap: 'doStart' }
        }*/
    },
    //on entry point for application, give control to Util.getViews()
    launch: function () {
        Ext.create('Ext.Container', {
            id: 'mainView',
            fullscreen: true,
            layout: 'card',
            items: [{
                    xclass: 'myApp.view.viewPort'
                }, {
                    xclass: 'myApp.view.selectTrump'
                }]
        });
    },
    
    //once Util.populateViews() is done with AJAX GET calls, it calls this function
    //to start graphics, etc
    //views is the 2-d array of view urls (see Util.populateViews() for more info)
    launchAfterAJAX: function (views) {
        //remove loading mask
        Ext.getCmp('mainView').setMasked(false);
    },
    
    dealCards: function () {
        
        // list of current hands
       
        // generate the list of possible cards
        var cardList = new Array();
        genCards(cardList);
        
        for (j = 0; j < 11; j++)
        {
            for (hand in hands)
            {  
                // generate random index of current cardList
                var randNum = Math.floor(Math.random()*(cardList.length+1));
                var randCard = cardList.splice(randNum);
                
                // give randCard to hand
                hand.push(randCard);
            }
        }  
    },
    
    // generates all possible cards
    genCards: function (list) {

        var suits = ["D", "C", "H", "S"];
        for (suit in suits)
        {
            for (i = 8; i < 15; i++)
            {
                list.push({"suit" : suit, "number" : i, "image" : suit + "/" + i + ".png"})
            }
        }
        list.push({"suit" : "H", "number" : 7, "image" : "H/7.png"});
        list.push({"suit" : "S", "number" : 7, "image" : "S/7.png"});
    },
    
    onStartButtonTap: function () {
        
        player1 = Ext.getCmp('player1').getValue();
        player2 = Ext.getCmp('player2').getValue();
        player3 = Ext.getCmp('player3').getValue();
        
        if (player1 == "")
            player1 = P1;
        
        if (player2 == "")
            player2 = P2;
        
        if (player3 == "")
            player3 = P3;
        
        Ext.create('selectTrump');
        
    }
    
});

