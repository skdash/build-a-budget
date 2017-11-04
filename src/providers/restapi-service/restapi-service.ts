import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class RestapiServiceProvider {

  data : any;
  proxyUrl = 'https://cors-anywhere.herokuapp.com/'
  apiUrl = 'https://3hkaob4gkc.execute-api.us-east-1.amazonaws.com/prod/au-hackathon/customers';

  headers = new Headers({
    'Content-Type': 'application/json'
  });

  body : any = {"customer_id" : 100720000}
  categories : string[] = new Array() as Array<string>

  constructor(public http: Http) {
    console.log('Hello RestapiServiceProvider Provider');
    console.log(this.getData())
    this.initCategories()
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
