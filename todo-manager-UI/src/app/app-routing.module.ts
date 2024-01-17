import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AddTodoComponent } from './pages/add-todo/add-todo.component';
import { ViewTodosComponent } from './pages/view-todos/view-todos.component';
import { UpdateTodoComponent } from './pages/update-todo/update-todo.component';
import { AuthenticationGuard } from './authenticaion.guard';

const routes: Routes = [
  {
    path:'',redirectTo:'home',pathMatch:'full'
  },
  {
    path:'home',component:HomeComponent,
    title:'Home - TODO Manager'
  },
  {
    path:'add-todo',component:AddTodoComponent,
    title:'Add Todo - TODO Manager',
    canActivate : [AuthenticationGuard]
  },
  {
    path:'view-todos',component:ViewTodosComponent,
    title:'View Todos - TODO Manager',
    canActivate : [AuthenticationGuard]
  },
  {
    path:'update-todo/:todoId',component:UpdateTodoComponent,
    title:'Update Todo - TODO Manager',
    canActivate : [AuthenticationGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
