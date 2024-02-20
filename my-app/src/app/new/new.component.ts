import { Component } from '@angular/core';
import { ChildComponent } from '../child/child.component';

@Component({
  selector: 'app-new',
  standalone: true,
  imports: [ChildComponent],
  // template: `<p>new works within ts file!</p> `,
  styles: [
    `
      p {
        color: red;
      }
    `,
  ],
  // styleUrls: ['./new.component.css', './old.component.css'],
  templateUrl: './new.component.html',
  // styleUrl: './new.component.css'
})
export class NewComponent {}
