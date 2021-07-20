import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';


// PrimeNG Modules
import {ButtonModule} from 'primeng/button';
import {MessagesModule} from 'primeng/messages';
import {InputTextModule} from 'primeng/inputtext';
import {MessageModule} from 'primeng/message';
import {MessageService} from 'primeng/api';

// My Components
import {TooltipModule} from 'primeng/tooltip';
import {DialogModule} from 'primeng/dialog';
import { AuthorityRouting } from './authority.routing';
import { AuthorityComponent } from './authority.component';


@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        InputTextModule,
        RouterModule.forChild(AuthorityRouting),
        ButtonModule,
        MessagesModule,
        MessageModule,
        TooltipModule,
        DialogModule,
    ],

    declarations: [AuthorityComponent],
    providers: [MessageService],
})
export class AuthorityModule {
}
