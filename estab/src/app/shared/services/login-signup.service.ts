import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from '../../core/service/api.service';

@Injectable({
  providedIn: 'root'
})
export class LoginSignupService {

   public login_url="http://localhost:3000"
   public reg_url="http://localhost:3000"
   

  constructor(
    private http:HttpClient,private apiservice:ApiService
  ) { }
  authLogin(user_name:any,password:any):Observable<any>{
    return this.apiservice.get(this.login_url +'/user?email='+user_name + '&password='+password)
  }


   userRegi(user_di:any):Observable<any>{
    return this.apiservice.post(this.reg_url+'user',user_di)
   }

   adminLogin(user_name:any,password:any):Observable<any>{
    return this.apiservice.get(this.login_url +'/user?email='+user_name + '&password='+password +'&role=admin')
  }

}
