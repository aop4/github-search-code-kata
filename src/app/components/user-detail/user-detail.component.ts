import { Component, Input, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { UserDetail } from 'src/app/models/user-detail';
import { GithubApiClient } from 'src/app/services/github-api-client.service';

@Component({
  selector: 'user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss']
})
export class UserDetailComponent implements OnInit {

  @Input() user: User = new User('','','');
  isComponentVisible: boolean = false;
  userDetail: UserDetail | null = null;

  constructor(private githubApiClient: GithubApiClient) { }

  ngOnInit(): void {
  }

  toggleComponent() {
    if (this.userDetail === null) {
      this.githubApiClient.getUserDetail(this.user.username)
        .then((resp) => {
          this.userDetail = UserDetail.fromResponse(resp);
        });
    }
    this.isComponentVisible = !this.isComponentVisible;
  }

}
