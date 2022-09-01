import {   Component, OnInit, ViewChild } from '@angular/core';
import { Usuario } from 'src/app/models/usuario.model';
import { NgxMasonryComponent, NgxMasonryOptions } from 'ngx-masonry';

import { AppState } from 'src/app/app.reducers';
import { Store } from '@ngrx/store';
import { cargarUsuarios } from 'src/app/store/acctions';
import { faSpinner } from '@fortawesome/free-solid-svg-icons'



declare const masonry : any;

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {
  
  listaUsuarios: Usuario[]=[];
  
  loading: boolean = false;
  error: any;
  
  
  
  camera = faSpinner;
  
  
  public maronryOptions: NgxMasonryOptions = {
    gutter: 10,
    
    resize:true
    
    
  }
  
  @ViewChild('NgxMasonryComponent')
  masonry!: NgxMasonryComponent;
  
  constructor( private store: Store<AppState> ) { 
    
 
    
  }
  


  ngOnInit(): void {
    
    this.store.dispatch(cargarUsuarios());

    this.store.select('usuarios').subscribe( ({ users, loading, error }) => {
      this.listaUsuarios = users;
      this.loading       = loading,
      this.error         = error
    })
    
    /* this.usuariosService.getUsers().subscribe ( (lista) =>
      this.listaUsuarios = lista
      ) */

    
  }



}
