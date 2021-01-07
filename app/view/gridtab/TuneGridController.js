Ext.define('ModernTunes.view.gridtab.TuneGridController', {
    extend: 'ModernTunes.view.main.MainController',

    alias: 'controller.tunegridcontroller',
    
    init: function () {},
    
    onGridSelect: function(grid, records) {
        this.onShowPreview(records[0]);
    }
});