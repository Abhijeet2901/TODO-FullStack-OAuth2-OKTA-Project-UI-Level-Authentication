import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/model/todo';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-view-todos',
  templateUrl: './view-todos.component.html',
  styleUrls: ['./view-todos.component.css']
})
export class ViewTodosComponent implements OnInit{

  todos:Todo[]=[];
  constructor(private http:ApiService){}

  ngOnInit(): void {
    this.http.getAllTodos().subscribe({
      next:(data)=>{
        this.todos=data;
      },
      error:(error)=>{},
    })
  }

  deleteTodoFromParent(id:string){
    this.todos=this.todos.filter(todo=>todo.id!=id);
  }

}
