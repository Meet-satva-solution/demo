import { Component, OnInit } from '@angular/core';
import { FormGroup, UntypedFormBuilder, Validators } from '@angular/forms';
import { BooleanInput } from 'ng-zorro-antd/core/types';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.scss']
})
export class FeedbackComponent implements OnInit {

  feedbackForm!: FormGroup;
  textValue: string | null = null;
  isSpinning: BooleanInput = false;

  constructor(
    private fb: UntypedFormBuilder,
  ) { }

  ngOnInit(): void {
    this.formInitialization();
  }

  /**
   * to initialize the feedback form
   */
  formInitialization(): void {
    this.feedbackForm = this.fb.group({
      name: ['', [Validators.required]],
      rating: ['', [Validators.required]],
      comment: ['', [Validators.required]],
    });
  }

  /**
   * On submit of the feedback form
   */
  submitForm() {
    this.isSpinning = true;
    setTimeout(() => {
      this.isSpinning = false;
      this.feedbackForm.reset();
    }, 3000);
  }
}
