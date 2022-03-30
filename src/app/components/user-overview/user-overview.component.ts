import { Component, Input, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { faAngleDown, faAngleUp } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'user-overview',
  templateUrl: './user-overview.component.html',
  styleUrls: ['./user-overview.component.scss']
})
export class UserOverviewComponent implements OnInit {

  @Input() userData: User = new User('','','');
  downArrow = faAngleDown;
  upArrow = faAngleUp;

  constructor() { }

  ngOnInit(): void {
  }

}
