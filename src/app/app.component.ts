import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  /* An empty array to push the user's inputs into */
  todoItem = []

  onKeyDownEvent(data) {
    /* Target is an event within the data object */
    this.todoItem.push(data.target.value)
    console.log(data.target.value, 'hi')
  
  }

}
