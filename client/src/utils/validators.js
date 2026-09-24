export function validateContactForm(values) {
    const errors = {};
  
    if (!values.name.trim()) errors.name = 'Name is required';
  
    if (!values.email.trim()) {
      errors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
      errors.email = 'Enter a valid email address';
    }
  
    if (!values.message.trim()) {
      errors.message = 'Message cannot be empty';
    } else if (values.message.trim().length < 10) {
      errors.message = 'Message should be at least 10 characters';
    }
  
    return errors;
  }