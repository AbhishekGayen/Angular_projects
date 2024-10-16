import {Component, OnInit} from "@angular/core";
import {FormsModule, NgForm} from "@angular/forms";
import {NgIf} from "@angular/common";

@Component({
  selector: 'login-form',
  standalone: true,
  templateUrl: './login-form.component.html',
  imports: [
    FormsModule,
    NgIf
  ],
  styleUrl: './login-form.component.css'
})
export class LoginFormComponent implements OnInit {
  ngOnInit(): void {
    console.log('Form Component Loaded....')
  }

  onSubmit(myForm: any) {
     console.log(myForm.value)
  }
}
