Ext.define('ModernTunes.store.Tune', {
    extend: 'Ext.data.Store',

    alias: 'store.tune',

    requires: ['Ext.data.proxy.JsonP'],

    model: 'ModernTunes.model.Tune',

    proxy: {
        type: 'jsonp',
        url: `https://itunes.apple.com/us/rss/topmusicvideos/limit=50/json`, 
        reader: {
            type: 'json',
            rootProperty: 'feed.entry'
        },
    
    },

    sorters: ['artist', 'title'],

    autoLoad: true
});