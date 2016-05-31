/**
 * Created by zhang on 4/10/16.
 */
import { IAppStateConfig } from "../models/app";

var appState: IAppStateConfig = {
    defaultUrl: '/map',
    states: {
        'map': {
            url: '/map',
            template: '<map></map>',
            dependencies: [
                'build/components/map/map.controller'
            ],
            allowAnonymous: true
        }
    }
};

export { appState };
