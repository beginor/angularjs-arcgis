import Map = require('esri/Map');
import MapView = require('esri/views/MapView');
import TileLayer = require('esri/layers/TileLayer');

import { IAsyncModule } from '../../models/app';

class MapController {

    mapView: MapView
    
    static $inject = ['$scope'];
    
    constructor(
        private $scope: ng.IScope
    ) {
    }
    
    $onInit() {
        var map = new Map({});

        var tileLayer = new TileLayer({
            url: 'http://cache1.arcgisonline.cn/arcgis/rest/services/ChinaOnlineCommunity/MapServer',
        });

        map.add(tileLayer);

        this.mapView = new MapView({
            map: map,
            center: [113, 23],
            zoom: 7,
            container: 'map'
        });
    }
    
    $onDestroy() {
        //
    }
}

(<IAsyncModule>angular.module('app')).compileProvider
    .component('map', {
        templateUrl: 'build/components/map/map.view.html',
        controller: MapController
    });
