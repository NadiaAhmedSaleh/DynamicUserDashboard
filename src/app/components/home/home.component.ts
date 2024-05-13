import { HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/interface/user';
import { UserDataService } from 'src/app/service/user-data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  constructor(private _UserDataService: UserDataService) {}

  searchTerm: string = '';
  Users: User[] = [];

  pageSize: number = 0;
  CurrentPage: number = 1;
  total: number = 0;

  ngOnInit(): void {
    this._UserDataService.getAllUsers().subscribe({
      next: (response) => {
        this.Users = response.data;
        this.pageSize = response.per_page;
        this.CurrentPage = response.page;
        this.total = response.total;
      },
    });
  }

  pageChanged(event: any): void {
    this._UserDataService.getAllUsers(event).subscribe({
      next: (response) => {
        this.Users = response.data;
        this.pageSize = response.per_page;
        this.CurrentPage = response.page;
        this.total = response.total;
      },
    });
  }
}
