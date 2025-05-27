import { Component, OnInit } from '@angular/core';
import Employee from '../../../../model/Employee';
import EmployeeService from '../../../../service/EmployeeService';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-manage',
  imports: [FormsModule,CommonModule],
  templateUrl: './manage.component.html',
  styleUrl: './manage.component.css'
})
export class ManageComponent implements OnInit {

  
  constructor(private employeeService:EmployeeService){}


    public employee: Employee = {
      employeeId: 0,
      name: '',
      email: '',
      department: '',
      createdDate: '',
      modifiedDate: ''
    };
    
  public updatedemployee = {
    name: '',
    email:"",
    department:"",
    modifiedDate:""
  };
  
    employeeList : Employee[]= []
    filteredEmployees: Employee[] = [];
    isUpdateModalOpen:boolean=false;
    today:string ='';
    search: string = '';
    selectedDepartment: string = '';


    ngOnInit(): void {
      const date = new Date();
      this.today = date.toISOString().split('T')[0]
      this.loadAll()
    }

    closeUpdateModal(){
      this.isUpdateModalOpen=false;
    }

    openModel(employee: Employee) {
      this.employee = employee; 
   
      this.updatedemployee.name = employee.name;
      this.updatedemployee.email = employee.email;
      this.updatedemployee.department = employee.department;
      this.updatedemployee.modifiedDate = this.today;
    
      this.isUpdateModalOpen = true;
    }
    

    loadAll(){
      this.employeeService.getAll().subscribe(res=>{
        this.employeeList=res;
        this.filterEmployees();
      })
    }

    deleteEmployee(employeeId:number){
      this.employeeService.delete(employeeId).subscribe(res=>{alert("Deleted Susscesfully ! ")})
    }

    updateProfile(){

      const nameRegex = /^[A-Za-z ]{1,100}$/;
      const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
      const updatedEmployee : Employee ={
        ...this.employee,
        name:this.updatedemployee.name ? this.updatedemployee.name.trim() : '',
        email:this.updatedemployee.email ? this.updatedemployee.email.trim() : '',
        department:this.updatedemployee.department ? this.updatedemployee.department.trim() : '',
        modifiedDate:this.updatedemployee.modifiedDate ? this.updatedemployee.modifiedDate.trim() : ''

      };
        this.employeeService.update(this.employee.employeeId, updatedEmployee).subscribe(
          res => {
            alert("Updated")
            this.employee = res;
            this.closeUpdateModal();
        },
          error => {
            alert(error)
        }
      );
    }


    filterEmployees() {
      this.filteredEmployees = this.employeeList.filter(employee =>
        (employee.name.toLowerCase().includes(this.search.toLowerCase()) ||
         employee.email.toLowerCase().includes(this.search.toLowerCase()) ||
         employee.department.toLowerCase().includes(this.search.toLowerCase())) &&
        (this.selectedDepartment === '' || employee.department.toLowerCase() === this.selectedDepartment.toLowerCase())
      );
    }
    
    onSearchChange() {
      this.filterEmployees();
    }
    
    onDepartmentChange() {
      this.filterEmployees();
    }
    
    resetFilters() {
      this.search = '';
      this.selectedDepartment = '';
      this.filterEmployees();
    }
}
