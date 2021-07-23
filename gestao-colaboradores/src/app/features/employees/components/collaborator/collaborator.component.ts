import { Component, Input, OnInit } from '@angular/core';
import { Employee } from 'src/app/features/models/employee.models';

@Component({
  selector: 'app-collaborator',
  templateUrl: './collaborator.component.html',
  styleUrls: ['./collaborator.component.scss']
})
export class CollaboratorComponent implements OnInit {

  @Input()
  employee?: Employee;

  columns: string[] = ['ID', 'Nome', 'Cargo', 'Salário'];

  constructor() { }

  ngOnInit(): void {
  }

  removeColaborator(){
    alert(`Colaborador ${this.employee?.nome} excluído com sucesso`)
  
  }

}
