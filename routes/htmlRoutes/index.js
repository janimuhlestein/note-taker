const path = require('path');
const router = require('express').Router();

//display the notes page
router.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '../../Develop/public/notes.html'));
});

//display the main page
router.get('/', (req, res)=> {
    res.sendFile(path.join(__dirname, '../../Develop/public/index.html'));
});

module.exports = router;