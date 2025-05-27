export default class Employee{
  employeeId:number
  name:string
  email:string
  department:string
  createdDate:string
  modifiedDate:string

  constructor(
  employeeId:number,
  name:string,
  email:string,
  department:string,
  createdDate:string,
  modifiedDate:string

  ){
    this.employeeId = employeeId;
    this.name = name ;
    this.email = email ;
    this.department = department;
    this.createdDate = createdDate;
    this.modifiedDate=modifiedDate;
  }

}
