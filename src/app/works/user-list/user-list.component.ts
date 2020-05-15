import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  public isEditBtn: boolean = false

  users: Array<object> = [{
    userLogin: 'IgorKoren',
    userPassword: 'pas123',
    userEmail: 'ikoren@gmail.com'
  }]
  userObgForEdit:any
  activeIndex:number
  userTemp: IUser
  loginId:string
  password:string
  emailtext:string


  constructor() { }

  ngOnInit(): void {
  }
  addUserFun(log: string, pas: string, email: string) {
    this.userTemp = {
      userLogin: log,
      userPassword: pas,
      userEmail: email
    }
    console.log(log);
    console.log(pas);
    console.log(email);
    this.users.unshift(this.userTemp)
    console.log(this.users);
    this.loginId = ''
    this.password = ''
    this.emailtext = ''
  }
  deleteBtnFun(ind: number): void {
    console.log(ind);
    this.users.splice(ind, 1)
    console.log(this.users);
  }
  editBtnFun(ind):void{
    this.activeIndex = ind
    // console.log(ind);
    this.isEditBtn = ! this.isEditBtn
    // console.log(this.users[ind]);
   this.userObgForEdit = this.users[ind]
    console.log( typeof this.userObgForEdit);
    this.loginId = this.userObgForEdit.userLogin
    this.password = this.userObgForEdit.userPassword
    this.emailtext = this.userObgForEdit.userEmail

  }
  saveBtn():void{
    console.log('saveBtn');
    console.log(this.activeIndex, 'this.activeIndex');
    this.userTemp = {
      userLogin: this.loginId,
      userPassword: this.password,
      userEmail: this.emailtext
    }
    // let use:IUser = {this.loginId, this.password, this.emailtext}
    this.users.splice(this.activeIndex, 1, this.userTemp)
    this.loginId = ''
    this.password = ''
    this.emailtext = ''
    this.isEditBtn = ! this.isEditBtn
  }
}

interface IUser {
  userLogin: string,
  userPassword: string,
  userEmail: string
}
