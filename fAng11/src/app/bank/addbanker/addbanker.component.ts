import { Component, OnInit } from '@angular/core';
import { Banker } from 'src/app/services/banker';
import { BankersService } from 'src/app/services/bankers.service';

@Component({
  selector: 'app-addbanker',
  templateUrl: './addbanker.component.html',
  styleUrls: ['./addbanker.component.css']
})
export class AddbankerComponent implements OnInit {

  banker = {
    name: '',
    dept: '',
    post: '',
    salary: '',
    published:false
  };

  banker2!: Banker;
  submitted = false;

  constructor(private bnkService: BankersService) { }

  ngOnInit(): void { }

  saveBanker(): void {
    const data = {
      name: this.banker.name,
      dept: this.banker.dept,
      post: this.banker.post,
      salary: this.banker.salary,
      published: this.banker.published,
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
      name: '',
      dept: '',
      post: '',
      salary: '',
      published: this.submitted
    };
    console.log(this.banker)
  }
}
