import { Router } from 'express';
import auth from '../middleware/auth.js';
import { getMessages, submitMessage } from '../controllers/contactController.js';

const router = Router();
router.post('/', submitMessage);
router.get('/', auth, getMessages);

export default router;
