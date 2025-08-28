import {Component, OnInit} from '@angular/core';
import {DynamicValidationForm} from "../../entities/dynamic-validation-form";
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'display-dialog-form',
  templateUrl: './dialog-form.component.html',
  styleUrl: './dialog-form.component.css'
})
export class DialogFormComponent implements OnInit {

  protected visible!: boolean ;
  protected cancelAble!: boolean ;
  protected dialogTitle!: string ;
  protected dynamicValidationsForm!: DynamicValidationForm[];
  protected formGroup!: FormGroup;

  protected resultFormGroup!:string;
  protected displayResultFormGroup = false;

  ngOnInit(): void {
    this.visible = true;
    this.cancelAble = true;
    this.dialogTitle = 'Dialog Form'
    this.formGroup = new FormGroup({})
    this.dynamicValidationsForm = []
    const usernameFieldAsText: DynamicValidationForm = {
      id: 'username',
      label: 'Username : ',
      type: 'text',
      formControlName: 'username',
      formControl: new FormControl(null, Validators.required),
      invalidMessage: '* Invalid username',
      placeholder: 'Ex, Alex,Kevin,...',
      isInputText: true,
    }

    const emailFieldAsEmail: DynamicValidationForm = {
      id: 'email',
      label: 'Email : ',
      type: 'email',
      formControlName: 'email',
      formControl: new FormControl(null, Validators.required),
      invalidMessage: '* Invalid email',
      placeholder: 'Ex, Alex@hotmail.com,Kevin@outlook.com,...',
      isInputText: true,
      // isReadOnly:true
    }

    const passwordFieldAsPassword: DynamicValidationForm = {
      id: 'password',
      label: 'Password : ',
      type: 'password',
      formControlName: 'password',
      formControl: new FormControl(null, Validators.required),
      invalidMessage: '* Invalid password',
      placeholder: null,
      isInputText: true,
    }

    const ageFieldAsNumber: DynamicValidationForm = {
      id: 'age',
      label: 'Age : ',
      type: 'number',
      formControlName: 'age',
      formControl: new FormControl(18, [Validators.required, Validators.maxLength(3)]),
      invalidMessage: '* Invalid age',
      placeholder: null,
      isInputText: false,
      isInputNumber: { step:1 },
    }

    const gradeFieldAsNumber: DynamicValidationForm = {
      id: 'grade',
      label: 'Grade : ',
      type: 'number',
      formControlName: 'grade',
      formControl: new FormControl(3.5, [Validators.required, Validators.maxLength(4)]),
      invalidMessage: '* Invalid grade',
      placeholder: null,
      isInputText: false,
      isInputNumber: { step: 0.1 } ,
    }

    const citiesFieldAsDropdown: DynamicValidationForm = {
      id: 'city',
      label: 'City : ',
      type: null,
      formControlName: 'city',
      formControl: new FormControl('0', [Validators.required]), // '0' is mean {value:'0',label:'Select One'} for default
      invalidMessage: '* Invalid city',
      placeholder: null,
      isInputText: false,
      isDropdown: {
        options : [
          {value:'0',label:'Select One'},
          {value:'1',label:'Bangkok'},
          {value:'2',label:'Chiang Mai'},
          {value:'3',label:'Phuket'},
        ]
      } ,
    }

    const statusFieldAsRadio: DynamicValidationForm = {
      id: 'status',
      label: 'Status : ',
      type: 'radio',
      formControlName: 'status',
      formControl: new FormControl(null, [Validators.required]), // '0' is mean {value:'0',label:'Select One'} for default
      invalidMessage: '* Invalid status',
      placeholder: null,
      isInputText: false,
      isRadio: {
        options : [
          {value:'A',label:'Active',id:'radio-a'},
          {value:'IA',label:'Inactive',id:'radio-ia'},
        ]
      } ,
    }

    const acceptFieldAsCheckbox: DynamicValidationForm = {
      id: 'accept',
      label: 'Accept the rule : ',
      type: 'checkbox',
      formControlName: 'accept',
      formControl: new FormControl(null, [Validators.required]),
      invalidMessage: '* Invalid accept',
      placeholder: null,
      isInputText: false,
      isCheckbox: { validate : true} ,
    }

    const saveFieldAsCheckbox: DynamicValidationForm = {
      id: 'save',
      label: 'Save the password : ',
      type: 'checkbox',
      formControlName: 'save',
      formControl: new FormControl(false),
      invalidMessage: null,
      placeholder: null,
      isInputText: false,
      isCheckbox: { validate : false} ,
    }

    const dateFieldAsDate: DynamicValidationForm = {
      id: 'birthday',
      label: 'Birthday : ',
      type: 'date',
      formControlName: 'birthday',
      formControl: new FormControl(null, [Validators.required]), // '0' is mean {value:'0',label:'Select One'} for default
      invalidMessage: '* Invalid birthday',
      placeholder: null,
      isInputText: false,
      isDate:true ,
    }

    this.dynamicValidationsForm.push(usernameFieldAsText) // type text
    this.dynamicValidationsForm.push(emailFieldAsEmail) // type email
    this.dynamicValidationsForm.push(passwordFieldAsPassword) // type password
    this.dynamicValidationsForm.push(ageFieldAsNumber) // type number as integer
    this.dynamicValidationsForm.push(gradeFieldAsNumber) // type grade as decimal
    this.dynamicValidationsForm.push(citiesFieldAsDropdown) // as dropdown
    this.dynamicValidationsForm.push(statusFieldAsRadio) // as radio
    this.dynamicValidationsForm.push(acceptFieldAsCheckbox) // as checkbox
    this.dynamicValidationsForm.push(saveFieldAsCheckbox) // as checkbox
    this.dynamicValidationsForm.push(dateFieldAsDate) // as date
  }

  protected setInitialFormGroup($event: FormGroup) {
    this.formGroup = $event;
  }

  protected setSubmitEventFormGroup() {
    console.log('get submit')
    if (this.formGroup.valid) {
      this.displayResultFormGroup = true
      const values = this.formGroup.value
      this.resultFormGroup = `
      username : ${values['username']} ,
      email : ${values['email']} ,
      password : ${values['password']} ,
      age : ${values['age']} ,
      grade : ${values['grade']} ,
      city : ${values['city']} ,
      status : ${values['status']} ,
      accept : ${values['accept']} ,
      save : ${values['save']} ,
      birthday : ${values['birthday']} ,
      `
    }
  }

  protected setClearEventFormGroup() {
    console.log('get clear')
    this.formGroup.reset()
  }

  protected setCancelEventDialogConfirm() {
    console.log('get cancel')
    this.visible = false
  }

}
