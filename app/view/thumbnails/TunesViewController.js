Ext.define('ModernTunes.view.thumbnails.TunesViewController', {
    extend: 'ModernTunes.view.main.MainController',
    
    alias: 'controller.tunesviewcontroller',
    
    init: function () {},

    onThumbSelect: function(thumbs, record) {
        this.onShowPreview(record);
    },
});