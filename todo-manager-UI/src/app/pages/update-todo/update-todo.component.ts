import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Todo } from 'src/app/model/todo';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-update-todo',
  templateUrl: './update-todo.component.html',
  styleUrls: ['./update-todo.component.css']
})
export class UpdateTodoComponent implements OnInit {
 todo=new Todo();

 constructor(private http:ApiService,private router:Router,private activatedRoute:ActivatedRoute){}

 ngOnInit(): void {
  //below line elp us to get the todoid from url route which we passed and mentioned in approuting.module
    const todoId=this.activatedRoute.snapshot.paramMap.get("todoId");
    this.http.getTodo(todoId || '').subscribe({
      next:(data)=>{
        this.todo=data;
      }
    });
  }

  updateTodo(){
    this.http.updateTodo(this.todo).subscribe({
      next:(data)=>{
        alert("TODO Updated Successfully!!");
        this.router.navigate(['view-todos'])
      },
      error:(error)=>{
        alert("Error in Updating Todo!!");
      }
    })
  }
}
