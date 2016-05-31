import Map = require('esri/map');
import ArcGISTiledMapServiceLayer = require('esri/layers/ArcGISTiledMapServiceLayer');

import { IAsyncModule } from '../../models/app';

class MapController {
    
    map: Map;
    
    static $inject = ['$scope'];
    
    constructor(
        private $scope: ng.IScope
    ) {
    }
    
    $onInit() {
        this.map = new Map('map', {
            logo: true,
            center: [113, 23],
            zoom: 7
        });
        var tiledLayer = new ArcGISTiledMapServiceLayer(
            'http://cache1.arcgisonline.cn/arcgis/rest/services/ChinaOnlineCommunity/MapServer'
        );
        this.map.addLayer(tiledLayer);
    }
    
    $onDestroy() {
        this.map.destroy();
    }
}

(<IAsyncModule>angular.module('app')).compileProvider
    .component('map', {
        templateUrl: 'build/components/map/map.view.html',
        controller: MapController
    });
