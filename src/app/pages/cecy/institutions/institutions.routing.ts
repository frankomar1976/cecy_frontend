import {Routes} from '@angular/router';
import { AuthGuard } from 'src/app/shared/guards/auth.guard';
import { InstitutionsComponent } from './institutions.component';


export const AuthorityRouting: Routes = [
    {

                path: '',
                component: InstitutionsComponent,
               // canActivate: [AuthGuard]

    }
];
