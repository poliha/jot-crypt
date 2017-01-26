import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Data } from '../../providers/data';
/*
  Generated class for the Note page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-note',
  templateUrl: 'note.html'
})
export class NotePage {

	public title;
	public content;

  constructor(public navCtrl: NavController, public navParams: NavParams,
  					public dataService: Data) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NotePage');
    this.title = this.navParams.get('note').title;
    this.content = this.navParams.get('note').content;
  }

  logVal(title){
  	console.log("title is: ", title);
  	
  }

  saveNote(){
  	
  	let timeStamp = Date.now();
  	let newItem = {
  		title: this.title,
  		content: this.content,
  		updated_at: timeStamp
  	};
  	console.log("newnote: ", newItem);
  	this.dataService.set(newItem);
  }

}
