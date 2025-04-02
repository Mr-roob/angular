import { Component, Inject, OnInit } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';

@Component({
   selector: 'bar',
   templateUrl: 'bar.html',
   imports: [RouterOutlet],


})

export class barComponent {
   constructor(private router: Router){}

   onclicklist() {
      this.router.navigate(['/list'])
   }
   onclickhome() {
      this.router.navigate(['/home'])
   }
   onclickshop() {
      this.router.navigate(['/shop'])
   }
   onclickprofile() {
      this.router.navigate(['/profile'])
   }

}