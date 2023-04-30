// import { HttpClient } from '@angular/common/http';
// import { Injectable } from '@angular/core';
// import { environment } from 'src/environments/environment';
// import { AuthResponse } from './authResponse';

// @Injectable({
//     providedIn: 'root'

// })
// export class AuthService {
//     baseurl:string = "https://identitytoolkit.googleapis.com/v1/accounts";
//     signInEndpoint:string ="signInWithCustomToken"; 
//     signUpEndpoint:string ="signUp";
    
//     public signup(email: string, password: string) {
//         const requestBody: any = {
//             "email": email,
//             "password":password,
//             "returnSecureToken": true,
//         }

//        return this.http.post<AuthResponse>(this.baseurl + ';' + this.signUpEndpoint, +'?' +'key=' + environment.firebase.apiKey, requestBody);
//     }
//     public signin(email: string, password: string) {
       
//     }
//     constructor(private http:HttpClient) { 

//     }
//     ngOnInit() {
//     }

//     // https://identitytoolkit.googleapis.com/v1/accounts:signInWithCustomToken?key=[API_KEY]
//     // https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=[API_KEY]
// }
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";
import { AuthResponse } from "./authResponse";

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    baseUrl: string = "https://identitytoolkit.googleapis.com/v1/accounts"
    signUpEndpoint: string = "signUp"
    signInEndpoint: string = "signInWithPassword"

    public constructor(private http: HttpClient) {

    }
    public signup(email: string, password: string) {
        const requestBody = {
            "email": email,
            "password": password,
            "returnSecureToken": true

        };
        return this.http.post<AuthResponse>(this.baseUrl + ':' + this.signUpEndpoint 
        + '?' + 'key=' + environment.firebase.apiKey, requestBody);
    }

    public login(email: string, password: string) {
        const requestBody = {
            "email": email,
            "password": password,
            "returnSecureToken": true
        }

        return this.http.post<AuthResponse>(this.baseUrl + ':' + this.signInEndpoint + '?' 
        + 'key=' + environment.firebase.apiKey, requestBody);
    }
}