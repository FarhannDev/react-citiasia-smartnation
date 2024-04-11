import ActionType from '../../constants/ActionType';

interface AuthUser {
  // Definisikan tipe data untuk authUser sesuai kebutuhan aplikasi Anda
}

const authUserReducer = (
  authUser: AuthUser | null = null,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  action: any = {}
): AuthUser | null => {
  switch (action.type) {
    case ActionType.SET_AUTH_USER:
      return action.payload.authUser;
    case ActionType.SET_UNSET_AUTH_USER:
      return null;
    default:
      return authUser;
  }
};

export default authUserReducer;
