import {Component, OnInit} from '@angular/core';
import {DynamicDialogConfirm} from "../../entities/dynamic-dialog-confirm";

@Component({
  selector: 'display-dialog-confirm',
  templateUrl: './dialog-confirm.component.html',
  styleUrl: './dialog-confirm.component.css'
})
export class DialogConfirmComponent implements OnInit {

  protected visible!: boolean ;
  protected cancelAble!: boolean ;
  protected dynamicDialogConfirm! :DynamicDialogConfirm

  ngOnInit(): void {
    this.visible = true;
    this.cancelAble = true;
    /*this.dynamicDialogConfirm = {
      dialogTitle : 'Warning Dialog',
      content : 'Primary Key maybe exist',
      type : 'warning'
    }*/

    /*this.dynamicDialogConfirm = {
      dialogTitle : 'Confirm Dialog',
      content : 'Are you want to delete?',
      type : 'confirm'
    }*/
    this.dynamicDialogConfirm = {
      dialogTitle : 'Error Dialog',
      content : 'Create failed',
      type : 'error'
    }
  }

  protected setOkEventDialogConfirm() {
    console.log('get ok')
    this.visible = false
  }

  protected setCloseEventDialogConfirm() {
    console.log('get close')
    this.visible = false
  }

  protected setCancelEventDialogConfirm() {
    console.log('get cancel')
    this.visible = false
  }

}
