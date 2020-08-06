import { UserserviceService } from './../userservice.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-indoperation',
  templateUrl: './indoperation.component.html',
  styleUrls: ['./indoperation.component.css']
})
export class IndoperationComponent implements OnInit {

  users:any;
  Name:string;
  constructor(private service: UserserviceService) { }

  public deleteuser(name:string)
  {
    let resp=this.service.inddelete(name);
    resp.subscribe((data)=>this.users=data);
    return "Deleted";
  }

  public findbyname()
  {
    let resp=this.service.indgetbyName(this.Name);
    resp.subscribe((data)=>this.users=data);
  }

  ngOnInit(): void {
    let resp=this.service.indgetall();
    resp.subscribe((data)=>this.users=data);
  }

}
