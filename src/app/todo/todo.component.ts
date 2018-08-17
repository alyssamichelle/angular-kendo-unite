import { HourPipe } from './../hour.pipe';
import { slideIn, moveDown, slideOut, fadeIn, fadeOut } from './../animations';
import { Component, ViewEncapsulation } from '@angular/core';
import { trigger, transition, useAnimation, stagger, animateChild, query, group } from '@angular/animations';
import { groupBy, GroupResult } from '@progress/kendo-data-query';
import { Group } from '../../../node_modules/@progress/kendo-drawing';

interface Todo {
  item: string;
  due:  Date;
  hour: number;
}

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
          // query('@todoItem',
          //   stagger(100, animateChild()))
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

  constructor(private hour: HourPipe) {
    this.organizeTodosByHour(this.todos);
  }
  
  public initDueTime: Date = new Date(2019, 3, 10, 10, 30, 0);
  // private hourlyTodos: { hour: number, items: Array<String> }[] = 
  //   [
  //     { hour: 1,  items: [] },
  //     { hour: 2,  items: [] },
  //     { hour: 3,  items: [] },
  //     { hour: 4,  items: [] },
  //     { hour: 5,  items: [] },
  //     { hour: 6,  items: [] },
  //     { hour: 7,  items: [] },
  //     { hour: 8,  items: [] },
  //     { hour: 9,  items: [] },
  //     { hour: 10, items: [] },
  //     { hour: 11, items: [] },
  //     { hour: 12, items: [] },
  //     { hour: 13, items: [] },
  //     { hour: 14, items: [] },
  //     { hour: 15, items: [] },
  //     { hour: 16, items: [] },
  //     { hour: 17, items: [] },
  //     { hour: 18, items: [] },
  //     { hour: 19, items: [] },
  //     { hour: 20, items: [] },
  //     { hour: 21, items: [] },
  //     { hour: 22, items: [] },
  //     { hour: 23, items: [] },
  //     { hour: 24, items: [] },
  // ]
  public hourlyTodos: Todo[] | GroupResult[] = [];
  
  todos: Todo[] = [
    {
      item: 'Take dog to vet',
      due: new Date(2019, 3, 10, 1, 10, 0),
      hour: this.hour.transform(new Date(2019, 3, 10, 1, 10, 0))
    },
    {
      item: 'Get oil change',
      due: new Date(2019, 3, 10, 22, 15, 0),
      hour: this.hour.transform(new Date(2019, 3, 10, 22, 15, 0))
    },
    {
      item: 'Finish super hard puzzle',
      due: new Date(2019, 3, 10, 2, 30, 0),
      hour: this.hour.transform(new Date(2019, 3, 10, 2, 30, 0))
    },
    {
      item: 'Pack for Denver',
      due: new Date(2019, 3, 10, 19, 0, 0),
      hour: this.hour.transform(new Date(2019, 3, 10, 19, 0, 0))
    },
    {
      item: 'Create to-do app',
      due: new Date(2019, 3, 10, 1, 0, 0),
      hour: this.hour.transform(new Date(2019, 3, 10, 1, 0, 0))
    }
  ];

  addTodo(input: HTMLInputElement) {
    this.todos = [{ item: input.value, due: this.initDueTime, hour: this.hour.transform(this.initDueTime) }, ...this.todos];
    input.value = '';
    this.organizeTodosByHour(this.todos);
  }

  removeTodo(i) {
    this.todos.splice(i, 1);
    this.organizeTodosByHour(this.todos);
  }

  public onTimeChange() {
    this.todos.map((todo) => {
      todo.hour = this.hour.transform(todo.due)
      return todo
    });
    
    this.organizeTodosByHour(this.todos);
  }

  organizeTodosByHour(todos) {
    if(!todos) return null;
    this.hourlyTodos = groupBy(this.todos, [{ field: "hour" }]);
    
    // Humanizing the category field!!
    for (let group of this.hourlyTodos) {
      // turn the todos into 12 hr clock, not 24
      let hour: number = 12;
      if (group.value % 12 != 0) {
        hour = group.value % 12
      }
      // add AM or PM to the todos for the chart view
      if (group.value < 12) {
        group.humanizedValue = `${hour} AM`
      } else {
        group.humanizedValue = `${hour} PM`
      }
    }

    // Sort the hourlyTodos in order by hour
    this.hourlyTodos.sort((a, b) => {
      if (a.value < b.value) {
        return -1;
      } else if (a.value > b.value) {
        return 1;
      } else {
        return 0;
      }
    });

    console.log(JSON.stringify(this.hourlyTodos, null, 2));

  }

}
