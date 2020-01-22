const PlayerController = require('../controllers/player.controller');

module.exports = app => {
    app.post('/api/players/new', PlayerController.createPlayer);
    app.get('/api/players/all', PlayerController.findAllPlayers);
    app.get('/api/players/:id', PlayerController.findOnePlayer);
    app.put('/api/players/update/:id', PlayerController.updatePlayer);
    app.delete('/api/players/delete/:id', PlayerController.deletePlayer);
}