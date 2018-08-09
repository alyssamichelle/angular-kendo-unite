import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'todo',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss'],
 
})

export class TodoComponent {

  todos = [
    {
      item: 'Take dog to vet',
    },
    {
      item: 'Get oil change',
    },
    {
      item: 'Finish super hard puzzle',
    },
    {
      item: 'Pack for Denver',
    },
    {
      item: 'Create to-do app',
    }
  ];

  addTodo(input: HTMLInputElement) {
    this.todos = [{ item: input.value }, ...this.todos];
    input.value = '';
  }

  removeTodo(todo, i) {
    this.todos.splice(i, 1);
  }
}
