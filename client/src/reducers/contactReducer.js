export const initialContactState = {
    values: { name: '', email: '', message: '' },
    errors: {},
    status: 'idle',
  };
  
  export function contactReducer(state, action) {
    switch (action.type) {
      case 'FIELD_CHANGE':
        return { ...state, values: { ...state.values, [action.field]: action.value } };
      case 'SET_ERRORS':
        return { ...state, errors: action.errors };
      case 'SUBMIT_START':
        return { ...state, status: 'submitting', errors: {} };
      case 'SUBMIT_SUCCESS':
        return { ...initialContactState, status: 'success' };
      case 'SUBMIT_ERROR':
        return { ...state, status: 'error', errors: { form: action.message } };
      case 'RESET':
        return initialContactState;
      default:
        return state;
    }
  }