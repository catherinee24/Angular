import { Component, OnInit } from '@angular/core';
import { requestService } from '../services/request.service';

@Component({
    selector: 'app-external',
    templateUrl: './external.component.html',
    styleUrls: ['./external.component.css'],
    providers: [requestService],
})
export class ExternalComponent implements OnInit {
    public user: any;
    public userId: any;
    public date: any;
    public new_users: any;
    public user_saved: any;

    constructor(private _requestService: requestService) {
        this.userId = 1;
        this.new_users = {
            name: '',
            job: '',
        };
    }

    ngOnInit() {
        this.date = new Date();
        this.loadUser();
    }

    loadUser() {
        this.user = false;
        this._requestService.getUser(this.userId).subscribe(
            // esto es para recoger el resultado de la peticion
            (result) => {
                this.user = result.data;
            },
            // esto para recoger el posible error de la peticion
            (error) => {
                console.log(<any>error);
            }
        );
    }

    onSubmit(form: any) {
        this._requestService.addUser(this.new_users).subscribe(
            (response) => {
                this.user_saved = response;
                form.reset();
            },
            (error) => {
                console.log(<any>error);
            }
        );
    }
}
