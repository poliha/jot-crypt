import { Component } from '@angular/core';

import { NavController, Events } from 'ionic-angular';
import { NotePage } from '../note/note';
import { Data } from '../../providers/data';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class Home {
	public notes = [];
  constructor(public navCtrl: NavController, public dataService: Data, public events: Events) {
    // this.notes = [{title: "note1", content: "note1 content"},
    // 							{title: "note2", content: "note2 content"},
    // 							{title: "note3", content: "note3 content"}
    // 							];
  }

  ionViewDidLoad(){
  	console.log("home view loaded");
  	this.notes = this.dataService.getAll();
  	console.log("notes", this.notes);
  	this.events.subscribe('note:saved', (note) => {
		  let noteObj = JSON.parse(note);
		  this.notes.forEach((n) => {
        if(n.id == noteObj.id) {
          console.log("match found... swapping");
          console.log("n before", n);
          console.log("noteobj", noteObj);
          n = noteObj;
          console.log("n after", n);
        }
      });

		  // this.notes = this.dataService.getAll();
		  // console.log("notes", this.notes);
		});
  }

  openNote(note){
  	console.log("note", note);
  	this.navCtrl.push(NotePage, {
    	note: note
  	});
  }

  newNote(){
    let newItem = {
      id: "",
      title: "",
      content: "",
      updated_at: ""
    };
  	this.navCtrl.push(NotePage, {
    	note: newItem
  	});
  }

	

}
