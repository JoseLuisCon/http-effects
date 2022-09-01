
import { Action, createReducer, on, State} from '@ngrx/store';
import { Usuario } from 'src/app/models/usuario.model';
import * as UsuarioActions from '../acctions';

export interface UsuarioState {
  id     : string | null,
  user   : Usuario | null,
  loaded : boolean,
  loading: boolean,
  error  : any
}



export const initialStateUsuario: UsuarioState={
  id     : null,
  user   : null,
  loaded : false,
  loading: false,
  error  : null
};

export const _usuarioReducer = createReducer(
  initialStateUsuario,

  on(UsuarioActions.cargarUsuario, (state,{id}) =>  ({
     ...state, 
     loading: true,
     id
    })),

  on(UsuarioActions.cargarUsuarioSuccess, (state,{usuario}) =>  (
    {
      ...state,
      loading:false,
      loaded: true,
      user: { ... usuario}
    }
  )),
  on(UsuarioActions.cargarUsuarioError, (state,{payload}) =>  (
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

export function usuarioReducer(state: UsuarioState | undefined, action: Action ){
  return _usuarioReducer(state, action);
}