import { Container, Grid } from '@mui/material'
import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar'
import PokemonCard from '../components/PokemonCard'
import axios from 'axios';
import { Skeletons } from '../components/Skeletons';

export const Home = () => {

    const [pokemons, setPokemons] = useState([])
    const [origList, setOrigList] = useState([])

    useEffect(() => {
        getPokemons()
    }, [])

    const getPokemons = () => {
        let endpoints = []
        for (let i = 1; i < 200; i++) {
            endpoints.push(`https://pokeapi.co/api/v2/pokemon/${i}/`)
        }
        axios.all(endpoints.map((endpoint) => axios.get(endpoint))).then((res) => {
            setPokemons(res)
            setOrigList(res)
        })
    }

    const pokemonFilter = (name) => {
        let filteredPokemons = []
        // if (name === '') {
        //     getPokemons()
        // }
        for (let i in origList) {
            if (origList[i].data.name.includes(name)) {
                filteredPokemons.push(origList[i])
            }
            setPokemons(filteredPokemons)
        }
    }

    return (
        <div>
            <Navbar pokemonFilter={pokemonFilter} />
            <Container maxWidth="false">
                {pokemons.length === 0 && origList.length === 0 ? (<Skeletons />) : pokemons.length === 0 ? 'No Pokémons Found' : (
                    <Grid container spacing={3}>
                        {pokemons.map(({ data }, key) => (
                            <Grid item xs={12} sm={6} md={4} lg={2} key={key}>
                                <PokemonCard name={data.name} image={data.sprites.front_default} types={data.types} />
                            </Grid>
                        ))}
                    </Grid>
                )}
            </Container>
        </div>
    )
}