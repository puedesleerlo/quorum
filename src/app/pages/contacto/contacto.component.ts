import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AngularFireFunctions } from '@angular/fire/functions';
import { MatSnackBar } from '@angular/material/snack-bar';
@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.scss']
})
export class ContactoComponent implements OnInit {
  messaging: any
  contacto = new FormGroup({
    nombre: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    asunto: new FormControl('', [Validators.required])
  })
  constructor(private fns: AngularFireFunctions, public snackBar: MatSnackBar) {
    this.messaging = fns.httpsCallable('sendEmail')
   }

  ngOnInit() {
    console.log(this.contacto)
  }
  openSnackBar() {
    this.snackBar.openFromComponent(FormSendComponent, {
      duration: 5000,
    });
  }
  onSubmit() {
    // TODO: Use EventEmitter with form value
    // console.log(this.contacto.value);
    var data = this.messaging(this.contacto.value)
    console.log(data)
    this.contacto.reset()
    this.openSnackBar();
  }

}

@Component({
  selector: 'form-send',
  template: `
  <span class="example-pizza-party">
  Su mensaje fue enviado con éxito
  </span>
  `,
  styles: [`
    .example-pizza-party {
      color: white;
    }
  `],
})
export class FormSendComponent {}