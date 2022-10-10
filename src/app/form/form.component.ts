import { Component, OnInit } from '@angular/core';
import { contactUser } from '../model/contactUser';

@Component({
    selector: 'app-form',
    templateUrl: './form.component.html',
    styleUrls: ['./form.component.css'],
})
export class FormComponent implements OnInit {
    public user: contactUser;

    constructor() {
        this.user = new contactUser('', '', '', '');
    }

    ngOnInit(): void {}

    onSubmit() {
        console.log('evento submit lanzado');
        console.log(this.user);
    }
}
