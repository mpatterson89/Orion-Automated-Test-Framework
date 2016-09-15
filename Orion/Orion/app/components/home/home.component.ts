/**
 * Created by Michael on 4/24/2016.
 */

import {Component} from 'angular2/core';
import {CORE_DIRECTIVES, NgClass, FORM_DIRECTIVES} from 'angular2/common';


@Component({
    selector: 'home',
    templateUrl: 'app/components/home/home.component.html',
    directives: [ NgClass, CORE_DIRECTIVES, FORM_DIRECTIVES]
})
export class HomeComponent{
    constructor(){}
}