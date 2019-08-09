import { Injectable } from '@angular/core';
import { PaymentDetail } from 'src/app/shared/payment-detail.model';
import { HttpClient } from "@angular/common/http"
@Injectable({
  providedIn: 'root'
})
export class PaymentDetailService {
  formData:PaymentDetail
  readonly rootUrl='http://localhost:1810/api';
  list : PaymentDetail[];
  
  constructor(private http:HttpClient) { }


  postPaymentDetail(){
    return this.http.post(this.rootUrl + '/PaymentDetail', this.formData);

  }
  putPaymentDetail(){
    return this.http.put(this.rootUrl + '/PaymentDetail/'+ this.formData.PMId ,this.formData);
  }

  

  refreshList(){
    this.http.get(this.rootUrl + '/PaymentDetail')
    .toPromise()
    .then(res => this.list = res as PaymentDetail[])
  }
}
