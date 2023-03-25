import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterComponent } from './register/register.component';
import { LoginpageComponent } from './loginpage/loginpage.component';



@NgModule({
  declarations: [
    RegisterComponent,
    LoginpageComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[RegisterComponent,
    LoginpageComponent
  ]
})
export class LoginModule { }
