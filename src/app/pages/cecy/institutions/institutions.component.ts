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
import { Position } from '@angular/compiler';


@Component({
    selector: 'app-institutions',
    templateUrl: './institutions.component.html',
    styleUrls: ['./institutions.component.scss']
})

export class InstitutionsComponent implements OnInit {


    constructor( public messageService: MessageService,
                 private spinnerService: NgxSpinnerService,
                 private formBuilder: FormBuilder,
                 private cecyHttpService: CecyHttpService,)
        {
        this.createForm();
        this.cargarData();
        this.getIdsCatalogue();
        this.getusuarios();
        }

    formulario: FormGroup;
    autoridad: any;
    position = []; 
    status = [];
    authorities = [];


    ngOnInit(): void {

    }

    get functionsField(){
        return this.formulario.get('functions')as FormArray;
    }
    get startDateField(){
        return this.formulario.get('start_date');
    }
    get endDateField(){
        return this.formulario.get('end_date'); 
    }
    get userField(){
        return this.formulario.get('user');
    }
    get positionField(){
        return this.formulario.get('position');
    }
    get statusField(){
        return this.formulario.get('status');
    }

    cargarData(){

        this.formulario.reset({
            position: this.formulario.value.position ,
            status: this.formulario.value.status,
           start_date: this.formulario.value.start_date.slice(0, 10)   ,
           end_date: this.formulario.value.end_date
        });
        [''].forEach((valor) => {
            this.functions.push(this.formBuilder.control(valor));
        });
    }

    get functions(){
        return (this.formulario.get('functions') as FormArray)
    }

    createForm(){
        this.formulario = this.formBuilder.group({
            functions: this.formBuilder.array([
            ]),
            user: ['' , [Validators.required]],
            position: ['', [Validators.required]],
            status: ['' , [Validators.required]],
            start_date: ['' , [Validators.required]],
            end_date: ['' , [Validators.required]],

        });
    }

    guardar(){
        console.log(this.formulario.value);
        this.cecyHttpService.createAuthority({
            "authority" : {
               "functions" : this.formulario.value.functions,
                "start_date": this.formulario.value.start_date.slice(0, 10),
                "end_date": this.formulario.value.end_date
              },
             "user":{
                 "id": this.autoridad.id
                 },
             "position": {
                 "id": this.formulario.value.position[0].id
             },
             "status":{
                 "id": this.formulario.value.status[0].id
             }
         }).subscribe(response => console.log(response));
    }

    getIdsCatalogue(){
        this.cecyHttpService.getIdsCatalogue().subscribe((data: any) => {
            this.status = data.status;
            this.position = data.position;
        });

    }

    getusuarios(){
        this.cecyHttpService.getusuarios().subscribe((data: any) => {
            this.authorities = data.data;
        });
    }

}
