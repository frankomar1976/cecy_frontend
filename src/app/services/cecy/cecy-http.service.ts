import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {Router} from '@angular/router';
import {environment, WEB} from '../../../environments/environment';;
import {MessageService} from '../app/message.service';



@Injectable({
    providedIn: 'root'
})

export class CecyHttpService {
    API_URL_CECY: string = environment.API_URL_CECY;

    private headers: HttpHeaders;

    constructor(private httpClient: HttpClient,
                private router: Router,
                private messageService: MessageService) {
    }


    get(url: string, params = new HttpParams()) {
        url = environment.API_URL_CECY + url;
        return this.httpClient.get(url, {headers: this.headers});
    }

    post(url: string, data: any, params = new HttpParams()) {
        url = environment.API_URL_CECY + url;
        return this.httpClient.post(url, data, {params});
    }

    update(url: string, data: any, params = new HttpParams()) {
        url = environment.API_URL_CECY + url;
        return this.httpClient.put(url, data, {params});
    }

    delete(url: string, data: any, params = new HttpParams()) {
        url = environment.API_URL_CECY + url;
        return this.httpClient.put(url, data, {params});
    }

}
