import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class RestapiServiceProvider {

  data : any;
  customerdata = [];
  proxyUrl = 'https://cors-anywhere.herokuapp.com/'
  apiUrl = 'https://3hkaob4gkc.execute-api.us-east-1.amazonaws.com/prod/au-hackathon/accounts';
  customerUrl = 'https://3hkaob4gkc.execute-api.us-east-1.amazonaws.com/prod/au-hackathon/customers';

  headers = new Headers({
    'Content-Type': 'application/json'
  });

  body : any = {"account_id" : 100700000}
  categories : string[] = new Array() as Array<string>

  constructor(public http: Http) {
    console.log('Hello RestapiServiceProvider Provider');
    this.initCategories()
    this.getData()
    setTimeout(() => 
    {
      this.getCustomers();
    },
    5000);

  }

  getData() {
  if (this.data) {
    return Promise.resolve(this.data).then(data => console.log('Got the data!'));
  }

    return new Promise(resolve => {
      this.http.post(this.proxyUrl + this.apiUrl, JSON.stringify(this.body),this.headers)
        .map(res => res.json())
        .subscribe(data => {
          this.data = data;
          resolve(this.data);
        });
    });
  }

  getCustomers() {
     console.log('called getCustomers');

     for (var i = 0; i < this.data[0].authorized_users.length; i++){
       console.log(this.data[0].authorized_users[i].customer_id);
       this.getCustomer(this.data[0].authorized_users[i].customer_id);
     }
  }

  getCustomer(cuid) {
     console.log('called getCustomer with cuid', cuid);
    this.body = {"customer_id" : cuid}

    return new Promise(resolve => {
      this.http.post(this.proxyUrl + this.customerUrl, JSON.stringify(this.body),this.headers)
        .map(res => res.json())
        .subscribe(data => {
          console.log('inside response', data);
          this.customerdata.push(data);
          resolve(this.customerdata);
        });
    });
  }

  returnData(){
    return this.data;
  }

  returncustomerData(){
    return this.customerdata;
  }

  initCategories(){
    this.categories.push('Transportation')
    this.categories.push('Food')
    this.categories.push('Housing')
    this.categories.push('Entertainment')
    this.categories.push('Other')
  }
  getCategories(){
    return this.categories
  }
}
