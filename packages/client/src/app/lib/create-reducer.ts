export interface ActionHandlers<TState> {
  [actionType: string]: (payload, state: TState) => TState;
}

export interface ActionWithPayload {
  type: string;
  payload?: any;
}

export function createReducer<TState>(
  handlers: ActionHandlers<TState>
): (state: TState, action: ActionWithPayload) => TState {
  return (state: TState, action: ActionWithPayload) =>
    !!handlers[action.type]
      ? handlers[action.type](action.payload, state)
      : state;
}
