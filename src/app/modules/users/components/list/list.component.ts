import { Component, HostListener, OnInit } from '@angular/core';

import { UsersService } from '../../services/users.service';
import { User } from '../../models/user.model';
import { FormControl } from '@angular/forms';
import { getUsersUrl } from '../../../../../utils/helper';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
  users: Array<User> = [];
  page = 1;
  gender: String = '';
  nationalities = new FormControl();
  stringNationalities: String = '';
  count: any = 60;
  hideFilter: Boolean = false;

  nationalityList: Object[] = [
    { label: 'Australia', code: 'AU' },
    { label: 'Brazil', code: 'BR' },
    { label: 'Canada', code: 'CA' },
    { label: 'Switzerland', code: 'CH' },
    { label: 'Germany', code: 'DE' },
    { label: 'Denmark', code: 'DK' },
    { label: 'Spain', code: 'ES' },
    { label: 'Finland', code: 'FI' },
    { label: 'France', code: 'FR' },
    { label: 'United Kingdom', code: 'GB' },
    { label: 'Ireland', code: 'IE' },
    { label: 'Iran', code: 'IR' },
    { label: 'Norway', code: 'NO' },
    { label: 'Netherlands', code: 'NL' },
    { label: 'New Zealand', code: 'NZ' },
    { label: 'Turkey', code: 'TR' },
    { label: 'United States', code: 'US' },
  ];

  constructor(private userService: UsersService) {}
  //without virtual scrolling
  // @HostListener('window:scroll', ['$event'])
  // onWindowScroll() {
  //   let pos: any =
  //     (document.documentElement.scrollTop || document.body.scrollTop) +
  //     document.documentElement.offsetHeight;
  //   let max: any = document.documentElement.scrollHeight;
  //   if (parseInt(pos) == parseInt(max)) {
  //     this.page++;
  //     this.getUsers();
  //   }
  // }

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers() {
    if (this.nationalities.value) {
      this.stringNationalities = this.nationalities.value.toString();
    }
    this.userService
      .getUsers(
        this.page,
        this.stringNationalities,
        this.gender,
        false,
        this.count
      )
      .subscribe(
        (users) => {
          this.users =
            this.page == 1
              ? users['results']
              : [...this.users, ...users['results']];
        },
        (error) => console.log(error)
      );
  }

  handleCatgeoryChange() {
    //without virtual scrolling
    // document.documentElement.scrollTop = document.body.scrollTop = 0;
    // this.page = 1;
    this.getUsers();
  }

  exportUsers() {
    const canExport = true;
    return getUsersUrl(
      this.page,
      this.stringNationalities,
      this.gender,
      canExport,
      this.count
    );
  }
}
