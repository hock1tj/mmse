import { Component, OnInit} from '@angular/core';
import { AccountService, ApplicationUser, User } from 'ngx-cmich';

@Component({
  selector: 'cmich-test',
  templateUrl: './test.component.html'
})
export class TestComponent implements OnInit {

  loading: boolean;
  user: ApplicationUser;


  constructor(
    private readonly accountService: AccountService) {    
  }



  ngOnInit() {
    this.accountService.isLoading().subscribe((isLoading: boolean) => {
      this.loading = isLoading;
    });
    this.accountService.get().subscribe((user: User) => {
      if (user && user.currentUser) {
        this.user = user.currentUser;

      }
      
      
    });
  }



  }
  



