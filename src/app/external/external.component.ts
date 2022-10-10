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

    constructor(private _requestService: requestService) {
        this.userId = 1;
    }

    ngOnInit() {
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
}
