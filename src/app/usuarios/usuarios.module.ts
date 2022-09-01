import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListaComponent } from './lista/lista.component';
import { UsuarioComponent } from './usuario/usuario.component';

import { NgxMasonryModule } from 'ngx-masonry';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';



@NgModule({
  declarations: [
    ListaComponent,
    UsuarioComponent
  ],
  imports: [
    CommonModule,
    NgxMasonryModule,
    BrowserAnimationsModule,
    FontAwesomeModule
  ],
  exports: [
    ListaComponent,
    UsuarioComponent
  ]
})
export class UsuariosModule { }
