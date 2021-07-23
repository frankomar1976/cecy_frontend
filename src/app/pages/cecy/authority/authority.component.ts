import {Component, OnInit} from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';
import {Message} from 'primeng/api';
import {NgxSpinnerService} from 'ngx-spinner';
import { HttpClient, HttpParams } from '@angular/common/http';
import { MessageService as mes } from '../../shared/message.service';
import { Paginator } from '../../../models/setting/paginator';
import { Authority } from 'src/app/models/cecy/authority';
import { CecyHttpService } from 'src/app/services/cecy/cecy-http.service';
import { Catalogue } from '../../../models/app/catalogue';
import { User } from '../../../models/auth/user';
import { identifierModuleUrl, Position } from '@angular/compiler';
import {MessageService} from 'primeng/api'



@Component({
    selector: 'app-authority',
    templateUrl: './authority.component.html',
    styleUrls: ['./authority.component.scss']
})

export class AuthorityComponent implements OnInit {


    constructor( public messageService: MessageService,
                 private spinnerService: NgxSpinnerService,
                 private formBuilder: FormBuilder,
                 private cecyHttpService: CecyHttpService,)
        {
            this.funciones();
        }

        funciones(){
            this.createForm();
             this.cargarData();
             this.getIdsCatalogue();
             this.getusuarios();
             this.getAutoridades();
        }

    formulario: FormGroup;
    autoridad: any;
    position = []; 
    status = [];
    authorities = [];
    usuarios = [];
    usuario: any;
    cambio = true;
    editar = false;
    crear = false;
    valor : String;
    nombre : String;
    idborrado = 0;
    borrar = false;
 

    ngOnInit(): void {

    }

    crea(){
        this.cambio = !this.cambio;
        this.valor = "";        
            this.crear = !this.crear;
            this.valor = "Crear";
            this.funciones();
                    
    }

    edit(data: any){        
        this.cambio = !this.cambio;
        this.valor = "";
        
            this.editar = !this.editar;
            this.valor = "Editar";
            this.funciones();
            this.nombre = data.user.partial_name;
            this.formulario.value.user = data.user.id;
            this.formulario.value.functions = data.functions;
            this.formulario.value.status = data.status;
            this.formulario.value.start_date = data.start_date;
            this.formulario.value.end_date = data.end_date;
            this.cargarData();
        
    }

    cancelar(){
        this.cambio = !this.cambio;
        this.valor = "";
        this.editar = false;
        this.crear = false;
    }

       cargarData(){
        this.formulario.reset({
            position: this.formulario.value.position ,
            status: this.formulario.value.status,
           start_date: this.formulario.value.start_date,
           end_date: this.formulario.value.end_date
        });
        if(this.formulario.value.functions.length < 1){
            [''].forEach((valor) => {
                this.functions.push(this.formBuilder.control(valor));
            });
        }
        
    }

    get functions(){
        return (this.formulario.get('functions') as FormArray)
    }

    get estados(){
        return (this.formulario.get('status').invalid && this.formulario.get('status').touched);
    }
    get posiciones(){
        return (this.formulario.get('position').invalid && this.formulario.get('position').touched);
    }
    get start_date(){
        return (this.formulario.get('start_date').invalid && this.formulario.get('satrt_date').touched);
    }
    get end_date(){
        return (this.formulario.get('end_date').invalid && this.formulario.get('end_date').touched);
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

        let diai = this.formulario.value.start_date.getDate();
        let monthi = this.formulario.value.start_date.getMonth() + 1; // add 1 
        let yeari = this.formulario.value.start_date.getFullYear();
        let fechai = diai + '/'+monthi+'/' + yeari;

        let diaf = this.formulario.value.start_date.getDate();
        let monthf = this.formulario.value.start_date.getMonth() + 1; // add 1 
        let yearf = this.formulario.value.start_date.getFullYear();
        let fechaf = diaf + '/' + monthf + '/' + yearf;
        if(this.formulario.value.start_date == null &&
             this.formulario.value.end_date == null && 
             this.formulario.value.functions == null && 
             this.formulario.value.position == null && 
             this.formulario.value.status == null){
            return Object.values(this.formulario.controls).forEach((control) => {
                if (control instanceof FormGroup) {
                  Object.values(control.controls).forEach((control) =>
                    control.markAsTouched()
                  );
                } else {
                  control.markAsTouched();
                }
              });
        }else{
            this.cecyHttpService.createAuthority({
                "authority" : {
                   "functions" : this.formulario.value.functions,
                    "start_date": fechai,
                    "end_date": fechaf
                  },
                 "user":{
                     "id": this.usuario.id
                     },
                 "position": {
                     "id": this.formulario.value.position.id
                 },
                 "status":{
                     "id": this.formulario.value.status.id
                 }
             }).subscribe(response => console.log(response));
             this.messageService.clear('c');
             this.cancelar();
        }

    }

    getIdsCatalogue(){
        this.cecyHttpService.getIdsCatalogue().subscribe((data: any) => {
            this.status = data.status;
            this.position = data.position;
        });

    }

    getusuarios(){
        this.cecyHttpService.getusuarios().subscribe((data: any) => {
            this.usuarios = data.data;
        });
    }

    getAutoridades(){
        this.cecyHttpService.getAutoridades().subscribe((data: any) =>{
            this.authorities = data.data.attributes;
        });
    }



    showConfirm() {
       
        
    }

    onReject() {
        
        this.messageService.clear('c');
        
    }

    showDelete(data: any) {
        this.borrar = !this.borrar;
        this.idborrado = data.id;
        this.messageService.clear();
        this.messageService.add({key: 'c', sticky: true, severity:'warn', summary:'Estas seguro?', detail:'Confirmar el proceso'});        
    }

    borrarAutoridad(){
        this.cecyHttpService.borrarAuthority( {"ids": this.idborrado}).subscribe(data =>{
            
        });
        this.borrar = false;
        console.log(this.idborrado);
        console.log('aquie estapapapapapapa****');
        this.idborrado = 0;
        this.messageService.clear('c');
        this.funciones();
    }
}
