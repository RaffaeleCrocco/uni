import React from 'react';
import { Container, Badge, Alert } from "react-bootstrap";

import Accordion from 'react-bootstrap/Accordion';
const Courses = () => {
    return (
        <Container className='my-5'>
                    <Accordion flush>
                        <Accordion.Item eventKey="0" className='pe-none'>
                            <Accordion.Header>
                                <span className="text-secondary">Analisi 1</span> <span className='ms-auto'></span>
                            </Accordion.Header>
                            <Accordion.Body>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="1">
                            <Accordion.Header>
                                Analisi 2 <span className='ms-auto'></span>
                                <div className='tag ms-2 d-none d-md-block' bg="light">dispense <Badge>2</Badge></div>
                                <div className='tag ms-2 d-none d-md-block' bg="light">raccolta </div>
                                <div className='tag ms-2 d-none d-md-block' bg="light">utilità </div>
                            </Accordion.Header>
                            <Accordion.Body>
                                Il seguente <a href="https://drive.google.com/file/d/19h4baqBVek0iZOveR5BOVjHPAmxFsGnW/view?usp=sharing" rel="noreferrer" target="_blank" className="text-success fw-bold text-decoration-none">file</a> è 
                                una dispensa completa sul corso, consiglio di leggere con attenzione la legenda a pagina 1 per comprendere meglio l'uso del colore nel documento.
                                Per la preparazioneall'orale è stata sviluppata una <a href="https://drive.google.com/file/d/19NOILcnD-e-4D0_c9lb8M28qdPQoldUj/view?usp=sharing" rel="noreferrer" target="_blank" className="text-success fw-bold text-decoration-none">versione ridotta</a>, 
                                basandosi sul syllabus del corso riguardo alle conoscenze richieste per l'orale (che attenzione potrebbero essere variate negli anni). <br/>
                                Propongo inoltre una <a href="https://drive.google.com/file/d/1jiIg9pjFVq2nl3j8jx0cl5lSv2IgGFsg/view?usp=sharing" rel="noreferrer" target="_blank" className="text-success fw-bold text-decoration-none">raccolta</a> delle 
                                esercitazioni svolte; a questo proposito potresti trovare nuovi contenuti più aggiornati al link https://github.com/unitn-drive/analisi-2. <br/>
                                Se permesso durante l'esame consiglio il seguente <a href="https://drive.google.com/file/d/1ZiqnoDBQD5XqDLPo4iBKuACVWMJEPz7t/view?usp=sharing" rel="noreferrer" target="_blank" className="text-success fw-bold text-decoration-none">formulario</a>, 
                                sviluppato specificatamente sui contenuti di questo corso.<br/><br/>

                                <strong>TIP:</strong> per quanto l'esame possa sembrare complesso i contenuti del corso si riducono in 5/6 tipologie d'esercizi il cui svolgimento è abbastanza meccanico.
                                Per la preparazione allo scritto consiglio di specializzarsi su questi. Per la preparazione all'orale consiglio di non sottovalutare l'ordine dei passaggi nelle dimostrazioni
                                e la motivazione che li guida.

                                <Alert className='mt-3 tag '>
                                    Puoi contribuire al sito sviluppando un pdf che in aggiunta alla raccolta proposta includa i nuovi materiali forniti negli anni e
                                    inviandolo all'indirizzo proposto nella sezione "contribuisci" di questo sito.
                                </Alert>  

                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="2">
                            <Accordion.Header>
                                Calcolatori <span className='ms-auto'></span>
                                <div className='tag ms-2 d-none d-md-block' bg="light">dataset</div>
                            </Accordion.Header>
                            <Accordion.Body>
                                La seguente <a href="https://drive.google.com/drive/folders/1myU8hkWBVj7yjzMCkPfPi65zRXyq2t33?usp=sharing" rel="noreferrer" target="_blank" className="text-success fw-bold text-decoration-none">raccolta</a> contiene 
                                132 screen <strong>senza doppioni e con soluzioni</strong> di tutti gli esercizi di simulazione d'esame, sia completo che parziale,
                                contenuti nella cartella https://github.com/unitn-drive/calcolatori. Il vantaggio di usare questo dataset è l'assenza di duplicati e la possibilità
                                di scorrere tra i diversi esercizi. <br/><br/>
                                <strong>TIP:</strong> la preparazione, soprattuto per quanto riguarda le domande di teoria, basata unicamente su questi esercizi è sconsigliata. La pool di domande a cui l'esame attinge
                                nel generare la prova è molto più ampia di questa raccolta ed è costantemente aggiornata.
                                <Alert className='mt-3 tag '>
                                    Puoi contribuire al sito sviluppando un pdf con tutti gli esercizi seguiti da una breve spiegazione sul procedimento che ti ha portato alla soluzione e
                                    inviandolo all'indirizzo proposto nella sezione "contribuisci" di questo sito.
                                </Alert>  
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="3">
                            <Accordion.Header>
                                Circuiti elettronici digitali CED <span className='ms-auto'></span>
                                <div className='tag ms-2 d-none d-md-block' bg="light">raccolte <Badge>4</Badge></div>
                            </Accordion.Header>
                            <Accordion.Body>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                            minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                            aliquip ex ea commodo consequat. Duis aute irure dolor in
                            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                            culpa qui officia deserunt mollit anim id est laborum.
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="4">
                            <Accordion.Header>
                                Database DB  <span className='ms-auto'></span>
                                <div className='tag ms-2 d-none d-md-block' bg="light">dispensa </div>
                                <div className='tag ms-2 d-none d-md-block' bg="light">raccolta </div>
                            </Accordion.Header>
                            <Accordion.Body>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                            minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                            aliquip ex ea commodo consequat. Duis aute irure dolor in
                            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                            culpa qui officia deserunt mollit anim id est laborum.
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="5">
                            <Accordion.Header>
                                Fisica 1  <span className='ms-auto'></span>
                                <div className='tag ms-2 d-none d-md-block' bg="light">dispensa </div>
                                <div className='tag ms-2 d-none d-md-block' bg="light">utilità </div>
                            </Accordion.Header>
                            <Accordion.Body>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                            minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                            aliquip ex ea commodo consequat. Duis aute irure dolor in
                            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                            culpa qui officia deserunt mollit anim id est laborum.
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="6">
                            <Accordion.Header>
                                Fisica 2  <span className='ms-auto'></span>
                                <div className='tag ms-2 d-none d-md-block' bg="light">raccolta </div>
                            </Accordion.Header>
                            <Accordion.Body>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                            minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                            aliquip ex ea commodo consequat. Duis aute irure dolor in
                            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                            culpa qui officia deserunt mollit anim id est laborum.
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="7" className='pe-none'>
                            <Accordion.Header>
                                <span className="text-secondary">Geometria e algebra lineare</span>  <span className='ms-auto'></span>
                            </Accordion.Header>
                            <Accordion.Body>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                            minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                            aliquip ex ea commodo consequat. Duis aute irure dolor in
                            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                            culpa qui officia deserunt mollit anim id est laborum.
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="8">
                            <Accordion.Header>
                                Ingegneria del software  <span className='ms-auto'></span>
                                <div className='tag ms-2 d-none d-md-block' bg="light">utilità <Badge>4</Badge></div>
                            </Accordion.Header>
                            <Accordion.Body>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                            minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                            aliquip ex ea commodo consequat. Duis aute irure dolor in
                            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                            culpa qui officia deserunt mollit anim id est laborum.
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="9">
                            <Accordion.Header>
                                Internet of things IOT  <span className='ms-auto'></span>
                                <div className='tag ms-2 d-none d-md-block' bg="light">utilità <Badge>2</Badge></div>
                            </Accordion.Header>
                            <Accordion.Body>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                            minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                            aliquip ex ea commodo consequat. Duis aute irure dolor in
                            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                            culpa qui officia deserunt mollit anim id est laborum.
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="10">
                            <Accordion.Header>
                                Machine Learning ML  <span className='ms-auto'></span>
                                <div className='tag ms-2 d-none d-md-block' bg="light">raccolte <Badge>2</Badge> </div>
                                <div className='tag ms-2 d-none d-md-block' bg="light">utilità  <Badge>3</Badge> </div>
                                <div className='tag ms-2 d-none d-md-block' bg="light">dataset </div>
                            </Accordion.Header>
                            <Accordion.Body>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                            minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                            aliquip ex ea commodo consequat. Duis aute irure dolor in
                            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                            culpa qui officia deserunt mollit anim id est laborum.
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="11">
                            <Accordion.Header>
                                Network security NS  <span className='ms-auto'></span>
                                <div className='tag ms-2 d-none d-md-block' bg="light">raccolta </div>
                                <div className='tag ms-2 d-none d-md-block' bg="light">sito</div>
                                <div className='tag ms-2 d-none d-md-block' bg="light">dataset </div>
                                <div className='tag ms-2 d-none d-md-block' bg="light">dispensa </div>
                            </Accordion.Header>
                            <Accordion.Body>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                            minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                            aliquip ex ea commodo consequat. Duis aute irure dolor in
                            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                            culpa qui officia deserunt mollit anim id est laborum.
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="12">
                            <Accordion.Header>
                                Organizzazione e gestione aziendale OGA  <span className='ms-auto'></span>
                                <div className='tag ms-2 d-none d-md-block' bg="light">dispensa </div>
                                <div className='tag ms-2 d-none d-md-block' bg="light">sito </div>
                            </Accordion.Header>
                            <Accordion.Body>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                            minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                            aliquip ex ea commodo consequat. Duis aute irure dolor in
                            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                            culpa qui officia deserunt mollit anim id est laborum.
                            </Accordion.Body>
                        </Accordion.Item>

                        <Accordion.Item eventKey="13">
                        <Accordion.Header>
                                Probabilità  <span className='ms-auto'></span>
                                <div className='tag ms-2 d-none d-md-block' bg="light">dispensa </div>
                                <div className='tag ms-2 d-none d-md-block' bg="light"> utilità <Badge>2</Badge> </div>
                            </Accordion.Header>
                            <Accordion.Body>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                            minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                            aliquip ex ea commodo consequat. Duis aute irure dolor in
                            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                            culpa qui officia deserunt mollit anim id est laborum.
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="14">
                        <Accordion.Header>
                                Programmazione 2  <span className='ms-auto'></span>
                                <div className='tag ms-2 d-none d-md-block' bg="light"> raccolta </div>
                            </Accordion.Header>
                            <Accordion.Body>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                            minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                            aliquip ex ea commodo consequat. Duis aute irure dolor in
                            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                            culpa qui officia deserunt mollit anim id est laborum.
                            </Accordion.Body>
                        </Accordion.Item>

                        <Accordion.Item eventKey="15">
                        <Accordion.Header>
                                Propagazione mobile e wireless PMW  <span className='ms-auto'></span>
                                <div className='tag ms-2 d-none d-md-block' bg="light"> raccolta </div>
                            </Accordion.Header>
                            <Accordion.Body>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                            minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                            aliquip ex ea commodo consequat. Duis aute irure dolor in
                            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                            culpa qui officia deserunt mollit anim id est laborum.
                            </Accordion.Body>
                        </Accordion.Item>

                        <Accordion.Item eventKey="16">
                        <Accordion.Header>
                                Reti  <span className='ms-auto'></span>
                                <div className='tag ms-2 d-none d-md-block' bg="light"> dispensa </div>
                                <div className='tag ms-2 d-none d-md-block' bg="light"> raccolta </div>

                            </Accordion.Header>
                            <Accordion.Body>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                            minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                            aliquip ex ea commodo consequat. Duis aute irure dolor in
                            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                            culpa qui officia deserunt mollit anim id est laborum.
                            </Accordion.Body>
                        </Accordion.Item>
                        
                        <Accordion.Item eventKey="17">
                        <Accordion.Header>
                                Robotica  <span className='ms-auto'></span>
                                <div className='tag ms-2 d-none d-md-block' bg="light"> presentazione </div>
                                <div className='tag ms-2 d-none d-md-block' bg="light"> utilità </div>

                            </Accordion.Header>
                            <Accordion.Body>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                            minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                            aliquip ex ea commodo consequat. Duis aute irure dolor in
                            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                            culpa qui officia deserunt mollit anim id est laborum.
                            </Accordion.Body>
                        </Accordion.Item>

                        <Accordion.Item eventKey="18">
                        <Accordion.Header>
                                Sistemi Operativi SO  <span className='ms-auto'></span>
                                <div className='tag ms-2 d-none d-md-block' bg="light"> dispensa </div>
                            </Accordion.Header>
                            <Accordion.Body>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                            minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                            aliquip ex ea commodo consequat. Duis aute irure dolor in
                            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                            culpa qui officia deserunt mollit anim id est laborum.
                            </Accordion.Body>
                        </Accordion.Item>

                        <Accordion.Item eventKey="19">
                        <Accordion.Header>
                                Tecnologie dispositivi wireless TDW  <span className='ms-auto'></span>
                                <div className='tag ms-2 d-none d-md-block' bg="light"> raccolta </div>
                                <div className='tag ms-2 d-none d-md-block' bg="light"> utilità </div>
                            </Accordion.Header>
                            <Accordion.Body>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                            minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                            aliquip ex ea commodo consequat. Duis aute irure dolor in
                            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                            culpa qui officia deserunt mollit anim id est laborum.
                            </Accordion.Body>
                        </Accordion.Item>

                    </Accordion>
        </Container>
  );
}

export default Courses;