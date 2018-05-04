import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-contact-form',
    templateUrl: './contact-form.component.html',
    styleUrls: ['./contact-form.component.scss']
})
export class ContactFormComponent implements OnInit {

    constructor() {
    }

    ngOnInit() {
    }

    onSave(e) {
        e.preventDefault();
        alert('Save contact');
    }

    onClose(e) {
        e.preventDefault();
        alert('Close contact');
    }

    onDelete(e) {
        e.preventDefault();
        alert('Delete Contact');
    }
}
