import { SET_LANGUAGE } from "./constants";

export interface AppInitialState {
  language: String;
}

const initialState: AppInitialState = {
  language: "en",
};
export default function lists(state = initialState, action: any) {
  const { type, payload } = action;
  switch (type) {
    default:
      return state;
    case SET_LANGUAGE:
      return { ...state, language: payload.language };
  }
}
