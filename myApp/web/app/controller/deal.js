var hand1 = new Array();
var hand2 = new Array();
var hand3 = new Array();
var hands = [hand1, hand2, hand3];
var player1 = "";
var player2 = "";
var player3 = "";
var players = [player1, player2, player3]
var trump = "";
var currHand = 0;
var currPlayer = 0;
var table = new Array();
var roundNumber = 1;
var winner = "";

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
            card1: '#card1',
            card2: '#card2',
            card3: '#card3',
            card4: '#card4',
            card5: '#card5',
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
            playerName: '#playerName',
            continueButton: '#continueButton'
        },
        control: {
            startButton : {tap: 'doStart'},
            selectTrumpButton : {tap: 'doSelectTrump'},
            card1 : {
                tap: function() {
                    this.cardClicked(0);
                }
            },
            card2 : {tap: function() {this.cardClicked(1);}},
            card3 : {tap: function() {this.cardClicked(2);}},
            card4 : {tap: function() {this.cardClicked(3);}},
            card5 : {tap: function() {this.cardClicked(4);}},
            card6 : {tap: function() {this.cardClicked(5);}},
            card7 : {tap: function() {this.cardClicked(6);}},
            card8 : {tap: function() {this.cardClicked(7);}},
            card9 : {tap: function() {this.cardClicked(8);}},
            card10 : {tap: function() {this.cardClicked(9);}},
            continueButton: {tap: 'continueGame'},
          /*  card2 : {tap: 'cardClicked'},
            card3 : {tap: 'cardClicked'},
            card4 : {tap: 'cardClicked'},
            card5 : {tap: 'cardClicked'},
            card6 : {tap: 'cardClicked'},
            card7 : {tap: 'cardClicked'},
            card8 : {tap: 'cardClicked'},
            card9 : {tap: 'cardClicked'},
            card10: {tap: 'cardClicked'}*/
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
                },
                {
                    xclass: 'myApp.view.transitionScreen'
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
        
        // console.log(cardList.length);
        
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
                list.push({"suit" : suit, "number" : i, "image" : "<img src = 'images/" + suit + "/" + i + ".png'>"})
            }
        }
        list.push({"suit" : "H", "number" : 7, "image" : "<img src = 'images/H/7.png'>"});
        list.push({"suit" : "S", "number" : 7, "image" : "<img src = 'images/S/7.png'>"});
    },
    
    doStart: function () {
        
        currHand = 1;
        currPlayer = 1;
        
        player1 = Ext.getCmp('Player1').getValue();
        player2 = Ext.getCmp('Player2').getValue();
        player3 = Ext.getCmp('Player3').getValue();
        
        if (player1 == "")
            player1 = "P1";
        if (player2 == "")
            player2 = "P2";
        if (player3 == "")
            player3 = "P3";
        
        players = [player1, player2, player3];
        
        this.dealCards();
        Ext.getCmp('playerName').setHtml("&nbsp&nbsp Welcome, " + player1);
        
        /*for (i=1; i<6; i++)
        {
            console.log(hand1);
            var currCard = hand1[i-1];
            console.log(currCard);
            var cardLabel = 'card'+i;
            Ext.button.cardLabel.setIcon(currCard.number+currCard.suit)
        }*/
        
        console.log(hand1[1][0].image);
        
        /*Ext.getCmp('card1').setIcon(hand1[0][0].image);*/
        //this.getCard1().setLabel(hand1[0][0].suit);
    
        //Ext.getCmp('card1a').setHtml("<img src ='images/8.png'>");
        Ext.getCmp('card1a').setHtml(hand1[0][0].image);
        Ext.getCmp('card2a').setHtml(hand1[1][0].image);
        Ext.getCmp('card3a').setHtml(hand1[2][0].image);
        Ext.getCmp('card4a').setHtml(hand1[3][0].image);
        Ext.getCmp('card5a').setHtml(hand1[4][0].image);
        
        /*Ext.getCmp('card1a').setText(hand1[0][0].suit+hand1[0][0].number);
        Ext.getCmp('card2a').setText(hand1[1][0].suit+hand1[1][0].number);
        Ext.getCmp('card3a').setText(hand1[2][0].suit+hand1[2][0].number);
        Ext.getCmp('card4a').setText(hand1[3][0].suit+hand1[3][0].number);
        Ext.getCmp('card5a').setText(hand1[4][0].suit+hand1[4][0].number);*/
        
        //Ext.getCmp('card2a').setText('Hi');
        /*Ext.getCmp('card3a').setIcon(hand1[2][0].image);
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
        
        trump = Ext.getCmp('selected').getValue();
        Ext.getCmp('trumpValue').setText(trump);
        // need pictures of suits
       
        Ext.getCmp('card1').setHtml(hand1[0][0].image);
        Ext.getCmp('card2').setHtml(hand1[1][0].image);
        Ext.getCmp('card3').setHtml(hand1[2][0].image);
        Ext.getCmp('card4').setHtml(hand1[3][0].image);
        Ext.getCmp('card5').setHtml(hand1[4][0].image);
        
        Ext.getCmp('card6').setHtml(hand1[5][0].image);
        Ext.getCmp('card7').setHtml(hand1[6][0].image);
        Ext.getCmp('card8').setHtml(hand1[7][0].image);
        Ext.getCmp('card9').setHtml(hand1[8][0].image);
        Ext.getCmp('card10').setHtml(hand1[9][0].image);
        
        Ext.getCmp('playerName2').setHtml("&nbsp&nbsp Your turn, " + player1);
        
        Ext.getCmp('viewPort').setActiveItem(2);
        
        
    },
    
    contains : function (a, obj) {
        for (var i = 0; i < a.length; i++) {
            console.log(a[i][0].suit);
            console.log(obj);
            if (a[i][0].suit == obj) {
                return true;
            }
        }
        return false;
    },
    
    cardClicked: function (x) {
        // figure out which button is getting clicked
        //console.log(x);
        // var selectedCard = "";
        // somehow figure out the order
        
        var order = x;
        
        /*if (currHand > 1)
            {
                console.log(hands[currPlayer-1][order][0].suit);
        console.log(table[0][0][0].suit);
        console.log(this.contains(hands[currPlayer-1],table[0].suit));
        console.log(hands[currPlayer-1]);
        console.log(hands[currPlayer-1][0][0].suit);
            }*/
        /*if (currHand>2)
            {
                console.log(table[0][0][0].suit);
                // console.log(table[0][0][1].suit);
                console.log(table[1][0][0].suit);
            }*/
        
        
        
        if ((currHand > 1) && 
            (hands[currPlayer-1][order][0].suit != table[0][0][0].suit) && 
            (this.contains(hands[currPlayer-1],table[0][0][0].suit)))
        {
            
            /*if (hands[currPlayer-1][order][0].suit != table[0].suit)
            {
                if ((this.contains(hands[currPlayer-1],table[0].suit)))*/
                    alert("Wrong move","Card should be of same suit")
            //}     
        }
        else  
        {
            // console.log(hands[currHand-1][order])
            var splicedCard = hands[currPlayer - 1].splice(order,1);
            //console.log(splicedCard);
            table.push(splicedCard);
            // console.log(table);
            // console.log(table[currHand-1][0][0].image);
            // console.log(c);
            Ext.getCmp('table'+currHand).setHtml(table[currHand - 1][0][0].image);
            // console.log(currHand);
            // console.log(table[currHand-1][0].image);

            // send that information to splice it from the hand
            // pop it onto the table

            if (currHand < 3)
            {
                currHand++;

                if (currPlayer < 3)
                    currPlayer++;
                else
                    currPlayer = 1;

                Ext.getCmp('transitionStage').setHtml('Thank you for making your move. Please pass the device to ' + players[currPlayer-1]);

                Ext.getCmp('Nextplayer').setHtml("&nbsp &nbsp Up next, " + players[currPlayer-1]);
                Ext.getCmp('trumpValue2').setText(trump);
            }
            else
            {
                
                this.winnerofround();
                
                Ext.getCmp('transitionStage').setHtml("This concludes round " + roundNumber + ". Please pass the device to the winner, " + players[winner] + ".");
                currHand = 1;
                currPlayer = winner + 1;
                roundNumber++;
                
                // increase score
                // increase round
            }

            Ext.getCmp('viewPort').setActiveItem(3);
  
       }
    },
    
    
    
    continueGame : function () {
        
        if (currHand < 4)
        {    
            var h = hands[currPlayer-1];
            console.log(h[0][0]);
            console.log(currPlayer-1);
        
            // check to see if exists
            
            for (c = 1; c < 11; c++)
            {
                if (h[c-1] != null)
                    Ext.getCmp('card'+c).setHtml(h[c-1][0].image)
                else
                    Ext.getCmp('card'+c).setHtml("<img src = 'images/back.png'>");
            }
            
        
            /*Ext.getCmp('card1').setHtml(h[0][0].image);
            Ext.getCmp('card2').setHtml(h[1][0].image);
            Ext.getCmp('card3').setHtml(h[2][0].image);
            Ext.getCmp('card4').setHtml(h[3][0].image);
            Ext.getCmp('card5').setHtml(h[4][0].image);

            Ext.getCmp('card6').setHtml(h[5][0].image);
            Ext.getCmp('card7').setHtml(h[6][0].image);
            Ext.getCmp('card8').setHtml(h[7][0].image);
            Ext.getCmp('card9').setHtml(h[8][0].image);
            Ext.getCmp('card10').setHtml(h[9][0].image);*/

            Ext.getCmp('playerName2').setHtml("&nbsp&nbsp Your turn, " + players[currPlayer-1]);

            Ext.getCmp('viewPort').setActiveItem(2)
        }
        
        
    },


    winnerofround : function()
    {
            if(table[0][0][0].suit == table[1][0][0].suit)
            {
                    if(table[1][0][0].suit == table[2][0][0].suit)
                    {
                            if(table[0][0][0].number > table[1][0][0].number)
                            {
                                    if(table[0][0][0].number > table[2][0][0].number) winner = 0;
                                    else winner = 2;
                            }
                            else
                            {
                                    if(table[1][0][0].number > table[2][0][0].number) winner = 1;
                                    else winner = 2;
                            }
                    }
                    else if(table[2][0][0].suit == trump && table[1][0][0].suit != trump) winner = 2;
                    else 
                    {
                            if(table[0][0][0].number > table[1][0][0].number)
                            {
                                    if(table[0][0][0].number > table[2][0][0].number) winner = 0;
                                    else winner = 2;
                            }
                    }
            }
            if(table[0][0][0].suit == trump && table[0][0][0].suit != table[1][0][0].suit)
            {
                    if(table[0][0][0].suit == table[2][0][0].suit)
                    {
                            if(table[0][0][0].number > table[2][0][0].number) winner = 0;
                            else winner = 2;
                    }
                    else winner = 0;
            }
            else
            {
                    if(table[0][0][0].suit == table[2][0][0].suit)
                    {
                            if(table[0][0][0].number > table[2][0][0].number) winner = 0;
                            else winner = 2;
                    }
                    else if(table[1][0][0].suit == trump && table[2][0][0] != trump) winner = 1;
                    else if(table[1][0][0].suit == trump && table[2][0][0] == trump)
                    {
                            if(table[1][0][0].number > table[2][0][0].number) winner = 1;
                            else winner = 2;

                    }
                    else winner = 0;
            }
    }
    
});
