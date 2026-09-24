import { Router } from 'express';
import { register, login, getMe } from '../controllers/authController.js';
import { protect } from '../middleware/authMiddleware.js';
import { validateAuthInput } from '../validators/contactValidator.js';
import { authLimiter } from '../middleware/rateLimiter.js';

const router = Router();

router.post('/register', authLimiter, validateAuthInput, register);
router.post('/login', authLimiter, validateAuthInput, login);
router.get('/me', protect, getMe);

export default router;