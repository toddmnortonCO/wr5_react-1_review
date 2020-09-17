import React, { Component } from 'react';

export default class Pets extends Component {
    constructor() {
        super();
        this.state = {
            animals: [
                {
                    name: "Fido",
                    img: "https://placeimg.com/200/200/animals"
                },
                {
                    name: "Sparkles",
                    img: "https://placeimg.com/200/200/animals"
                },
                {
                    name: "Pookers",
                    img: "https://placeimg.com/200/200/animals"
                }
            ]

        }

    }
    render() {
        const animalsMapped = this.state.animals.map((animal, index) => {
            return (
                <div key={index}>
                    <h1>{animal.name}</h1>
                    <img src={animal.img} alt='Pet'/>
                </div>
            )
        });

        return (
            <main>
                { animalsMapped }
            </main>
        )
    }
}