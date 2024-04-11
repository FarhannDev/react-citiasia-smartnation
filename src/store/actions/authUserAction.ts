import { Dispatch } from '@reduxjs/toolkit';
import { hideLoading, showLoading } from 'react-redux-loading-bar';
import ActionType from '../../constants/ActionType';
import api from '../../utils/api/api';

interface Login {
  email: string;
  password: string;
}

interface LoginResponse {
  status: string;
  message: string;
  data: {
    token: string;
  };
}

const setAuthUserActionCreator = (authUser) => ({
  type: ActionType.SET_AUTH_USER,
  payload: { authUser },
});

const unsetAuthUserActionCreator = () => ({
  type: ActionType.SET_UNSET_AUTH_USER,
});

const asyncSetAuthUser =
  ({ email, password }: Login) =>
  async (dispatch: Dispatch) => {
    dispatch(showLoading());
    try {
      const token: LoginResponse = await api.login({ email, password });
      api.putAccessToken(token.data.token);

      const authUser = await api.getOwnProfile();
      dispatch(setAuthUserActionCreator(authUser));
    } catch (error) {
      alert(error.message);
    }

    dispatch(hideLoading());
  };

const asyncUnsetAuthUser = () => (dispatch: Dispatch) => {
  dispatch(unsetAuthUserActionCreator());

  api.putAccessToken('');
};

export {
  setAuthUserActionCreator,
  unsetAuthUserActionCreator,
  asyncSetAuthUser,
  asyncUnsetAuthUser,
};
