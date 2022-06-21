import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

// import { forgotpass } from "src/Models/forgotpass";


@Injectable({providedIn:"root"})
export class forgotpassService{
    constructor(private http:HttpClient){

    }
    

    PostDetails(email:string) {
        debugger;
        return this.http.get("http://localhost:6073/api/Forgot/forgotpassword?email="+email,{responseType:"text"});
    }
    
}