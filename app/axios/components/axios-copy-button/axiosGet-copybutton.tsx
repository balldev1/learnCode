import { useState } from 'react';

export const AxiosGetCopybutton = () => {
    const [isCopied, setIsCopied] = useState(false);

    //code
    const codeChildren = `
    import { useState, useEffect } from 'react';
    import axios from 'axios';

    export const AxiosApiGet = () => {
    // state wait fetchData
    const [pokeMon, setPokemon] = useState<any[]>([]); // Specify the type as any[]
    // count poke
    const countPokemon = 5;
    // useEffect
    useEffect(() => {
        const fetchData = async () => {
            try {
                // ARRAY
                const pokemonArray = [];

                // GET POKE loop ข้อมูล แล้วไปเก็บที่ state poke จนครบค่า countPokemon ที่กำหนด
                for (let i = 1; i <= countPokemon; i++) {
                    const response =
                        await axios.get(\`https://pokeapi.co/api/v2/pokemon/\${i}\`);
                    // push response.data
                    pokemonArray.push(response.data);
                }
                // SET STATE
                setPokemon(pokemonArray);
                // console.log(pokemonArray);
            } catch (error) {
                console.error('Error in API request', error);
            }
        };

        fetchData();
    }, []);

    return (
        <div className="flex justify-center items-center gap-5">
            {/* Render pokeMon data here */}
            {pokeMon.map((pokemon, index) => (
                    <div key={index} className="flex flex-col border-2 border-sky-500
                     items-center justify-center p-5 rounded-md g">
                            <h2>{pokemon.name}</h2>
                            <img src={pokemon.sprites.front_default} alt={pokemon.name}/>
                    </div>
            ))}
        </div>
    );
    };

    `;

    // void copyCode
    const handleCopy = async () => {
        try {
            await navigator.clipboard.writeText(codeChildren);
            setIsCopied(true);
        } catch (error) {
            console.error('Failed to copy:', error);
        }
    };

    return (
        <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={handleCopy}
        >
            {isCopied ? 'Copied!' : 'Copy'}
        </button>
    );
};
