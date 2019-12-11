import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'tutorial-angular';
  todoArray = [];
  addTodo(value: string) {
    this.todoArray.push(value);
  }
  deleteItem(todoIndex: number) {
    this.todoArray.splice(todoIndex, 1);
  }
  todoSubmit(value: any) {
    console.log(value);
   }
}
