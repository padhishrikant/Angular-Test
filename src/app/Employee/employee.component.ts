import {AfterViewInit, OnInit, ViewChild} from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import {Component} from '@angular/core';
import {MatSort} from '@angular/material/sort';

export interface PeriodicElement {
  id: number;
  name: string;
  department: string;
  joining_date: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
                          {"id": 11,"name": "Ash","department": "Finance","joining_date": "08/10/2016"},
                          {"id": 12,"name": "John","department": "HR","joining_date": "18/01/2011"},
                          { "id": 13, "name": "Zuri", "department": "Operations", "joining_date": "28/11/2019"},
                          {"id": 14,  "name": "Vish",  "department": "Development", "joining_date": "07/07/2017"},
                          { "id": 15, "name": "Barry",  "department": "Operations", "joining_date": "19/08/2014"},
                          {"id": 16,"name": "Ady",  "department": "Finance",  "joining_date": "05/10/2014"}, 
                          { "id": 17,"name": "Gare","department": "Development",  "joining_date": "06/04/2014"},
                          { "id": 18,  "name": "Hola",  "department": "Finance",  "joining_date": "08/12/2010"}, 
                          {"id": 19,  "name": "Ola",  "department": "HR",  "joining_date": "07/05/2011"},
                          { "id": 20,  "name": "Kim",  "department": "Development",  "joining_date": "20/10/2010"}];

@Component({
  selector: 'app-employee',
  styleUrls: ['employee.component.css'],
  templateUrl: 'employee.component.html',
})

export class EmployeeComponent implements OnInit, AfterViewInit{
  displayedColumns: string[] = ['id', 'name', 'department', 'joining_date'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);
  @ViewChild(MatSort) sort: MatSort;

  ngOnInit(){
    this.deleteDepartment();
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }

  deleteDepartment(){
    for(let i = 0; i < ELEMENT_DATA.length; i++){
      if(ELEMENT_DATA[i].department == "Development"){
        ELEMENT_DATA.splice(i, 1);
      }
    }
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}