import { Component } from '@angular/core';
import { NavController,LoadingController } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  users: any;
  weatherInfo: any = {};
  cityname:string = "Dhaka";
  constructor(public navCtrl: NavController,public httpClient:HttpClient,public loading:LoadingController) {
  this.getdata();

  }

  // getdata(){
  //  this.httpClient.get('https://jsonplaceholder.typicode.com/users')
  //  .subscribe((data)=>{
  //   this.users = data;
  //     console.log(data);
  //  },(error)=>{
  //     console.log(error);
  //  })
  // }

getdata(){

let load = this.loading.create();
load.present();
    console.log(this.cityname);
    this.httpClient.get("http://api.openweathermap.org/data/2.5/weather?q="+this.cityname+"&APPID=4da719eb00ffc1b57325c05e0bc9e3c4")
    .subscribe((data)=>{
     this.weatherInfo = data;
       console.log(data);
    },(error)=>{
       console.log(error);
    })
    load.dismiss();
   }


}
