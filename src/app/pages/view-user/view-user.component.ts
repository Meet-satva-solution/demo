import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { withLatestFrom } from 'rxjs';
import { UserService } from '../../_service';

@Component({
  selector: 'app-view-user',
  templateUrl: './view-user.component.html',
  styleUrls: ['./view-user.component.scss'],
})
export class ViewUserComponent implements OnInit {
  UserDetails: any = [];
  popVisiblity: boolean = false;
  toolTipText: string = '';
  userList: any = [];

  constructor(public userService: UserService, private router: Router) {}

  ngOnInit(): void {
    this.getUser();
    this.userService.getUsers();
    this.userService.data$.subscribe((res) => {
      this.userList = res;
      this.toolTipText = `There are ${this.userList.length} users`;
    });
  }

  addNewUser(addUser: any) {
    var request = {
      name: addUser.value,
      id: this.userList.length + 1,
    };
    this.userService.addData(request);
  }
  /**
   * To get the user details
   */
  getUser() {
    this.userService.getUser().subscribe((user) => {
      this.UserDetails = user;
      this.toolTipText = `There are ${this.UserDetails.length} users`;
    });
  }

  AlertShowing() {
    console.log('alertShowing');
  }
  /**
   * To delete the user
   * @param id to be deleted
   */
  deleteUser(id: any) {
    this.userService.deleteUser(id).subscribe((user) => {
      const isIdDelete = (element: any) => element.id == id;
      var index = this.UserDetails.findIndex(isIdDelete);
      this.UserDetails.splice(index, 1);
    });
  }

  /**
   * to edit the user
   * @param id to be edited
   */
  editUser(id: any) {
    this.router.navigate(['/user/new', id]);
  }
}
