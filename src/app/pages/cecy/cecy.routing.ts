import {Routes} from '@angular/router';
import { AuthorityComponent } from './authority/authority.component';



export const CecyRouting: Routes = [
    {
        path: '',
        children: [
            {
                path: 'authority',
                // component:AuthorityComponent,
               loadChildren: () => import('./authority/authority.module').then(m => m.AuthorityModule)
               // canActivate: [AuthGuard]
            }
        ]
    },{
        path: 'pruebaAutority',
        component: AuthorityComponent
    }
];
