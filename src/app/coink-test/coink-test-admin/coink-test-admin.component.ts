import { CoinkTestService } from './../services/coink-test.service';
import { Component, OnInit } from '@angular/core';
import { BreakpointObserver } from '@angular/cdk/layout';
import {MatTableDataSource} from '@angular/material/table';



export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}



const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
];

@Component({
  selector: 'app-coink-test-admin',
  templateUrl: './coink-test-admin.component.html',
  styleUrls: ['./coink-test-admin.component.scss']
})
export class CoinkTestAdminComponent implements OnInit {

  items = ['Tarjetas visa en dispensadores ', 'Monitorear y editar dispensadores ', 'Solicitud tarjetas '];
  expandedIndex = 0;


  displayedColumns: string[] = ['name', 'species', 'status', 'gender'];
  dataSource=new MatTableDataSource(ELEMENT_DATA);
  //= new MatTableDataSource(ELEMENT_DATA);


  constructor(private coinkTestService:CoinkTestService) { }

  ngOnInit(): void {
    this.getCharacters()
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

  }
  getCharacters(){
     this.coinkTestService.getCharacters().subscribe((data:any)=>{
     this.dataSource = new MatTableDataSource(data.results)
     })
  }

}
