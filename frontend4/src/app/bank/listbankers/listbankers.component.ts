import { Component, OnInit } from '@angular/core';
import { BankersService } from 'src/app/services/bankers.service';

@Component({
  selector: 'app-listbankers',
  templateUrl: './listbankers.component.html',
  styleUrls: ['./listbankers.component.css']
})
export class ListbankersComponent implements OnInit {

  bankers: any;
  activeBanker = null;
  currentIndex = -1;
  name1 = '';

  constructor(private bnkService: BankersService) { }

  ngOnInit(): void {
    this.bankersUpdated();
  }

  bankersUpdated(): void {
    this.bnkService.getAll()
      .subscribe(
        data => {
          this.bankers = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

  refreshList(): void {
    this.bankersUpdated();
    this.activeBanker = null;
    this.currentIndex = -1;
  }

  setBankerActive(banker, index): void {
    this.activeBanker = banker;
    this.currentIndex = index;
  }

  deleteAllBankers(): void {
    this.bnkService.deleteAll()
      .subscribe(
        response => {
          console.log(response);
          this.refreshList();
        },
        error => {
          console.log(error);
        });
  }

  searchName(): void {
    this.bnkService.searchByName(this.name1)
      .subscribe(
        data => {
          this.bankers = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

}
