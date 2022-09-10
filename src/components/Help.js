import React from 'react';
import { Container, Row, Col } from "react-bootstrap";

const Help = () => {
    return (
        <Container className='px-5'>

                    <h3 className='text-center fw-bold mb-4'>Sei in possesso di materiale utile da poter condividere?</h3>
                    <p className="text-center text-small my-0 mx-5 px-1">
                        Puoi contibuire in prima persona all'arricchimento del sito mandando all'indirizzo raffaele.crocco@unitn.studenti.it materiale <strong>di cui sei l'autore</strong>.
                        Dopo un rapido controllo sulla validità del contenuto esso verrà caricato sulla piattaforma, notificandoti del successo dell'operazione.
                        E' necessario che il materiale contenga un riferimento all'autore e un indirizzo email o telegram per poter essere eventualmente contattati dagli utenti.
                    </p>


            
        </Container>
    );
};

export default Help;