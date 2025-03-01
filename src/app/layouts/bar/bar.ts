import { Component, Inject, OnInit } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';

@Component({
   selector: 'bar',
   templateUrl: 'bar.html',
   imports: [RouterOutlet],


})

export class barComponent {
   router = Inject(Router)
   clicklist() {
      this.router.navigate(['/list'])
   }
   clickhome() {
      this.router.navigate(['/home'])
   }
   clickshop() {
      this.router.navigate(['/shop'])
   }
   clickprofile() {
      this.router.navigate(['/profile'])
   }

}