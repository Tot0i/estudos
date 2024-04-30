import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Cliente } from '../classes/pessoa';


@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrl: './cliente.component.css'
})
export class ClienteComponent implements OnInit{
  formCliente: FormGroup = new FormGroup({
    nome: new FormControl(''),
    tipo: new FormControl(''),
    genero: new FormControl(''),
    dataNascimento: new FormControl(''),
    observacao: new FormControl(''),
    inativo: new FormControl('')
  });

    ngOnInit(): void {
      this.createForm(new Cliente());
    }

    createForm(cliente: Cliente){
      this.formCliente.setValue({
        nome: cliente.nome || '',
        tipo: cliente.tipo || '',
        genero: cliente.genero || '',
        dataNascimento: cliente.dataNascimento || '',
        observacao: cliente.dataNascimento || '',
        inativo: cliente.dataNascimento || ''
      })
    }

    onSubmit(){
      console.log(this.formCliente.value);
    }
}


