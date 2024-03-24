import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TapleTask1Component } from './components/taple-task-1/taple-task-1.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,TapleTask1Component],
  templateUrl: './app.component.html',
  // styleUrl: './app.component.css'
  styleUrls: ['./app.component.css'],

})

export class AppComponent {
  title = 'Blu-training-ammar-tanouz';
  data = [
    { name: 'John', age: 25, email: 'john@example.com' },
    { name: 'Sarah', age: 30, email: 'sarah@example.com' },
    { name: 'Michael', age: 28, email: 'michael@example.com' }
  ];
}
