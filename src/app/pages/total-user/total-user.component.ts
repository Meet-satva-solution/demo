import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-total-user',
  templateUrl: './total-user.component.html',
  styleUrls: ['./total-user.component.scss'],
})
export class TotalUserComponent implements OnInit {
  @Input() totalUser: any;
  @Input() toolTipText: any;
  @Output() onAlert: any = new EventEmitter();
  alert: boolean = false;
  alertMessage: string = '';
  ngOnInit(): void {}

  showAlert() {
    this.alert = true;
    this.alertMessage = 'This is the alert message from child';
    this.onAlert.emit();
  }
}
