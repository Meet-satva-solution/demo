import { Component, OnInit } from '@angular/core';
import { FormGroup, UntypedFormBuilder, UntypedFormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { BooleanInput } from 'ng-zorro-antd/core/types';
import { NzFormTooltipIcon } from 'ng-zorro-antd/form';
import { UserService } from '../../_service';

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.scss']
})
export class NewUserComponent implements OnInit {

  id: any = this.route.snapshot.paramMap.get('id');
  passwordVisible = false;
  password?: string;
  content: any = 'center';
  options: string[] = [];
  isSpinning: BooleanInput = false;
  validateForm!: FormGroup;

  constructor(
    private fb: UntypedFormBuilder,
    private UserService: UserService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.formInitialization();
    if (this.id) {
      this.getUser(this.id);
    }
  }

  /**
   * To validate the form
   */
  validForm() {
    Promise.resolve().then(() => {
      if (this.validateForm.valid) {
        this.content = 'center';
      }
      if (this.validateForm.value.agree == false) {
        this.validateForm.setErrors({ require: true });
      }
    });
  }

  /**
   * To Submit the form 
   */
  submitForm() {
    if (this.validateForm.valid) {
      this.isSpinning = true;
      var request = this.validateForm.value;
      if (this.id) {
        request.id = this.id;
      }
      this.UserService.newUser(request).subscribe((res: any) => {
        this.isSpinning = false;
        this, this.router.navigate(['/user/view']);
      });
    } else {
      Object.values(this.validateForm.controls).forEach((control: any) => {
        if (control.invalid) {
          control.markAsDirty();
          control.updateValueAndValidity({ onlySelf: true });
        }
      });
    }
  }

  /**
   * To get the user
   * @param id to get the particular user details from the database
   */
  getUser(id: any) {
    this.UserService.getUser(id).subscribe((user) => {
      this.formInitialization(user);
    });
  }

  /**
   * to update the check password field is valid or not
   */
  updateConfirmValidator(): void {
    Promise.resolve().then(() => this.validateForm.controls['checkPassword'].updateValueAndValidity());
  }

  /**
   * To confirm the password field
   * @param control untyped form control
   * @returns the error control value
   */
  confirmationValidator = (control: UntypedFormControl): { [s: string]: boolean; } => {
    if (!control.value) {
      return { required: true };
    } else if (control.value !== this.validateForm.controls['password'].value) {
      return { confirm: true, error: true };
    }
    return {};
  };

  /**
   * To initialize the form
   * @param data if user edit the field
   */
  formInitialization(data?: any): void {
    this.validateForm = this.fb.group({
      email: [data?.email, [Validators.email, Validators.required]],
      password: [data?.password, [Validators.required]],
      checkPassword: [data?.checkPassword, [Validators.required, this.confirmationValidator]],
      nickname: [data?.nickname, [Validators.required]],
      phoneNumberPrefix: [data?.phoneNumberPrefix ? data?.phoneNumberPrefix : '+86'],
      phoneNumber: [data?.phoneNumber, [Validators.required]],
      dateOfBirth: [data?.dateOfBirth, [Validators.required]],
      gender: [data?.gender, [Validators.required]],
      agree: [data?.agree, [Validators.required]],
    });
  }

  /**
   * If the form is invalid then on hover this function will be called
   */
  registerButton() {
    if (this.validateForm.invalid) {
      this.content == 'end' ? this.content = 'start' : this.content = 'end';
    }
  }

  /**
   * On change of email field
   * @param e event object triggered when input is changed
   */
  onInput(e: Event): void {
    const value = (e.target as HTMLInputElement).value;
    if (!value || value.indexOf('@') >= 0) {
      this.options = [];
    } else {
      this.options = ['gmail.com', 'hotmail.com', 'yahoo.com'].map(domain => `${value}@${domain}`);
    }
  }

}
