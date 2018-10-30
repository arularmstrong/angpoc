import { Injectable } from '@angular/core';
import { HttpClient} from  '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  API_URL  =  'http://localhost:8000';
  constructor(private  httpClient:  HttpClient) { }
  getAccounts(){
    return  this.httpClient.get(`${this.API_URL}/accounts`);
}
createAccount(account){
  return  this.httpClient.post(`${this.API_URL}/accounts/`,account);
}

}


  