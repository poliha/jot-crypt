import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class Home {
	public notes = [];
  constructor(public navCtrl: NavController) {
    this.notes = [{title: "note1", content: "note1 content"},
    							{title: "note2", content: "note2 content"},
    							{title: "note3", content: "note3 content"}
    							];
  }

  ionViewDidLoad(){
  	console.log("home view loaded");
  }
  
}
