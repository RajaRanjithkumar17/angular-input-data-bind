import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
@Input() data:any;
ngOnInit(){
  console.log(this.data);
  
}
}
