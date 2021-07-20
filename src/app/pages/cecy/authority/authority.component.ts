import {Component, OnInit} from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';
import {Message} from 'primeng/api';
import {NgxSpinnerService} from 'ngx-spinner';
import { HttpClient, HttpParams } from '@angular/common/http';
import { MessageService } from '../../shared/message.service';
import { Paginator } from '../../../models/setting/paginator';
import { Authority } from 'src/app/models/cecy/authority';
import { CecyHttpService } from 'src/app/services/cecy/cecy-http.service';
import { Catalogue } from '../../../models/app/catalogue';
import { User } from '../../../models/auth/user';



@Component({
    selector: 'app-authority',
    templateUrl: './authority.component.html',
    styleUrls: ['./authority.component.scss']
})

export class AuthorityComponent implements OnInit {

    flagAuthorities: boolean;
    flagAuthority: boolean;
    path?: string;
    authorities: Authorities[];
    formAuthority: FormGroup;
    STORAGE_URL: string;
    msgs: Message[];
    paginator: Paginator;

    constructor( public messageService: MessageService,
                 private spinnerService: NgxSpinnerService,
                 private formBuilder: FormBuilder,
                 private cecyHttpService: CecyHttpService,
        )
    {
        this.paginator = {current_page: 1, per_page: 2};
        this.authorities = [];
    }

    resetPaginator(){

    }

    ngOnInit(): void {
        this.buildFormAuthority();
        this.getAuthorities(this.paginator);
        this.getAuthorities();
    }


    // authoriries del backend

    getAuthority(){
         // this.flagFormAuthority = true;
        this.cecyHttpService.get(authorities).subscribe(response =>{
          // this.flagFormAuthority = false;
            this.formAuthority.patchValue(response['data']);

        }, error => {
            // this.flagFormAuthority = false;
            this.messageService.error(error);
        });
    }

    /* getAuthorities(paginator: Paginator){
        const params = new HttpParams()
        .append('page', paginator.current_page.toString())
        .append('per_page', paginator.per_page.toString());

        this.flagAuthorities = true;
        this.cecyHttpService.get('authorities', params).subscribe(
            response => {
                this.flagAuthorities = false;
                this.authorities = response['data'];
                this.paginator = response as Paginator;
                console.log(response); */
                /*this.messageService.success(response); en get no va */
           /*  }, error => {
                this.flagAuthorities = false;
                this.messageService.error(error);
            });
    } */

    // formulario de Authority
    buildFormAuthority(){
        this.formAuthority = this.formBuilder.group({
            functions: this.formBuilder.array([
                this.formBuilder.control(null, [Validators.required])
            ]),
            start_date: [null, [Validators.required]],
            end_date: [null, [Validators.required]],
            user: [null, [Validators.required]],
            position: [null, [Validators.required]],
            status: [null, [Validators.required]]
        });
      // console.log(this.formAuthority['']['']);
    }


}
