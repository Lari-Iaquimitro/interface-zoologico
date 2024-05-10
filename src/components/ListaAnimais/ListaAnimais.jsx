import React, { useState, useEffect } from 'react';
import Table from 'react-bootstrap/Table';
import AnimalRequests from '../../fetch/AnimalRequests';
import { FaTrash } from "react-icons/fa";


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


    const deletarAnimal = async (id) => {
        const confirma = window.confirm(`Deseja deletar o animal com id ${id}?`);
        if(confirma){
                if(await AnimalRequests.deletarAnimal(id)) {
                    window.alert('Animal deletado com sucesso');
                    window.location.reload();
        } else{
            window.alert('Erro ao deletar animal');
        }
        }

    }
    return (
        <>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nome</th>
                        <th>Idade</th>
                        <th>Gênero</th>
                        <th>Envergadura</th>
                        <th>Ação</th>
                    </tr>
                </thead>
                <tbody>
                    {animais && animais.length > 0 ? (
                        animais.map(animal => (
                            <tr key={animal.idanimal}>
                                <td>{animal.idanimal}</td>
                                <td>{animal.nomeanimal}</td>
                                <td>{animal.idadeanimal}</td>
                                <td>{animal.generoanimal}</td>
                                <td>{animal.envergadura}</td>
                                <td onClick={() => deletarAnimal(animal.idanimal)}><FaTrash /></td>
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
