import {RouterModule} from '@angular/router';
import {NgModule} from '@angular/core';

// Application Components
import {AppMainComponent} from './shared/components/main/app.main.component';
import {AppBlankComponent} from './shared/components/blank/app.blank.component';

// Application Guards
import {AuthGuard} from './shared/guards/auth.guard';

@NgModule({
    imports: [
        RouterModule.forRoot([
            {
                path: '', component: AppMainComponent,
                children: [
                    {path: '', redirectTo: '/cecy', pathMatch: 'full'},

                    /* {
                        path: 'user',
                        loadChildren: () => import('./pages/auth/auth.module').then(m => m.AuthModule),
                        canActivate: [AuthGuard]
                    } */
                    {
                        path: 'cecy',
                        loadChildren: () => import('./pages/cecy/cecy.module').then(m => m.CecyModule),
                        canActivate: [AuthGuard]
                    },
                    {
                        path: 'dashboard',
                        loadChildren: () => import('./pages/dashboard/dashboard.module').then(m => m.DashboardModule),
                        canActivate: [AuthGuard]
                    }
                ]
            },
            {
                path: 'auth',
                component: AppBlankComponent,
                loadChildren: () => import('./pages/auth/auth.module').then(m => m.AuthModule)
            },
            {path: '**', redirectTo: '/auth/not-found'},
        ], {scrollPositionRestoration: 'enabled'})
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
