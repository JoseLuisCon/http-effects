import { Injectable } from '@angular/core'
import { Actions, createEffect, ofType } from '@ngrx/effects'

import { catchError, exhaustMap, map, mergeMap, of } from 'rxjs'
import { UsuariosService } from 'src/app/services/usuarios.service'
import * as usuariosActions from '../acctions'

@Injectable()
export class UsusariosEffects {
  constructor(
    private actions$: Actions,
    private usuariosService: UsuariosService,
  ) {}

  cargarUsuarios$ = createEffect(() =>
    this.actions$.pipe(
      ofType(usuariosActions.cargarUsuarios),
      exhaustMap(() =>
        this.usuariosService.getUsers().pipe(
          map((users) =>
            usuariosActions.cargarUsuariosSuccess({ usuarios: users }),
          ),
          catchError((error) =>
            of(usuariosActions.cargarUsuariosError({ payload: error })),
          ),
        ),
      ),
    ),
  )
}
