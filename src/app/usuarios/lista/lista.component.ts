import {   Component, OnInit, ViewChild } from '@angular/core';
import { Usuario } from 'src/app/models/usuario.model';
import { UsuariosService } from 'src/app/services/usuarios.service';
import { NgxMasonryComponent, NgxMasonryOptions } from 'ngx-masonry';

import * as $ from 'jquery'

declare const masonry : any;

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {

  listaUsuarios: Usuario[]=[];
  

  public maronryOptions: NgxMasonryOptions = {
    gutter: 10,
  
    resize:true
    

  }

  @ViewChild('NgxMasonryComponent')
  masonry!: NgxMasonryComponent;
  
  constructor(private usuariosService: UsuariosService) { 
    
  }
  


  ngOnInit(): void {
    this.usuariosService.getUsers().subscribe ( (lista) =>
      this.listaUsuarios = lista
      )

    
  }



}
