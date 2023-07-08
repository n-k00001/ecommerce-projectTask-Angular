import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormControl, FormControlName } from '@angular/forms';
import { Router } from '@angular/router';
import { Iuser } from 'src/app/Models/iuser';
import { UserService } from 'src/app/Services/user.service';


@Component({
  selector: 'app-user-registration',
  templateUrl: './user-registration.component.html',
  styleUrls: ['./user-registration.component.css']
})
export class UserRegistrationComponent {
  registrationForm!: FormGroup;
  user:Iuser={} as Iuser;
  constructor(private formBuilder:FormBuilder,private userService: UserService,private router:Router) {}

  addUser() {
    let userstatic: Iuser = {
      id:8,
      name: 'Sara',
      address: {
        street:"2st",
        city:"cairo",
        postalCode:57824
      },
      email: 'sara@gmail.com',
      phoneNumber:"0125483875",
      password: "password147"
    };
    this.user = this.registrationForm.value;
    console.log(this.user);
    this.userService.signUp(this.user).subscribe({
      next:(data)=>{
        console.log(data);

      },
      error:(error)=>{
        console.log(error);

      }
    })
  }
  ngOnInit() {
    this.registrationForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      phoneNumber: ['', [Validators.required, Validators.pattern('^(01)[0-9]{9}$')]],
      address: this.formBuilder.group({
        city: ['', Validators.required],
        street: ['', Validators.required],
        postalCode: ['', Validators.required]
        
      }),
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['',[Validators.required]]
    },{ validator: this.passwordMatchValidator});
  }
    passwordMatchValidator(control: AbstractControl): { [key: string]: boolean } | null {
    const password = control.get('password');
    const confirmPassword = control.get('confirmPassword');
  
    if (password?.value !== confirmPassword?.value) {
      return { passwordMismatch: true };
    }
  
    return null;
  }
}
