import express from 'express';
import path from 'path';

const router = express.Router();

const index = path.resolve(__dirname, '../../dist/index.html');

router.get('*', (req, res) => {
  res.sendFile(index);
});

export default router;
