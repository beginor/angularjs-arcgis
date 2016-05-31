/// <reference path="../typings/index.d.ts" />

import './app.module';

import { configAsyncModule } from './config/async-module';

angular.module('app')
    .config(configAsyncModule);
