import {Component, OnInit} from "@angular/core";
import {FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";
import {NgIf} from "@angular/common";

@Component({
  selector: 'registration-form',
  standalone: true,
  templateUrl: './registration-form.component.html',
  imports: [
    FormsModule,
    NgIf,
    ReactiveFormsModule
  ],
  styleUrl: './registration-form.component.css'
})
export class RegistrationFormComponent implements OnInit {
  userFrom = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(5)]),
    email: new FormControl('', [Validators.required, Validators.email])
  });

  ngOnInit(): void {
    console.log('Loading registration Form!!')
  }

  customValidator(control: FormControl) {
    return {customError: true};
  }

  onSubmit() {
    console.log(this.userFrom.value);
  }
  //to access the form fields
  name(): any {
    return this.userFrom.get('name');
  }
  email(): any {
    return this.userFrom.get('email');
  }
}
