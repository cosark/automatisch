import { Router } from 'express';
import graphQLInstance from '../helpers/graphql-instance.js';
import webhooksRouter from './webhooks.js';
import paddleRouter from './paddle.ee.js';
import healthcheckRouter from './healthcheck.js';
import automatischRouter from './api/v1/automatisch.js';
import usersRouter from './api/v1/users.js';
import appAuthClientsRouter from './api/v1/app-auth-clients.js';
import adminAppAuthClientsRouter from './api/v1/admin/app-auth-clients.js';

const router = Router();

router.use('/graphql', graphQLInstance);
router.use('/webhooks', webhooksRouter);
router.use('/paddle', paddleRouter);
router.use('/healthcheck', healthcheckRouter);
router.use('/api/v1/automatisch', automatischRouter);
router.use('/api/v1/users', usersRouter);
router.use('/api/v1/app-auth-clients', appAuthClientsRouter);
router.use('/api/v1/admin/app-auth-clients', adminAppAuthClientsRouter);

export default router;
