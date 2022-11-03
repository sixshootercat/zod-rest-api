import { Router } from 'express';
import { login } from '../controllers/login.controller';
import { validateSchema } from '../middlewares/validate-schema.middleware';
import { loginSchema } from '../schemas/login';

const router = Router();

router.post('/login', validateSchema(loginSchema), login);

export default router;
