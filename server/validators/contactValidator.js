export function validateContactInput(req, res, next) {
    const { name, email, message } = req.body;
    const errors = [];
  
    if (!name || !name.trim()) errors.push('Name is required');
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) errors.push('A valid email is required');
    if (!message || message.trim().length < 10) errors.push('Message must be at least 10 characters');
  
    if (errors.length > 0) {
      return res.status(400).json({ message: errors.join(', ') });
    }
    next();
  }
  
  export function validateAuthInput(req, res, next) {
    const { email, password } = req.body;
    const errors = [];
  
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) errors.push('A valid email is required');
    if (!password || password.length < 6) errors.push('Password must be at least 6 characters');
  
    if (errors.length > 0) {
      return res.status(400).json({ message: errors.join(', ') });
    }
    next();
  }