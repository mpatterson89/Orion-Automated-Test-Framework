/**
 * Created by Michael on 4/24/2016.
 */

import {Component} from 'angular2/core'
import {RouterLink} from 'angular2/router'



@Component({
    selector: 'navbar',
    templateUrl: 'app/components/navbar/navbar.component.html',
    directives: [RouterLink]
})

export class NavBarComponent{}