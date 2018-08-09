import { animation, style, animate, keyframes } from "@angular/animations";

export let moveDown = animation([
  style({ transform: 'translateY(-20px)' }),
  animate(200)
]);

export let slideIn = animation([
  animate('0.5s ease-in', keyframes([
    style({
      height: 0,
      opacity: 0,
      transform: 'translateX(-100%)'
    }),
    style({
      height: '50px',
    }),
    style({
      opacity: 1,
      transform: 'translateX(0)'
    })
  ]))
]);

export let slideOut = animation([
  style({ backgroundColor: '#df3920' }),
  animate('0.5s ease-out', keyframes([
    style({
      height: '50px',
      opacity: 1,
      transform: 'translateX(0)'
    }),
    style({
      opacity: 0,
      transform: 'translateX(-100%)'
    }),
    style({
      height: 0
    }),
  ]))
]);


