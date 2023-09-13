
import express from 'express';

let router = express.Router();

router.post('/api/users/signout', (req, res) => {
    console.log('Hi there!');
});

export { router as signoutRouter };
