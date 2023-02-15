import { Component } from '@angular/core';

@Component({
  selector: 'app-marketing',
  templateUrl: './marketing.component.html',
  styleUrls: ['./marketing.component.css']
})

export class MarketingComponent {

    fname : string = "Enrique";
    lname : string = "Romero";

    flag : boolean = false;

    username : string = "Enrique";
    password : any = "Temp123";


  onClick(){
 
        this.flag = !this.flag;

    }

      validateLogin() {
        if (this.username == 'Enrique' && this.password == 'Temp123') {
          alert('Successful');
        } else {
          alert('Access denied');
        }
      }

}
