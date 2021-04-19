import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Book } from './user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
private baseUrl="http://localhost:8079/users";
private updateUrl:"http://localhost:8079/getByBookId/";
  constructor(private http: HttpClient) { }
  getUsers(): Observable<Book[]>{
    return this.http.get<Book[]>(`${this.baseUrl}`);
     }
  
  bookname: string;
  authorname:string;
  private url="http://localhost:8079//bookSave";
  postData(user:Book): Observable<Object>{
  return this.http.post(`${this.url}`,user)
  }
 
 getBookById(id:number): Observable<Book>{
   return this.http.get<Book>('http://localhost:8079/getByBookId/'+id);
  }

private upUrl:"http://localhost:8079/updateByBookId";
  updateBook(id: number, user:Book):Observable<object>{
    return this.http.put('http://localhost:8079/updateByBookId/'+id ,user);
  }
  deleteBook(id:number):Observable<object>{
    return this.http.delete('http://localhost:8079/deleteByBookId/'+id);
  }
}
