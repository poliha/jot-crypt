import { Injectable } from '@angular/core';
// import { Http } from '@angular/http';
import { Storage } from '@ionic/storage';
// import 'rxjs/add/operator/map';

/*
  Generated class for the Data provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class Data {

  constructor(public storage: Storage) {
    console.log('Hello Data Provider');
  }


  get(){
  	return this.storage.get('notes');
  }

  set(data){
  	let newData = JSON.stringify(data);
  	this.storage.set('notes', newData);
  }

}
