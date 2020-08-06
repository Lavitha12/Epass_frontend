import { UserserviceService } from './../userservice.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-orgoperation',
  templateUrl: './orgoperation.component.html',
  styleUrls: ['./orgoperation.component.css']
})
export class OrgoperationComponent implements OnInit {

  users:any;
  Name:string;
  constructor(private service: UserserviceService) { }

  public deleteuser(name:string)
  {
    let resp=this.service.orgdelete(name);
    resp.subscribe((data)=>this.users=data);
    return "Deleted";
  }

  public findbyname()
  {
    let resp=this.service.orggetbyName(this.Name);
    resp.subscribe((data)=>this.users=data);
  }

  ngOnInit(): void {
    let resp=this.service.orggetall();
    resp.subscribe((data)=>this.users=data);
  }

}
