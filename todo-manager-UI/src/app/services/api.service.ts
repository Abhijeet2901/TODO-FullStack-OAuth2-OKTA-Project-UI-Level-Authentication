import { HttpClient,HttpHeaders} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Todo } from '../model/todo';
import { OAuthService } from 'angular-oauth2-oidc';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private oauthService: OAuthService,private httpService:HttpClient) { }

  baseUrl:string="http://localhost:8080/note";

  getAllTodos(){
    let token = this.oauthService.getAccessToken()
    //console.log('Using token = ' + token)

    // set the Authorization header
    let hdr = new HttpHeaders();
    hdr = hdr.set('Authorization', `Bearer ${token}`);
    return this.httpService.get<Todo[]>(this.baseUrl+"/get/all", { headers: hdr });
  }

  getTodo(id:string){
    // let queryParams = new HttpParams();
    // queryParams.append("id",id);
    // console.log(this.baseUrl+"/get",{params:queryParams});

    let token = this.oauthService.getAccessToken()
    //console.log('Using token = ' + token)

    // set the Authorization header
    let hdr = new HttpHeaders();
    hdr = hdr.set('Authorization', `Bearer ${token}`);
    return this.httpService.get<Todo>(this.baseUrl+"/get/"+id, { headers: hdr });
  }

  addTodo(todo:Todo){
    let token = this.oauthService.getAccessToken()
    //console.log('Using token = ' + token)

    // set the Authorization header
    let hdr = new HttpHeaders();
    hdr = hdr.set('Authorization', `Bearer ${token}`);
    return this.httpService.post(this.baseUrl+"/create",todo, { headers: hdr });
  }

  updateTodo(todo:Todo){
    let token = this.oauthService.getAccessToken()
    //console.log('Using token = ' + token)

    // set the Authorization header
    let hdr = new HttpHeaders();
    hdr = hdr.set('Authorization', `Bearer ${token}`);
    return this.httpService.put(this.baseUrl+"/update",todo, { headers: hdr });
  }

  deleteTodo(id:string){
    // let queryParams = new HttpParams();
    // queryParams.append("id",id);

    let token = this.oauthService.getAccessToken()
    //console.log('Using token = ' + token)

    // set the Authorization header
    let hdr = new HttpHeaders();
    hdr = hdr.set('Authorization', `Bearer ${token}`);


    //Error faced while deleting:
    //"HttpErrorResponse", "message": "Http failure during parsing for http://localhost:8080/not/delete/21"
    //Soln: responseType: 'text' to be added
    return this.httpService.delete(this.baseUrl+"/delete/"+id, { headers: hdr,responseType: 'text' });
  }
}
