import './Animais.css'
import React, { useEffect, useState } from 'react';
import CardAnimal from '../../components/CardAnimal/CardAnimal';
import Navegacao from '../../components/Navegacao/Navegacao';

function Animais() {

    // RECUPERANDO LISTA DE ANIMAIS DO SERVIDOR
    const [animais, setAnimais] = useState(null);

    // Recupera a lista de todos os animais do servidor
    useEffect(() => {
        const fetchData = async () => {
                setAnimais(await AnimalRequests.listaAnimais());
            }

        fetchData();
    }, []);

    return (
        <>
            <Navegacao />
            <div className='ctn-animais'>
                {animais ? (
                    // Renderize o seu componente para cada item da lista
                    animais.map(animal => (
                        <CardAnimal key={animal.idanimal} animal={animal} />
                    ))
                ) : (
                    <p>Carregando...</p>
                )}
            </div>
        </>
    );
}

export default Animais;