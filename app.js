/*
 * This file launches the application by asking Ext JS to create
 * and launch() the Application class.
 */
Ext.application({
    extend: 'ModernTunes.Application',

    name: 'ModernTunes',

    requires: [
        // This will automatically load all classes in the ModernTunes namespace
        // so that application classes do not need to require each other.
        'ModernTunes.*'
    ],

    // The name of the initial view to create.
    mainView: 'ModernTunes.view.main.Main'
});
