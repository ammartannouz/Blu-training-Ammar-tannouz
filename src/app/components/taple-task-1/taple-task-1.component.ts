import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-taple-task-1',
  standalone: true,
  templateUrl: './taple-task-1.component.html',
  styleUrls: ['./taple-task-1.component.css'],
  imports: [CommonModule] 


})
export class TapleTask1Component {
  title = 'task one';
  data = [
    { firstname: 'Ammar',lastname: 'tanouz',email: 'michael@example.com'},
    { firstname: 'Sarah', lastname: 'alhasan', email: 'sarah@example.com' },
    { firstname: 'Michael', lastname: 'barakat', email: 'michael@example.com'},
  ];



}
