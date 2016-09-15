/**
 * Created by Michael on 4/20/2016.
 */

import {bootstrap} from 'angular2/platform/browser'
import {AppComponent} from '../app.component'
import {ROUTER_PROVIDERS} from 'angular2/router';
import {HTTP_PROVIDERS} from 'angular2/http';


bootstrap(AppComponent, [ROUTER_PROVIDERS, HTTP_PROVIDERS]).catch(console.error);