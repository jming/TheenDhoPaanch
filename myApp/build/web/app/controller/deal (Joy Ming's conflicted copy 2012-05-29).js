var hand1 = new Array();
var hand2 = new Array();
var hand3 = new Array();
var hands = [hand1, hand2, hand3];
var player1 = "";
var player2 = "";
var player3 = "";
var trump = "";

Ext.define('myApp.controller.deal', {
    
    extend: 'Ext.app.Controller',
    requires: 'myApp.model.Deck',
    model: 'myApp.model.Deck',
    
    config: {
        refs: { 
            startButton: '#startButton', 
            selectTrumpButton: '#selectTrumpButton',
            card1a: '#card1a',
            card2a: '#card2a',
            card3a: '#card3a',
            card4a: '#card4a',
            card5a: '#card5a',
            card6: '#card6',
            card7: '#card7',
            card8: '#card8',
            card9: '#card9',
            card10: '#card10',
            table1: '#table1',
            table2: '#table2',
            table3: '#table3',
            selected: '#selected',
            trumpValue: '#trumpValue',
            playerName: '#playerName'
        },
        control: {
            startButton : { 
                tap: 'doStart' 
            },
            selectTrumpButton: {
                tap: 'doSelectTrump'
            }
        }
    },
    //on entry point for application, give control to Util.getViews()
    launch: function () {
        Ext.create('Ext.Container', {
            id: 'viewPort',
            fullscreen: true,
            layout: 'card',
            
            items: [
                {
                    xclass: 'myApp.view.startPage'
                }, 
                {
                    xclass: 'myApp.view.selectTrump'
                },
                {
                    xclass: 'myApp.view.nextMove'
                }
            ]
        });
        // viewPort.setActiveItem(0);
    },
    
    
    dealCards: function () {
        
        // list of current hands
       
        // generate the list of possible cards
        var cardList = new Array();
        this.genCards(cardList);
        
        console.log(cardList.length);
        
        for (j = 0; j < 10; j++)
        {
            for (k = 0; k < 3; k++)
            {  
                hand = hands[k];
                // generate random index of current cardList
                var randNum = Math.floor(Math.random()*(cardList.length));
                // console.log(cardList.length);
                // console.log(randNum);
                var randCard = cardList.splice(randNum,1);
                // console.log(randCard);
                // give randCard to hand
                hand.push(randCard);
            }
        }  
        
        /*console.log(hand1);
        console.log(hand2);
        console.log(hand3);*/
    },
    
    // generates all possible cards
    genCards: function (list) {

        var suits = ["D", "C", "H", "S"];
        for (h = 0; h < 4; h++)
        {
            suit = suits[h];
            
            for (i = 8; i < 15; i++)
            {
                list.push({"suit" : suit, "number" : i, "image" : "images/" + suit + "/" + i + '.png'})
            }
        }
        list.push({"suit" : "H", "number" : 7, "image" : "H/7.png"});
        list.push({"suit" : "S", "number" : 7, "image" : "S/7.png"});
    },
    
    doStart: function () {
        
        player1 = Ext.getCmp('Player1').getValue();
        player2 = Ext.getCmp('Player2').getValue();
        player3 = Ext.getCmp('Player3').getValue();
        
        if (player1 == "")
            player1 = "P1";
        if (player2 == "")
            player2 = "P2";
        if (player3 == "")
            player3 = "P3";
        
        this.dealCards();
        Ext.getCmp('playerName').setHtml(player1);
        
        /*for (i=1; i<6; i++)
        {
            console.log(hand1);
            var currCard = hand1[i-1];
            console.log(currCard);
            var cardLabel = 'card'+i;
            Ext.button.cardLabel.setIcon(currCard.number+currCard.suit)
        }*/
        
        console.log(hand1[0][0].suit+hand1[0][0].number);
        
        /*Ext.getCmp('card1').setIcon(hand1[0][0].image);*/
        //this.getCard1().setLabel(hand1[0][0].suit);
    
        Ext.getCmp('card1a').setIcon(hand1[0][0].suit+hand1[0][0].number);
        Ext.getCmp('card2a').setIcon(hand1[1][0].suit+hand1[1][0].number);
        Ext.getCmp('card3a').setIcon(hand1[2][0].suit+hand1[2][0].number);
        Ext.getCmp('card4a').setIcon(hand1[3][0].suit+hand1[3][0].number);
        Ext.getCmp('card5a').setIcon(hand1[4][0].suit+hand1[4][0].number);
        
        /*Ext.getCmp('card2a').setText('Hi');
        Ext.getCmp('card3a').setIcon(hand1[2][0].image);
        Ext.getCmp('card4a').setIcon(hand1[3][0].image);
        Ext.getCmp('card5a').setIcon(hand1[4][0].image);*/
        
        
        // console.log(hand1[0]);
        /*card2.setIcon(hand1[1].number+hand1[1].suit);
        card3.setIcon(hand1[2].number+hand1[2].suit);
        card4.setIcon(hand1[3].number+hand1[3].suit);
        card5.setIcon(hand1[4].number+hand1[4].suit);*/
        
        Ext.getCmp('viewPort').setActiveItem(1);
        
    },
    
    doSelectTrump: function () {
        
        /*trump = Ext.getCmp('selected').getValue();
        Ext.getCmp('trumpValue').setText(trump);
        // need pictures of suits
        
        Ext.getCmp('card6').setIcon(hand1[5].img);
        Ext.getCmp('card7').setIcon(hand1[6].img);
        Ext.getCmp('card8').setIcon(hand1[7].img);
        Ext.getCmp('card9').setIcon(hand1[8].img);
        Ext.getCmp('card10').setIcon(hand1[9].img);*/
        
        Ext.getCmp('viewPort').setActiveItem(2);  
    }
    
    
});
