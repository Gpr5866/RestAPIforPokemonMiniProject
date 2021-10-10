import express from 'express';
import { v4 as uuidv4 } from 'uuid';
import Chance from 'chance';


const router = express.Router();

var chance = new Chance();
var catchChance = chance.bool({ likelihood: 50 });


let pokemon = []

//all aroutes in here are starting with /pokemon
router.get('/', (req, res) => {
    console.log(pokemon);
    res.send(pokemon);
});

router.post('/', (req, res) => {
    var catchChance = chance.bool({ likelihood: 50 });
    console.log(catchChance);
    if (catchChance === true) {
        const myPokemon = req.body;
        pokemon.push({ ...myPokemon, idPokemon: uuidv4() });
        res.send(`User With the name ${myPokemon.firstName} added to the database`);
    } else {
        res.send('coba lagi');
    }


});

router.get('/:idPokemon', (req, res) => {
    const { idPokemon } = req.params;
    const foundUSer = pokemon.find((pokemon) => pokemon.idPokemon === idPokemon);
    res.send(foundUSer);
});

router.delete('/:idPokemon', (req, res) => {
    var releaseChance = chance.prime({ min: 1, max: 10 });
    console.log(releaseChance);
    if (releaseChance === 1 || releaseChance === 3 || releaseChance === 5 || releaseChance === 7){
        const { idPokemon } = req.params;
        const deleteUser = pokemon.find((pokemon) => pokemon.idPokemon === idPokemon);
    
        const index = pokemon.indexOf(deleteUser);
        pokemon.splice(index, 1);
    
        res.send(deleteUser);
    } else {
        res.send('coba lagi');
    }

    

});

router.put('/:idPokemon', (req, res) => {
    const { idPokemon } = req.params;
    const updateUser = pokemon.find((pokemon) => pokemon.idPokemon === idPokemon);

    updateUser.namaPokemon = req.body.namaPokemon;
    updateUSer.editPokemon = req.body.editPokemon;
    res.send(updateUser);
});

export default router;