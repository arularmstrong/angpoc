import { Component, OnInit } from '@angular/core';
import { ApiService } from  '../api.service';
@Component({
  selector: 'app-account-list',
  templateUrl: './account-list.component.html',
  styleUrls: ['./account-list.component.css']
})
export class AccountListComponent implements OnInit {
  private  accounts:  object = {};
  constructor(private  apiService:  ApiService) { }

  ngOnInit() {
    this.getAccounts();
}
public  getAccounts(){
  this.apiService.getAccounts().subscribe((data:  object) => {
      this.accounts  =  data;
      console.log(data);
  });
}

public createAccount(){

  var  contact  = {
      name:  "armstronng"
      
  };
  this.apiService.createAccount(contact).subscribe((response) => {
      console.log(response);
  });
  };

}
