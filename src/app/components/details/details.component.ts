import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserDataService } from 'src/app/service/user-data.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css'],
})
export class DetailsComponent implements OnInit {
  constructor(
    private _UserDataService: UserDataService,
    private _ActivatedRoot: ActivatedRoute,
    private _Router: Router
  ) {}

  userData: any;

  ngOnInit(): void {
    this._ActivatedRoot.paramMap.subscribe({
      next: (params) => {
        let userId: any = params.get('id');
        this._UserDataService.getUser(userId).subscribe({
          next: (response) => {
            this.userData = response.data;
          },
        });
      },
    });
  }

  navigateBack(): void {
    this._Router.navigate(['/home']);
  }
}
