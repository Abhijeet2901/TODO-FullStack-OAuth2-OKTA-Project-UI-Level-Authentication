import { Component,EventEmitter,Input, Output} from '@angular/core';
import { Todo } from 'src/app/model/todo';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-todo-view',
  templateUrl: './todo-view.component.html',
  styleUrls: ['./todo-view.component.css']
})
export class TodoViewComponent {

  constructor(private http:ApiService){

  }

  @Input() todo:Todo=new Todo();
  @Output() deleteEvent:EventEmitter<string>=new EventEmitter();

  deleteTodo(id:string){
    this.http.deleteTodo(id).subscribe({
      next:(data)=>{
        this.deleteEvent.next(id);
        alert("Todo Deleted Successfully!!");
      },
      error:(error)=>{}
    }); 
  }

}
