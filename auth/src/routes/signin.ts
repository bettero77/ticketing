import express from 'express';

let router = express.Router();

router.post('/api/users/signin', (req, res) => {
    console.log('Hi there!');
});

export { router as signinRouter };
