import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {CecyRouting} from './cecy.routing';

// PrimeNG Modules
import {ButtonModule} from 'primeng/button';
import {MessagesModule} from 'primeng/messages';
import {InputTextModule} from 'primeng/inputtext';
import {MessageModule} from 'primeng/message';
import {MessageService} from 'primeng/api';

// My Components
import {CecyComponent} from './cecy.component';
import {TooltipModule} from 'primeng/tooltip';
import {DialogModule} from 'primeng/dialog';

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(CecyRouting),
        FormsModule,
        ReactiveFormsModule,
        InputTextModule,
        ButtonModule,
        MessagesModule,
        MessageModule,
        TooltipModule,
        DialogModule,
    ],
    declarations: [CecyComponent],
    providers: [MessageService]
})

export class CecyModule {

}

