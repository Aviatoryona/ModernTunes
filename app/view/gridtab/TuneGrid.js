Ext.define('ModernTunes.view.gridtab.TuneGrid', {
    extend: 'Ext.grid.Grid',

    xtype: 'tunegrid',
    cls: 'tunes-grid',

    store: {
        type: 'tune'
    },

    controller:'tunegridcontroller',

    requires: [
        'Ext.grid.column.Column',
        'Ext.grid.cell.*'
    ],

    defaults: {
        height: 74
    },



    columns: [
        {
            text: 'Artist',
            dataIndex: 'artist',
            flex: 1
        },
        {
            text: 'Title',
            dataIndex: 'title',
            flex: 1
        },
        {
            text: 'Release Date',
            dataIndex: 'release_date',
            flex: .5
        },
        {
            text: 'Thumbnail',
            dataIndex: 'image',
            tpl: '<img class="grid-image" src="{image}"/>',
            cell: {
                encodeHtml: false
            }
        }
    ],

    listeners: {
        select: 'onGridSelect'
    },
});