import { Component } from '@angular/core';
import {MatExpansionModule} from '@angular/material/expansion';

@Component({
  selector: 'app-todo-list',
  standalone: true,
  imports: [MatExpansionModule],
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.css'
})
export class TodoListComponent {
  tasks = [
    {title: 'First Task', content: 'This is first development task.'},
    {title: 'Second Task', content: 'This is second development task.'},
    {title: 'Third Task', content: 'This is third development task.'}
  ]

}
