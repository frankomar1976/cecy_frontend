import {Routes} from '@angular/router';
// import { AuthGuard } from '../../shared/guards/auth.guard';



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
    }
];
