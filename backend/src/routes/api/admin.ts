import { Router } from 'express';

import requireJwtAuth from '../../middleware/requireJwtAuth';
import requireAdmin from '../../middleware/requireAdmin';

const router = Router();

router.get('/add', requireAdmin, async (req, res) => {
    res.send("good")
});

export default router;
