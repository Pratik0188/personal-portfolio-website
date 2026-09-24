import { Router } from 'express';
import { sendMessage, getMessages, markAsRead } from '../controllers/contactController.js';
import { protect } from '../middleware/authMiddleware.js';
import { validateContactInput } from '../validators/contactValidator.js';

const router = Router();

router.post('/', validateContactInput, sendMessage);
router.get('/', protect, getMessages);
router.patch('/:id/read', protect, markAsRead);

export default router;