import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  registerForm = this.fb.group({
    document: ['', Validators.required],
    password: ['', Validators.required],
    documentType: [1, Validators.required]
  });
  isSubmitted = false
  documentTypes = [
    {id:1, title: 'DNI'},
    {id:2, title: 'LC'},
    {id:3, title: 'LE'}
  ]

  constructor(private authService: AuthService, 
    private fb: FormBuilder) {}

  submitForm() {
    if (this.registerForm.invalid) {
      return;
    }

    this.authService
      .login(this.registerForm.value.document, this.registerForm.value.password, this.registerForm.value.documentType)
    
  }

}
