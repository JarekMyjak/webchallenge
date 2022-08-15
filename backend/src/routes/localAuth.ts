
import { Router } from 'express';

const router = Router();

// logout
router.get('/logout', (req, res) => {
    req.logout((err)=>{
        console.warn(err)
    });
    res.send(false);
  });

  
export default router;