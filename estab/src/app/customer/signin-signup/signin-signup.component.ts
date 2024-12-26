import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import {FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators} from '@angular/forms';
import { user } from '../../core/interceptors/model/object-model';
import { LoginSignupService } from '../../shared/services/login-signup.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { error } from 'node:console';



@Component({
  selector: 'app-signin-signup',
  imports: [RouterLink,CommonModule,HttpClientModule,ReactiveFormsModule,FormsModule],
  templateUrl: './signin-signup.component.html',
  styleUrl: './signin-signup.component.scss'
})
export class SigninSignupComponent {

  regForm:boolean=false;
  signUpForm!:FormGroup;
  signIn!:FormGroup;
   

  signupSubmited:boolean=false;
  herf:string='';
  userData:any;
  userDto!:user;
  userRegData:any;
  signinforminput:any={};


  constructor( private formBuilder:FormBuilder,private router:Router,private login:LoginSignupService){

  }
  ngOnInit():void{
      this.herf=this.router.url
      if(this.herf=='/sign-up')
      {
        this.regForm=true

      }else if (this.herf=='/sign-in') {
        this.regForm=false
      }


    this.signUpForm= this.formBuilder.group({
      name:['',Validators.required],
      age:['',Validators.required],
      dob:['',Validators.required],
      email:['',Validators.required],

    
    })
  }

     get rf(){
      return this,this.signUpForm.controls;
     }

     onSubmitSignUp(){
      this.signupSubmited= true
      if(this.signUpForm.invalid)
         {
          return

         } this.userRegData=this.signUpForm.value

     }
    


     onSubmitSignin(){
      this.login.adminLogin(this.signinforminput.userEmail,this.signinforminput.userPassword).subscribe(data=>{
        this.userData=data;
        if(this.userData.length==1){
          if (this.userData[0].role=='seller'){
            sessionStorage.setItem("user_session_id",this.userData[0].id)
            sessionStorage.setItem("role",this.userData[0].role)
            this.router.navigateByUrl('/seller-dashboard')
          }else if(this.userData[0].role=='buyer'){
            sessionStorage.setItem("user_session_id",this.userData[0].id)
            sessionStorage.setItem("role",this.userData[0].role)
            this.router.navigateByUrl('/buyer-dashboard')
        }else
        alert("invalid login details")
      }else {
        alert("invalid")
      }
      console.log(this.userData)
      },error=>{
        console.log("my error",error)
      })
     }

  }




