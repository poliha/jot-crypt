import { Component } from '@angular/core';
import { NavController, NavParams, Events } from 'ionic-angular';
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

	public note;

  constructor(public navCtrl: NavController, public navParams: NavParams,
  					public dataService: Data, public events: Events) {
    this.note = this.navParams.get('note');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NotePage');
    
    console.log("this note", this.note);
    // this.title = this.navParams.get('note').title;
    // this.content = this.navParams.get('note').content;
  }

  logVal(title){
  	console.log("title is: ", title);
  	
  }

  saveNote(){
    let timeStamp = Date.now();
    // let storeLength = this.dataService.length();
  	// if note has id.. update note
    //if no id create note 
  	this.note.updated_at = timeStamp;

    if(this.note.id) {
      console.log("update note", this.note.id);
      this.dataService.set(this.note)
          .then((note) => {
            this.events.publish('note:saved', note);
          });

    }else{
      
      this.dataService.length().then((storeLength) => {
        console.log("create note", storeLength);
        let noteID = storeLength+1;
        this.note.id = noteID;

        return this.dataService.set(this.note);

      })
      .then((note) => {
        console.log("saved note", note);
        this.events.publish('note:saved', note);
      });
      

    }

  	// let newItem = {
  	// 	title: this.title,
  	// 	content: this.content,
  	// 	updated_at: timeStamp
  	// };
  	// console.log("newnote: ", newItem);
  	// this.dataService.set(newItem);
  	// this.events.publish('note:saved', newItem, timeStamp);
  }

}
