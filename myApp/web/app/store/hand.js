Ext.define('myApp.store.hand', {
    extend: 'Ext.data.Store',
    requires: 'myApp.model.Deck',
    model: 'myApp.model.Deck',
    autoLoad: true,
    proxy: {
        type: 'ajax',
        url: 'data/session.json',
        reader: {
            type: 'json'
        }
    }
});

