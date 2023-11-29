import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {

  constructor( private fb: FormBuilder){}

  @Input() title = ''
  @Input() button: any = {}
  @Input() formItems: any = []
  @Output() formItemsSelected = new EventEmitter<any>();
  registerForm = this.fb.group({});
  isSubmitted = false

  ngOnInit() {
    this.formItems.forEach(element => {
      this.registerForm.addControl(element.control, new FormControl('', [Validators.required]))
    });
  }
  

  submitForm() {
    if (this.registerForm.invalid) {
      this.isSubmitted = true
      return;
    }
    let items = {}
    this.formItems.forEach(element => {
      Object.assign(items, {[element.control]: this.registerForm.get(element.control).value})
    })
    this.formItemsSelected.emit(items)
  }

}
