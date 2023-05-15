import { useReducer } from "react";
import type { Mode, Option } from "../types/types";
enum ActionType {
  ADD = "ADD",
  REMOVE = "REMOVE",
  CLEAR = "CLEAR",
}

type ActionTypeWithPayload = ActionType.ADD | ActionType.REMOVE;
type ActionTypeWithoutPayload = ActionType.CLEAR;

type ActionWithPayload = {
  type: ActionTypeWithPayload;
  payload: Option;
};
type ActionWithoutPayload = {
  type: ActionTypeWithoutPayload;
};

type Action = ActionWithPayload | ActionWithoutPayload;
type OptionCollection = Array<Option>;
type State = OptionCollection;

const defaultState = [] satisfies State;

const useSelectedOptions = (mode: Mode): [State, React.Dispatch<Action>] => {
  const reducer = (state: State, action: Action): State => {
    switch (action.type) {
      case ActionType.ADD: {
        return mode === "multi" ? [...state, action.payload] : [action.payload];
      }
      case ActionType.REMOVE: {
        const filteredOptions = state.filter(
          (option) => option.id !== action.payload.id
        );
        return filteredOptions;
      }
      case ActionType.CLEAR:
        return [];
      default:
        return state;
    }
  };

  return useReducer(reducer, defaultState);
};

export default useSelectedOptions;
export { ActionType };
