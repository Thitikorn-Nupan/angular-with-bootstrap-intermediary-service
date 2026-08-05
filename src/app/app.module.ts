import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {DynamicValidationFormComponent} from './components/dynamic-validation-form/dynamic-validation-form.component';
import {ValidationFormComponent} from './displays/validation-form/validation-form.component';
import {DynamicTreeTableComponent} from './components/dynamic-table/dynamic-tree-table.component';
import {TreeTableComponent} from './displays/tree-table/tree-table.component';
import {DynamicDialogConfirmComponent} from './components/dynamic-dialog-confirm/dynamic-dialog-confirm.component';
import {DialogConfirmComponent} from './displays/dialog-confirm/dialog-confirm.component';
import {DynamicDialogFormComponent} from './components/dynamic-dialog-form/dynamic-dialog-form.component';
import {DialogFormComponent} from './displays/dialog-form/dialog-form.component';

@NgModule({
  declarations: [
    AppComponent,
    DynamicValidationFormComponent,
    ValidationFormComponent,
    DynamicTreeTableComponent,
    TreeTableComponent,
    DynamicDialogConfirmComponent,
    DialogConfirmComponent,
    DynamicDialogFormComponent,
    DialogFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
