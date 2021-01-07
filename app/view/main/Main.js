/**
 * This class is the main view for the application. It is specified in app.js as the
 * "mainView" property. That setting causes an instance of this class to be created and
 * added to the Viewport container.
 */
Ext.define('ModernTunes.view.main.Main', {
    extend: 'Ext.tab.Panel',
    xtype: 'app-main',

    requires: [
        'Ext.MessageBox',
        'Ext.layout.Fit'
    ],

    controller: 'main',
    viewModel: 'main',
    activeItem: 0,

    defaults: {
        tab: {
            iconAlign: 'top'
        }
    },
    bodyPadding: 15,

    tabBarPosition: 'bottom',

    items: [
        {
            title: "Thumbnails",
            iconCls: 'x-fa fa-home',
            layout: 'fit',
            xtype: 'tunesview'
        },
        {
            title: "Grid",
            xtype: 'tunegrid',
            iconCls: 'x-fa fa-home',
            layout: 'fit',
        },
    ]
});
