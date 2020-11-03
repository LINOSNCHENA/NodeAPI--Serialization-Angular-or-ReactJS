import { Component, OnInit } from '@angular/core';
import { BankersService } from 'src/app/services/bankers.service';

@Component({
  selector: 'app-addbanker',
  templateUrl: './addbanker.component.html',
  styleUrls: ['./addbanker.component.css']
})
export class AddbankerComponent implements OnInit {
  banker = {
    name1: '',
    dept: '',
    post: '',
    salary: '',

    published: false
  };
  submitted = false;

  constructor(private bnkService: BankersService) { }

  ngOnInit(): void {
  }

  saveBanker(): void {
    const data = {
      name1: this.banker.name1,
      dept: this.banker.dept,
      post: this.banker.post,
      salary: this.banker.salary,

    };

    this.bnkService.create(data)
      .subscribe(
        response => {
          console.log(response);
          this.submitted = true;
        },
        error => {
          console.log(error);
        });
  }

  newBanker(): void {
    this.submitted = false;
    this.banker = {
      name1: '',
      dept: '',
      post: '',
      salary: '',
      published: false
    };
  }

}
