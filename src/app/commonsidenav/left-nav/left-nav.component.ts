// import { Component, OnInit } from '@angular/core';

// @Component({
//   selector: 'app-left-nav',
//   templateUrl: './left-nav.component.html',
//   styleUrls: ['./left-nav.component.css']
// })
// export class LeftNavComponent implements OnInit {

//   constructor() { }

//   ngOnInit(): void {
//   }

// }
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import {
  BreakpointObserver,
  Breakpoints
} from '@angular/cdk/layout';
import { map, shareReplay } from 'rxjs/operators';
import { Router } from '@angular/router';

@Component({
  selector: 'app-left-nav',
  templateUrl: './left-nav.component.html',
  styleUrls: ['./left-nav.component.css']
})
export class LeftNavComponent implements OnInit {
  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );
  constructor(private breakpointObserver: BreakpointObserver, private router: Router) { }

  ngOnInit(): void {
  }
  navigateTo(route:string){
    if(route == 'createProject'){
      this.router.navigate(['empmanage/createproject'])

    }
      
    

  }
}


