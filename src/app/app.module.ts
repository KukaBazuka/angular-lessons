import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';


import {AppComponent} from './app.component';
import {SidebarComponent} from './sidebar/sidebar.component';
import {ContactsGridComponent} from './contacts-grid/contacts-grid.component';
import {ContactFormComponent} from './contact-form/contact-form.component';
import {ContactFullViewComponent} from './contact-full-view/contact-full-view.component';
import {UserStatusWidgetComponent} from './user-status-widget/user-status-widget.component';


@NgModule({
    declarations: [
        AppComponent,
        SidebarComponent,
        ContactsGridComponent,
        ContactFormComponent,
        ContactFullViewComponent,
        UserStatusWidgetComponent
    ],
    imports: [
        BrowserModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
