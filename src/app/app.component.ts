import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { buttonComponent } from './components/button.component/button.component';
import { formComponent } from './components/button.component/form.component/form.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,buttonComponent,formComponent],
  template: '<router-outlet></router-outlet>',

})
export class AppComponent {
  title = 'project-name';
}
