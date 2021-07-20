import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './components/list/list.component';
import { CollaboratorComponent } from './components/collaborator/collaborator.component';



@NgModule({
  declarations: [
    ListComponent,
    CollaboratorComponent
  ],
  imports: [
    CommonModule
  ], 
  exports: [ListComponent]
  
})
export class EmployeesModule { }
