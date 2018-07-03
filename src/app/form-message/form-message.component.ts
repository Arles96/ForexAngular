import { Component, OnInit, Input } from '@angular/core';
import {AngularFireDatabase} from 'angularfire2/database'

@Component({
  selector: 'app-form-message',
  templateUrl: './form-message.component.html',
  styleUrls: ['./form-message.component.css']
})
export class FormMessageComponent implements OnInit {

  @Input() email : string;

  form = {
    titulo : "",
    mensaje : "",
    estado : ""
  }

  constructor(public database : AngularFireDatabase) { 
  }

  ngOnInit() {
  }

  submit(){
    this.database.database.ref("mensaje").push({
      titulo : this.form.titulo,
      mensaje : this.form.mensaje,
      estado : this.form.estado,
      correo : this.email
    });
    fetch(`https://us-central1-forexa-b161c.cloudfunctions.net/counter?uid=${this.email}`)
      .then(res => {
        console.log(res)
      })
      .catch(err => {
        console.log(err)
      })
  }
}
