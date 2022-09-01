
import { Action, createReducer, on, State} from '@ngrx/store';
import { Usuario } from 'src/app/models/usuario.model';
import * as usuariosActions from '../acctions';

export interface UsuariosState {
  users  : Usuario[],
  loaded : boolean,
  loading: boolean,
  error  : any
}



export const initialStateUsuarios: UsuariosState={
  users  : [],
  loaded : false,
  loading: false,
  error  : null
};

export const _usuariosReducer = createReducer(
  initialStateUsuarios,

  on(usuariosActions.cargarUsuarios, state =>  ({ ...state, loading: true })),

  on(usuariosActions.cargarUsuariosSuccess, (state,{usuarios}) =>  (
    {
      ...state,
      loading:false,
      loaded: true,
      users: [... usuarios]
    }
  )),
  on(usuariosActions.cargarUsuariosError, (state,{payload}) =>  (
    {
      ...state,
      loading:false,
      loaded: false,
      error: {
        url: payload.url,
        name: payload.name,
        message: payload.message
      }
    }
  )),

);

export function usuariosReducer(state: UsuariosState | undefined, action: Action ){
  return _usuariosReducer(state, action);
}