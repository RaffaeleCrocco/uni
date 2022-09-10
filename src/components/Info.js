import React from 'react';
import { Container, Row, Col } from "react-bootstrap";

const Info = () => {
    return (
        <Container className='px-5 my-4'>

                    <h3 className='text-center fw-bold mb-4'>Informazioni sul sito e Frequently Asked Questions (FAQ)</h3>
                    <p className="text-center text-small my-0 mx-4 px-1">
                        Lo <strong>scopo</strong> del sito è raccogliere e rendere disponibili appunti, dispense, raccolte dati e qualsiasi 
                        materiale che può essere <strong>utile alla preparazione</strong> degli esami del corso di ingegneria informatica. 
                        E' declinata agli utenti ogni responsabilità sull'uso improprio dei dati forniti e di qualsiasi materiale del sito, che contiene appunti personali 
                        e raccoglie esercizi di temi d'esame passati e pubblici. Per qualsiasi commento, richiesta e confronto rimango disponibile
                        all'indirizzo istituzionale raffaele.crocco@unitn.studenti.it. 
                    </p>

             
            
        </Container>
    );
};

export default Info;