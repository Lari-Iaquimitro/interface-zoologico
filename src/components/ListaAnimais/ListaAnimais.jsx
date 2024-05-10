import React, { useState, useEffect } from 'react';
import Table from 'react-bootstrap/Table';
import CardAnimal from '../../components/CardAnimal/CardAnimal';

function ListaAnimais() {
    const [animais, setAnimais] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('http://localhost:3000/listar-aves');
                if (!response.ok) {
                    throw new Error('Erro ao buscar servidor');
                }
                const listaAnimais = await response.json();
                setAnimais(listaAnimais);
            } catch (error) {
                console.error('Erro: ', error);
            }
        };

        fetchData();
    }, []);

    return (
        <>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th scope='col'>Nome</th>
                        <th scope='col'>Idade</th>
                        <th scope='col'>Gênero</th>
                        <th scope='col'>Envergadura</th>
                    </tr>
                </thead>
                <tbody>
                    {animais && animais.length > 0 ? (
                        animais.map(animal => (
                            <tr key={animal.idanimal}>
                                <td>{animal.nomeanimal}</td>
                                <td>{animal.idadeanimal}</td>
                                <td>{animal.generoanimal}</td>
                                <td>{animal.envergadura}</td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan='4'>Carregando... Verifique se o servidor está funcionando</td>
                        </tr>
                    )}
                </tbody>
            </Table>
        </>
    );
}

export default ListaAnimais;
