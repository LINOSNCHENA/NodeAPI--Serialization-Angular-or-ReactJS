import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BankersService } from 'src/app/services/bankers.service';
import { Banker } from 'src/app/services/banker';

@Component({
  selector: 'app-detailbanker',
  templateUrl: './detailbanker.component.html',
  styleUrls: ['./detailbanker.component.css']
})
export class DetailbankerComponent implements OnInit {
  activeBanker!: Banker;
  message = '';

  constructor(
    private bnkService: BankersService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.message = '';
    this.getBanker(this.route.snapshot.params.id);
  }

  getBanker(id: string): void {
    this.bnkService.get(id)
      .subscribe(
        data => {
          this.activeBanker = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

  updatePublished(status: any): void {
    const data = {
      name: this.activeBanker.name,
      dept: this.activeBanker.dept,
      post: this.activeBanker.post,
      salary: this.activeBanker.salary,
      published: this.activeBanker.published,
      id: this.activeBanker.id,
    
     // published: status
    };

    this.bnkService.update(this.activeBanker.id, data)
      .subscribe(
        response => {
          this.activeBanker.published = status;
          console.log(response);
        },
        error => {
          console.log(error);
        });
  }

  updateBanker(): void {
    this.bnkService.update(this.activeBanker.id, this.activeBanker)
      .subscribe(
        response => {
          console.log(response);
          this.message = 'The banker was updated successfully!';
        },
        error => {
          console.log(error);
        });
  }

  deleteBanker(): void {
    this.bnkService.delete(this.activeBanker.id)
      .subscribe(
        response => {
          console.log(response);
          this.router.navigate(['/banks']);
        },
        error => {
          console.log(error);
        });
  }

}
