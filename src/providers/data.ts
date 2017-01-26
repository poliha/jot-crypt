import { Storage } from '@ionic/storage';
import { Injectable } from '@angular/core';
// import { Http } from '@angular/http';

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


  get(timestamp){
  	return this.storage.get(timestamp);
  }

  set(data){
  	let newData = JSON.stringify(data);
  	this.storage.set(data.updated_at.toString(), newData);
  }

  getAll(){
  	let allNotes = []
  	this.storage.forEach((value,key,iterationNumber) => {
  		allNotes.push(JSON.parse(value));
  	});
  	return allNotes;
  }

}
