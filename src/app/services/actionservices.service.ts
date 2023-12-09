import { Injectable } from '@angular/core';
import { action } from '../models/action';
import { membre } from '../models/membre';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ActionservicesService {
  constructor(private httpclient:HttpClient ) { }
  
  getResponsable( ):Observable<membre[]>{
    return this.httpclient.get<membre[]>("http://localhost:3000/responsable")
  }
  getAction():Observable<action[]>
  {return this.httpclient.get<action[]>("http://localhost:3000/actions")}
  getActionById(id:number):Observable<action>{
return this.httpclient.get<action>("http://localhost:3000/actions/"+id)
  }

  deleteAction(id:any):Observable<action>{
return this.httpclient.delete<action>("http://localhost:3000/actions/"+id)
  }
  addEvent(action:action):Observable<action[]>{
    return this.httpclient.post<action[]>("http://localhost:3000/actions",action)

  }
  modifyEvent(id:number,action:action):Observable<action>
  {
return this.httpclient.put<action>("http://localhost:3000/actions/"+id,action)
  }
}
