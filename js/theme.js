/* Copyright (C) YOOtheme GmbH, YOOtheme Proprietary Use License (http://www.yootheme.com/license) */

jQuery(function($) {

    var config = $('html').data('config') || {};

    // Social buttons
    $('article[data-permalink]').socialButtons(config);


    // Weather Widget
    var weather_widget = $('[data-weather]');

    if (weather_widget.length) {

        config.weather = weather_widget.data('weather');

        $.simpleWeather({
            location: config.weather.location,
            unit: config.weather.unit,

            success: function(weather) {

                var html = '';

                html = '<div class="uk-width-medium-1-1 uk-width-large-1-2">';
                html += '<h3 class="uk-h4 uk-margin-bottom-remove">' + weather.city + '</h3>';
                html += '<p class="uk-margin-remove">' + weather.text + '</p>';
                html += '</div>';

                html += '<div class="uk-clearfix uk-width-medium-1-1 uk-width-large-1-2">';
                html += '<span class="uk-float-right">' + weather.temp + '&deg;</span>';
                html += '<i class="uk-float-right uk-icon-large tm-icon-' + weather.code + '"></i>';
                html += '</div>';

                weather_widget.html(html).addClass('uk-grid uk-grid-width-1-2');

            },

            error: function(error) {
                weather_widget.html('<p>' + error.message + '</p>');
            }

        });

    }

});
