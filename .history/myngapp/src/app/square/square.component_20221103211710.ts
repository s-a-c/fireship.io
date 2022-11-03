import { Component, Input } from "@angular/core";

@Component( {
  selector: 'app-square',
  template: `
    <button *ngIf="!value">{{ value }}</button>
    <button status="success" *ngIf="value == 'X'">{{ value }}</button>
    <button status="info" *ngIf="value == 'O'">{{ value }}</button>
  `,
  styles: [ 'button { width: 100%; height: 100%; font-color: darkviolet; font-size: clamp(1rem, 1trm + 5vw, 10vw) }' ]
} )
export class SquareComponent {

  @Input() value: 'X' | 'O' = "X";

}
