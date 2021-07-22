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
import {DropdownModule} from 'primeng/dropdown';
import {CalendarModule} from 'primeng/calendar';
import {TableModule} from 'primeng/table';

// My Components
import {TooltipModule} from 'primeng/tooltip';
import {DialogModule} from 'primeng/dialog';
import { InstitutionsRouting } from './institutions.routing';
import { InstitutionsComponent } from './institutions.component';
// import { AuthorityFormComponent } from './authority-form/authority-form.component';


@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        InputTextModule,
        RouterModule.forChild(InstitutionsRouting),
        ButtonModule,
        MessagesModule,
        MessageModule,
        TooltipModule,
        DialogModule,
        DropdownModule,
        CalendarModule,
        TableModule,
    ],

    declarations: [InstitutionsComponent, InstitutionsFormComponent],
    providers: [MessageService],
})
export class InstitutionsModule {
}
