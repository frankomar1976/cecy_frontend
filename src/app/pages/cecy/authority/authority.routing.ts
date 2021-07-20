import {Routes} from '@angular/router';
import { AuthGuard } from 'src/app/shared/guards/auth.guard';
import { AuthorityComponent } from './authority.component';


export const AuthorityRouting: Routes = [
    {

                path: '',
                component: AuthorityComponent,
               // canActivate: [AuthGuard]

    }
];
