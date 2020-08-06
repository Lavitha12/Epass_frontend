import { IndUser } from './ind-user';
import { OrgUser } from './org-user';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserserviceService {

  constructor(private http:HttpClient) { }

  public indpost(IndUser)
  {
    return this.http.post("http://localhost:8080/individual/save",IndUser,{responseType:'text' as 'json'});
  }
 
  public indgetall()
  {
    return this.http.get("http://localhost:8080/individual/getallusers");
  }

  public indgetbyName(name)
  {
    return this.http.get("http://localhost:8080/individual/getbyname/"+name);
  }

  public inddelete(name)
  {
    return this.http.delete("http://localhost:8080/individual/delete"+name);
  }

  public orgpost(OrgUser)
  {
    return this.http.post("http://localhost:8080/organisation/save",OrgUser,{responseType:'text' as 'json'});
  }

  public orggetall()
  {
    return this.http.get("http://localhost:8080/organisation/getallusers");
  }

  public orggetbyName(name)
  {
    return this.http.get("http://localhost:8080/organisation/getbyname/"+name);
  }

  public orgdelete(name)
  {
    return this.http.delete("http://localhost:8080/organisation/delete"+name);
  }

}
