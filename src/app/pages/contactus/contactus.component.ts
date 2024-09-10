import { JsonPipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-contactus',
  standalone: true,
  imports: [ReactiveFormsModule, JsonPipe],
  templateUrl: './contactus.component.html',
  styleUrl: './contactus.component.css'
})
export class ContactusComponent {

  constructor(
    private fb: FormBuilder
  ){}

  contactusForm = this.fb.group({
    persona: this.fb.group({
      nombre: ["", Validators.required],
      apellido: ["", Validators.required]
    }),
    correo: ["", [Validators.required, Validators.email]],
    mensaje: [""]
  })
  

  __onSubmit(){
    if (this.contactusForm.valid){
      console.log(this.contactusForm.value);
    }
    else {
      alert("Formulario no valido")
    }
  }
}
