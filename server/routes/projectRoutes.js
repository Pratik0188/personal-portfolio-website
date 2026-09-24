import { Router } from 'express';
import {
  getProjects,
  getProjectById,
  createProject,
  updateProject,
  deleteProject,
} from '../controllers/projectController.js';
import { protect, authorize } from '../middleware/authMiddleware.js';
import upload from '../middleware/uploadMiddleware.js';

const router = Router();

router.get('/', getProjects);
router.get('/:id', getProjectById);

router.post('/', protect, authorize('admin'), upload.single('image'), createProject);
router.put('/:id', protect, authorize('admin'), upload.single('image'), updateProject);
router.delete('/:id', protect, authorize('admin'), deleteProject);

export default router;