import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { buttonComponent } from './components/button.component/button.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,buttonComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'project-name';
}
