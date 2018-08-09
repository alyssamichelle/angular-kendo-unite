import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'todo',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss'],
 
})

export class TodoComponent {

  public initDueTime: Date = new Date(2019, 3, 10, 10, 30, 0);

  todos = [
    {
      item: 'Take dog to vet',
      due: new Date(2019, 3, 10, 2, 30, 0)
    },
    {
      item: 'Get oil change',
      due: new Date(2019, 3, 10, 2, 30, 0)
    },
    {
      item: 'Finish super hard puzzle',
      due: new Date(2019, 3, 10, 2, 30, 0)
    },
    {
      item: 'Pack for Denver',
      due: new Date(2019, 3, 10, 3, 30, 0)
    },
    {
      item: 'Create to-do app',
      due: new Date(2019, 3, 10, 1, 30, 0)
    }
  ];

  addTodo(input: HTMLInputElement) {
    this.todos = [{ item: input.value, due: this.initDueTime }, ...this.todos];
    input.value = '';
  }

  removeTodo(todo, i) {
    this.todos.splice(i, 1);
  }
}
