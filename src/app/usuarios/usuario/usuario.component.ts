import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import { Store } from '@ngrx/store';
import { filter } from 'rxjs/operators';
import { AppState } from 'src/app/app.reducers';
import { Usuario } from 'src/app/models/usuario.model';
import * as actions from '../../store/acctions'

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styles: [
  ]
})
export class UsuarioComponent implements OnInit {

  user!: Usuario | null;
  loading: boolean = false;
  camera = faSpinner;

  constructor(
    private store: Store<AppState>,
    private route: ActivatedRoute
    ) { }

  ngOnInit(): void {


    this.route.params.subscribe(
      
      ({id}) => this.store.dispatch(actions.cargarUsuario({id}))
      
    )

    

    this.store.select('usuario')
      .pipe(
        filter( ({user}) => user !== null)
      )
    .subscribe(
      ({user, loading} ) => {
        this.user = user
        this.loading = loading
      }
    )
  }

}
