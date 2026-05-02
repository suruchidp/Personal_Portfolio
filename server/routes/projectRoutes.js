import { Router } from 'express';
import auth from '../middleware/auth.js';
import { createProject, deleteProject, getProjects, updateProject } from '../controllers/projectController.js';

const router = Router();
router.get('/', getProjects);
router.post('/', auth, createProject);
router.put('/:id', auth, updateProject);
router.delete('/:id', auth, deleteProject);

export default router;
