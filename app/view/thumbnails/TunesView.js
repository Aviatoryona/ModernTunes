Ext.define('ModernTunes.view.thumbnails.TunesView', {
    extend: 'Ext.dataview.DataView',

    xtype: 'tunesview',

    scrollable: true,
    layout: {
        type: 'box',
        pack: 'space-around',
        wrap: true
    },
    cls: 'tunes-view',
    itemCls: 'video',

    store: {
        type: 'tune'
    },
    
    controller: 'tunesviewcontroller',

    listeners: {
        select: 'onThumbSelect'
    },

    itemTpl: [
        '<figure>',
        '<img class="thumbnail" src="{image}"/>',
        '<figcaption><div class=\'title\'>{title}</div><div class=\'artist\'>{artist}</div></figcaption>',
        '</figure>'
    ]
});