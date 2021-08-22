import { User } from './../modal/Modal';
import { Component, OnInit } from '@angular/core';
import { UserService } from '../service/user.service';
import { FormBuilder, FormControl ,FormGroup,Validator, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  progressBar = false;
  user: User = {} as User;
  username: string;
  password: string;

  registerForm: FormGroup;
  submitted = false;
  constructor(private userService: UserService ,private formBuilder: FormBuilder) {

  }
  ngOnInit(): void {
    ({
      title: ['', Validators.required],
      firstName: ['', Validators.required]
    });

  }

  addUser() {
    this.progressBar = true;
    console.log(this.username)
    this.userService.addUser(this.user).subscribe(user => {
      this.user = user;
      this.userService.saveUsername(user.username);
      window.location.replace("/")
    });
  }
  get f() { return this.registerForm.controls; }
  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.registerForm.invalid) {
        return;
    }

    // display form values on success
    alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.registerForm.value, null, 4));
}

onReset() {
    this.submitted = false;
    this.registerForm.reset();
}
}


