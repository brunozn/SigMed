import React, { Component } from 'react';
import './bodyclin.css';
import Bodycomp from '../bodycomp/bodycomp';

export default class bodyclin extends Component {
    render() {
        return (
            <div>
                <div className="container">
                    
                    <div  className="float-right">
                         <img className="img" src="img/med.jpg" alt=""/>
                    </div>
                    <div className="float-left">
                        <div className=" cardw" > 
                            <h4 id="bodyclinh4">SoftWare para Consultório e Clínicas Médicas</h4>
                            <h6 id="bodyclinh6">Sistema para Gerenciamento de Clínicas e consultórios Médicos.  Controle e Organização de qualquer lugar. </h6> 
                            <p id="bodyclinp">Veja o que o SigMed pode fazer por você faça um teste grátis</p>

                            <form>
                                <div className="form-group">
            
                                  <input type="text" className="cardI" name="nome" placeholder="Nome" />

                                </div>
                                <div className="form-group">
                                
                                  <input type="email" className="cardI" name="email" placeholder="Email" />
                                   
                                </div>

                                <div className="form-group">
                                    
                                 <input type="text" className="cardI" name="telefone" placeholder="Telefone" />
                                   
                                </div>
                                <button type="submit" className="but2">Teste Grátis</button>
                                </form>
                        </div>
                    </div>

                  
               </div>

               <div className="row faixa col-12">
                        <div className="faixa">
                                <h4 id="faixah4">Tecnologia, Mobilidade, Organização e gestão em nosso 
                                    sistema para sua Clínica e Consultório. </h4>
                        </div>
                 </div>

                 <Bodycomp />


           

            </div>


        )
    }
}
