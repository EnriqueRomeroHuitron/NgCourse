import { Component } from "@angular/core";


@Component({
    selector : 'app-college',
    templateUrl : './college.component.html',
    styleUrls : ['./college.component.css']
})

export class CollegeComponent {

    serverName : any = "Production Server";
    collegeName : string = "MCIT College";
    courseName : string = "Full Stack Developer";
    year : number = 2023;

    flag : boolean = false;
    empname : string = "Place holder";

    uname: string = "temp";
    pwd :any = 123;

    actualname : string = "MCIT";
    actualpwd : any = "temp123";

    userNameInput : string = "";
    pswNameInput : string = "";
   

    onClick(){
        console.log("Button Click event executed from typescript ");

        // if(this.flag){ // button is already disabled
        //     this.flag = false // Enable it
        // }else{ // If the button is enalbed
        //     this.flag = true; // Disable it
        // }


        if(this.flag){
            this.flag = false;
            console.log("The button is "+this.flag+", so the button is enabled");
        }else{
            this.flag = true;
            console.log("The button is "+this.flag+", so the button is disabled");
        }

        // this.flag = !this.flag;

    }

    onLogIn(){
        console.log("Entered user name is: "+this.uname+ " and the password is: "+this.pwd);
    }
   
    onClear(){
        this.uname = '';
        this.pwd = '';
    }

    onActLogIn(){

        if(this.actualname == this.userNameInput && this.actualpwd == this.pswNameInput){
            console.log("Succeded");
        }else{
            console.log("No matched");
        }
    }


    

}