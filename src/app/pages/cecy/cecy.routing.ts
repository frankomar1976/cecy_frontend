import {Routes} from '@angular/router';




export const CecyRouting: Routes = [
    {
        path: '',
        children: [
            {
                path: 'authority',
                // component:AuthorityComponent,
               loadChildren: () => import('./authority/authority.module').then(m => m.AuthorityModule)
               // canActivate: [AuthGuard]
            },
            {
                path: '',
                // component:AuthorityComponent,
                loadChildren: () => import('./authority/authority.module').then(m => m.AuthorityModule)
               // canActivate: [AuthGuard]
            }
        ]
    }
];
