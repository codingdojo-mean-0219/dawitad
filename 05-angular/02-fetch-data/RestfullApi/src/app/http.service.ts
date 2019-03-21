import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient) {
    // this.getTasks();
   }
   getTasks() {
    return this._http.get('/tasks');
  }

  getTask(id) {
    return this._http.get('/tasks/' + id);
  }

  createTask(task) {
    return this._http.post('/tasks', task);
  }

  editTask(id, task) {
    return this._http.put('/tasks/' + id, task);
  }

  deleteTask(id) {
    return this._http.delete('/tasks/' + id);
  }
} 
//    getTasks(){
//     // our http response is an Observable, store it in a variable
//     let tempObservable = this._http.get('/tasks');
//     // subscribe to the Observable and provide the code we would like to do with our data from the response
//     tempObservable.subscribe(data => console.log("Got our tasks!", data));
//  }
// }
