import { slideIn, moveDown, slideOut, fadeIn, fadeOut } from './../animations';
import { Component, ViewEncapsulation } from '@angular/core';
import { trigger, transition, useAnimation, stagger, animateChild, query, group } from '@angular/animations';

@Component({
  selector: 'todo',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss'],
  animations: [

    trigger('fade', [
      transition(':enter', [
        useAnimation(fadeIn)
      ]),
      transition(':leave', [
        useAnimation(fadeOut)
      ])
    ]),
    
    trigger('todoAnimations', [
      transition(':enter', [
        group([
          query('h1', [
            useAnimation(moveDown)
          ]),
          query('input', [
            useAnimation(moveDown)
          ]),
          query('@todoItem',
            stagger(100, animateChild()))
        ])
      ])
    ]),

    trigger('todoItem', [
      transition(':enter', [
        useAnimation(slideIn),
      ]),
      transition(':leave', [
        useAnimation(slideOut)
      ]),
    ])
  ]
})

export class TodoComponent {

  // public initDueTime: Date = new Date(2019, 3, 10, 10, 30, 0);

  todos = [
    {
      item: 'Take dog to vet',
      // due: new Date(2019, 3, 10, 2, 30, 0)
    },
    {
      item: 'Get oil change',
      // due: new Date(2019, 3, 10, 2, 30, 0)
    },
    {
      item: 'Finish super hard puzzle',
      // due: new Date(2019, 3, 10, 2, 30, 0)
    },
    {
      item: 'Pack for Denver',
      // due: new Date(2019, 3, 10, 3, 30, 0)
    },
    {
      item: 'Create to-do app',
      // due: new Date(2019, 3, 10, 1, 30, 0)
    }
  ];

  addTodo(input: HTMLInputElement) {
    // this.todos = [{ item: input.value, due: this.initDueTime }, ...this.todos];
    this.todos = [{ item: input.value }, ...this.todos];
    input.value = '';
  }

  removeTodo(i) {
    this.todos.splice(i, 1);
  }
}
