import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  

  constructor(private authService: AuthService) {}

  formTitle = 'Login';
  formButton = { type: 'submit', text: 'Ingresar'}
  formItems = [
    {label: 'Tipo de documento', type: 'select', control: 'documentType', dropElements: ['DNI', 'LC', 'LE']},
    {label: 'Número de documento', type: 'text', control: 'document', error: 'Ingresar documento'},
    {label: 'Password', type: 'password', control: 'password', error: 'Ingresar password'}
  ]

  submitForm(event) {
    console.log(event)
    this.authService
      .login(event.document, event.password, event.documentType)
    
  }

}
