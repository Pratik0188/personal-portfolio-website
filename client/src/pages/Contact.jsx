import { useReducer, useEffect } from 'react';
import { contactReducer, initialContactState } from '../reducers/contactReducer.js';
import { validateContactForm } from '../utils/validators.js';
import { useLocalStorage } from '../hooks/useLocalStorage.js';
import axiosInstance from '../api/axiosInstance.js';

export default function Contact() {
  const [state, dispatch] = useReducer(contactReducer, initialContactState);
  const [draft, setDraft] = useLocalStorage('contact-draft', initialContactState.values);

  useEffect(() => {
    if (draft.name || draft.email || draft.message) {
      Object.entries(draft).forEach(([field, value]) => {
        dispatch({ type: 'FIELD_CHANGE', field, value });
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    dispatch({ type: 'FIELD_CHANGE', field: name, value });
    setDraft((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errors = validateContactForm(state.values);
    if (Object.keys(errors).length > 0) {
      dispatch({ type: 'SET_ERRORS', errors });
      return;
    }

    dispatch({ type: 'SUBMIT_START' });
    try {
      await axiosInstance.post('/contact', state.values);
      dispatch({ type: 'SUBMIT_SUCCESS' });
      setDraft(initialContactState.values);
    } catch (err) {
      dispatch({ type: 'SUBMIT_ERROR', message: err.response?.data?.message || 'Send failed' });
    }
  };

  return (
    <section>
      <h1>Contact</h1>
      {state.status === 'success' && <p>Thanks! Your message has been sent.</p>}
      <form onSubmit={handleSubmit} noValidate>
        <div className="form-field">
          <label htmlFor="name">Name</label>
          <input id="name" name="name" value={state.values.name} onChange={handleChange} />
          {state.errors.name && <span className="error-text">{state.errors.name}</span>}
        </div>

        <div className="form-field">
          <label htmlFor="email">Email</label>
          <input id="email" name="email" value={state.values.email} onChange={handleChange} />
          {state.errors.email && <span className="error-text">{state.errors.email}</span>}
        </div>

        <div className="form-field">
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            rows={5}
            value={state.values.message}
            onChange={handleChange}
          />
          {state.errors.message && <span className="error-text">{state.errors.message}</span>}
        </div>

        {state.errors.form && <p className="error-text">{state.errors.form}</p>}

        <button className="btn" type="submit" disabled={state.status === 'submitting'}>
          {state.status === 'submitting' ? 'Sending…' : 'Send message'}
        </button>
      </form>
    </section>
  );
}