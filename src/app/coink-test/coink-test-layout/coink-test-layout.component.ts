import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-coink-test-layout',
  templateUrl: './coink-test-layout.component.html',
  styleUrls: ['./coink-test-layout.component.scss']
})
export class CoinkTestLayoutComponent implements OnInit {
  hide = true;
  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  goToAdmin(){
    this.router.navigate(['/admin']);
  }

}
