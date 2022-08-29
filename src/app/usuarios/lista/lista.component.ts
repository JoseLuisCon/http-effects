import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Usuario } from 'src/app/models/usuario.model';
import { UsuariosService } from 'src/app/services/usuarios.service';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit, AfterViewInit {

  listaUsuarios: Usuario[]=[];

  @ViewChild('grid') refGrid!: HTMLDivElement;
  
  constructor(private usuariosService: UsuariosService) { 

  }


  ngAfterViewInit(): void {
    
    
    
  
  }

  ngOnInit(): void {
    this.usuariosService.getUsers().subscribe ( (lista) =>
      this.listaUsuarios = lista
      )

      
      
  }

}
