﻿define(function (require) {
    var system = require('durandal/system');
    
    var Second = function() {
        this.displayName = 'Second Page';
    };

    //the activator created in the shell calls 'activate' on any view model that it's set to
    //you can optionally return a promise for async activation
    Second.prototype.activate = function () {
        return system.defer(function (dfd) {
            //simulating an async screen activation that might load data from server
            setTimeout(function () {
                dfd.resolve();
            }, 2000);
        }).promise();
    };

    return Second;
});