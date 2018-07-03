import { Component, OnInit } from '@angular/core';
import {AngularFireDatabase} from 'angularfire2/database';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-list-message',
  templateUrl: './list-message.component.html',
  styleUrls: ['./list-message.component.css']
})
export class ListMessageComponent implements OnInit {

  messages : Observable<any[]>;

  constructor(database : AngularFireDatabase) { 
    this.messages = database.list('/mensaje').valueChanges();
  }

  ngOnInit() {
  }

}
