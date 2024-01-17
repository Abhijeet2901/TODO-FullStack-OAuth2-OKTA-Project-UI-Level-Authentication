import { Component } from '@angular/core';
import { Todo } from 'src/app/model/todo';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent {
  constructor(private httpService:ApiService){

  };
todo=new Todo();

//Used to Save Todo data
  submitTodoData(event:FormDataEvent){
  this.httpService.addTodo(this.todo).subscribe({
    next:(data)=>{
      alert("TODO is added!!");
      this.todo=new Todo();
    },
    error:(error)=>{
      alert("Error!! in saving Todo. Try Again.");
    },
    complete:()=>{}
  }
  )
  }
}
