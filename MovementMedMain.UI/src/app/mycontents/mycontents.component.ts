import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MyContentsService } from './mycontents.service';
import { InsuranceProvider } from '../Models/ui-models/insuranceProviderModel';


@Component({
  selector: 'app-mycontents',
  templateUrl: './mycontents.component.html',
  styleUrls: ['./mycontents.component.css']
})

export class MycontentsComponent implements OnInit {

  insurance : InsuranceProvider[] = [];
  displayedColumns: string[] = ['name'];
  dataSource: InsuranceProvider[] = [];
  // @ViewChild(MatPaginator) matPaginator!: MatPaginator;
  // @ViewChild(MatSort) matSort!: MatSort;
  constructor(private myContentsService : MyContentsService) { }

  ngOnInit(): void {
    this.dataSource = this.myContentsService.getInsuranceProvicers();
    this.insurance = this.myContentsService.getInsuranceProvicers();

    // This is a template for if this starts connecting to a back end service
    // this.myContentsService.getInsuranceProvicers()
    // .subscribe({
    //   next: (successResponse) =>
    //   {
    //     this.students = successResponse;
    //     this.dataSource = new MatTableDataSource<InsuranceProvider>(this.students);

    //     if(this.matPaginator) {
    //       this.dataSource.paginator = this.matPaginator
    //     }

    //     if(this.matSort) {
    //       this.dataSource.sort = this.matSort
    //     }
    //     // console.log(successResponse[0].firstName),
    //     // console.log(successResponse[0].lastName)
    //   },
    //   error: (errorResponse) => console.error(errorResponse),
    //   complete: () => console.info('complete')
    // });
  }

}
