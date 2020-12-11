import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Banker } from 'src/app/services/banker';
import { BankersService } from 'src/app/services/bankers.service';

@Component({
  selector: 'app-listbankers',
  templateUrl: './listbankers.component.html',
  styleUrls: ['./listbankers.component.css']
})
export class ListbankersComponent implements OnInit {

  bankers: any;
  // bankers:  Banker[] = [];
  activeBanker = null;
  currentIndex = -1;
  name1 = '';
  bankers1: [string, unknown][];

  constructor(private bnkService: BankersService,
    private _router: Router,) { }

  ngOnInit(): void {
    this.bankersUpdated();
  }

  bankersUpdated(): void {
    this.bnkService.getAll()
      .subscribe(
        data => {
          this.bankers = data;
          console.log("DATA xxxxIA /n" + data);
          console.log(data);
          var res = Object.entries(data);
          this.bankers1 = res;
          console.log(res)
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

  setBankerActive(banker: any, index: number): void {
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

  // add worker
  editBanker(worker: Banker) {
    var id = worker.id;
    console.log(worker);
    console.log("\n======================================\n");
    console.log(id);
    console.log(worker);
    this._router.navigate(['/banks/'+ id ]);
  }

   // add worker
   addBanker() {
    // var id = worker.id;
    // console.log(worker);
    console.log("\n======================================\n");
    // console.log(id);
    // console.log(worker);
    this._router.navigate(['/addbanker/']);
  }

}
