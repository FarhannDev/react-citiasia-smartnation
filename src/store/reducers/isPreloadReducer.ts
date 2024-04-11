/* eslint-disable @typescript-eslint/no-explicit-any */
import ActionType from '../../constants/ActionType';

const isPreloadReducer = (
  isPreload: boolean = true,
  action: any = {}
): boolean => {
  switch (action.type) {
    case ActionType.SET_IS_PRELOAD:
      return action.payload.isPreload;
    default:
      return isPreload;
  }
};

export default isPreloadReducer;
