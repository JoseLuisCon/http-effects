import { Injectable } from '@angular/core'
import { Actions, createEffect, ofType } from '@ngrx/effects'

import { catchError, exhaustMap, map, of } from 'rxjs'
import { UsuariosService } from 'src/app/services/usuarios.service'
import * as usuarioActions from '../acctions'

@Injectable()
export class UsusarioEffects {
  constructor(
    private actions$: Actions,
    private usuariosService: UsuariosService,
  ) {}

  cargarUsuario$ = createEffect(() =>
    this.actions$.pipe(
      ofType(usuarioActions.cargarUsuario),
      exhaustMap((action) =>
        this.usuariosService.getUserbyId(action.id).pipe(
          map( user => usuarioActions.cargarUsuarioSuccess({ usuario: user })
          ),
          catchError((error) =>
            of(usuarioActions.cargarUsuarioError({ payload: error })),
          ),
        ),
      ),
    ),
  )
}
