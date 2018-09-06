import express from 'express';

import auth from '../auth/auth.js';

const router = express.Router();

router.get('/signin', auth, (req, res) => {
  res.cookie('token', req.token);
  res.send(req.token);
});

export default router;