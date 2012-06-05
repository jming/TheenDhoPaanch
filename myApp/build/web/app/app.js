Ext.Loader.setConfig({
    enabled: true
});

Ext.application({
    name: 'myApp',
    controllers: ['deal'],
    views: ['startPage', 'selectTrump'],
    models: ['Deck'],

    launch: function () {
        Ext.create('myApp.view.startPage');
    }
});