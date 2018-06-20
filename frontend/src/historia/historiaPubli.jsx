import React from 'react'
import Img1 from '../../public/img/hist1.png'
import Img2 from '../../public/img/hist2.png'
import Img3 from '../../public/img/hist3.png'
import Img4 from '../../public/img/hist4.png'
import Img5 from '../../public/img/hist5.png'
import Img6 from '../../public/img/hist6.png'
import Img7 from '../../public/img/hist7.png'
import Img8 from '../../public/img/hist8.png'


export default props => {
    const renderRows = () =>{
        const list = props.list || []
        return list.map(post => (
            <tr key={post._id}>
                <td>{post.description}</td>
            </tr>
        ))
    }
    return (
        
       <div className="container" id="historia">
            <div className="row"> 
                <div className="col-md-9 text-justify">
                    <h2>História de Corumbá</h2>
                        <hr className="coment" />
                     {renderRows()}

                    <p>A área do atual município de Corumbá foi explorada pela primeira vez por volta de 1524 pelo português Aleixo Garcia, que ali chegou em busca de ouro. Com o nome de origem tupi-guarani Curupah – que significa “lugar distante” – e,
                         depois de ter outras denominações ao longo de sua história, 
                        Corumbá é conhecida como Cidade Branca, devido à cor clara de seu solo, rico em calcário. <br /><br />
                        Com o objetivo de fixar o domínio de Portugal na região, Luiz Albuquerque e Cáceres, governador e capitão general da Capitania de Mato Grosso, implantaram pontos estratégicos militares com a finalidade de defender 
                        o território contra as invasões espanholas. Construiram em 1775 o Forte Coimbra e fundoram em 21 de setembro de 1778 às margens do rio Paraguai o arraial de Nossa Senhora da Conceição de Albuquerque, povoado que surgiu como destacamento 
                        militar e se estabeleceu a princípio na ponta do Ladário. 
</p>        
                      <figure className="figure">
                         <img src={Img1} alt="Corumbá" className="histimg mx-auto d-block" />
                             <figcaption className="figure-caption">Corumbá - Praça de Sª Thereza, atual Praça da Independência.
                              Uma das mais antigas imagens do Colégio Salesiano de Santa Teresa.
                              O espaço da praça principal ainda não era delimitado, misturando-se com a atual rua 15 de Novembro, ao lado direito. Esta foto é de 1885 seculo 19. Não se sabe o autor.
                              </figcaption>

                         </figure>
                
                     <p>Em 1856 foi estabelecido o livre trânsito de barcos brasileiros e estrangeiros no rio Paraguai, 
                     o porto de Corumbá com sua posição geográfica privilegiada, tornou-se um importante centro econômico. 
                      </p>
            
                      <figure className="figure">
                        <img src={Img2} alt="Corumbá" className="histimg mx-auto d-block" />
                          <figcaption className="figure-caption">'Reparem no tamanho dos navios que navegavam pelo Rio Paraguai.
                             Ao redor, chalanas que faziam desembarque de cargas e passageiros.
                            Imaginem como era o Porto Geral nesse tempo.' - Acervo da Denise Zinézi Duque
                          </figcaption>

                      </figure>

                    <p>Essa região foi invadida e destruída em 1865 por Solano Lopez durante a Guerra do Paraguai(1864-1869), foi palco de uma das principais 
                    batalhas do conflito.Durante a ocupação a navegação pelo rio Paraguai foi interrompida o que desarticulou o comércio local. A cidade foi
                     destruída, abandonada a miséria, suas casas e depósitos foram saqueados e a população diminuída sofreu privações. </p>

                     <figure className="figure">
                      <img src={Img3} alt="Corumbá" className="histimg mx-auto d-block" />
                         <figcaption className="figure-caption">Estamos na rua Delamare, entre a Antonio João e Antonio Maria, em frente a 
                         Praça da Republica. Foi nesse local, no dia 13 de Junho de 1867, que o Tenente Coronel Antonio Maria Coelho e sua 
                         tropa tomaram das mãos dos paraguaios o domínio das terras corumbaenses. O Grupo escolar (ILA) (predio na esquina a direita) estava 
                         sendo construído, portanto estamos entre 1918 e 1922. Sua inauguração foi em 1924. Ao lado, temos a igreja Matriz de Nossa Senhora da 
                         Candelária. Sua construção teve inicio em 25 de maio de 1870 sendo concluída em 1886. A rua de paralelepípedos está aí até hoje.
                          Foto: Anderson Souza.

                         </figcaption>

                     </figure>

                    <p>A ocupação pelo exército paraguaio se deu até 13 de junho de 1867, quando uma tropa vinda de Cuiabá chefiada pelo 
                        tenente-coronel Antônio Maria Coelho, consegui retomar a cidade. Na mesma época, imigrantes europeus e de outros 
                        países sul-americanos chegaram, nesse período foi iniciado a restauração do centro urbano e a retomada das 
                        atividades comerciais. Paralelamente recuperou-se o porto e as fazendas de gado que foram destruídas durante a 
                        ocupação paraguaia impulsionando o desenvolvimento local. Como resultado, Corumbá foi o terceiro maior porto da 
                        América Latina até 1930.
                    </p>

                    <figure className="figure">
                         <img src={Img4} alt="Corumbá" className="histimg mx-auto d-block" />
                            <figcaption className="figure-caption">Porto da alfandega, anos 30
                            Foto: Estélio da Cunha.

                            </figcaption>

                    </figure>
                    
                    <p>Embarcações nacionais e estrangeiras traziam mercadorias destinadas ao mercado local e outras localidades do estado 
                       e Bolívia. Vapores vinham do Uruguai, Argentina e de alguns países europeus trazendo o cimento inglês, o vinho 
                       português e os refinados tecidos franceses, além dos imigrantes. Na volta levavam produtos de exportação como a 
                       borracha, couro, charque, cal e a erva mate, transformando a região em um corredor das exportações de Mato Grosso. <br /> <br />

                        A cidade se dividia em duas partes, na de cima que estava sobre a elevação calcária, ficava o comércio e na de baixo 
                        que ficava na altura do rio , e se comunicava com a outra através de duas ladeiras, ficava o Porto Geral com os 
                        galpões de importadores e exportadores e, seus importantes edifícios públicos e comerciais de até três andares. <br /> <br />

                        Em 1910 como tentativa de organização dos comerciantes locais foi fundada a Associação Comercial de Corumbá. 
                        Ela que considerava a navegação fator principal no desenvolvimento da cidade reagiu contra a Estrada de Ferro 
                        Noroeste do Brasil, hoje privatizada. Essa estrada trouxe conseqüências para cidade mudando a história da economia 
                        local. Com a ferrovia o transporte fluvial foi deixado de lado e o eixo econômico foi deslocado para Campo Grande, 
                        que se tornou então o ponto central de comunicação e transporte do sul de Mato Grosso à partir da década de 1920.

                    </p>

                    <figure className="figure">
                         <img src={Img5} alt="Corumbá" className="histimg mx-auto d-block" />
                             <figcaption className="figure-caption">
                             </figcaption>Postes central, veículo de tração animal, pés de flamboyant e transeuntes vestidos moda da época, década de 20.
                            Estamos na Rua Frei Mariano. Lá atrás, o antigo muro da Praça da Independência
                    </figure>

                    <p> 
                    A dependência da navegação fluvial com o exterior tornou a cidade suscetível a 
                    crises periódicas. A guerra que estava acontecendo na Europa (1914/1918) e a 
                    construção da estrada de ferro mudaram o destino econômico de Corumbá. A cidade 
                    começou a entrar em decadência como entreposto de exportação e importação o que 
                    acarretou um esvaziamento populacional, os comerciantes saíram à procura de outros 
                    centros que estavam se desenvolvendo ou se transferiram para a pecuária. Essa 
                    dependência com o comércio externo impediu o desenvolvimento interno e a criação de 
                    uma infra estrutura econômica e urbana capaz de criar alternativa para o setor 
                    comercial. <br /> <br />

                    Durante a Segunda Guerra Mundial foi iniciada a atividade industrial da cidade, imensas reservas de calcário favoreciam as indústrias de 
                    cimento (o grupo Itaú veio em 1950) e as riquezas minerais atraiam as mineradoras 
                    (em 1975 chegou a Urucum Mineração S/A e a Companhia vale do Rio Doce). 

                    </p>

                    <figure className="figure">
                         <img src={Img6} alt="Corumbá" className="histimg mx-auto d-block" />
                            <figcaption className="figure-caption">
                            </figcaption>Foto de 1959, onde podemos ver bem a rua Frei Mariano, e a esquina da Delamare, 
                            só fundo, pantanal e céu se misturam.
                    </figure>

                    <p>Em 1977 com a criação do estado de Mato Grosso do Sul Campo Grande se tornou o centro,
                         restando a Corumbá poucas atividades industriais, um comércio de pequena expressão 
                         e a grande atividade econômica assentada na pecuária. 
                        Em 1986 a BR-262 foi asfaltada o que dinamizou um pouco o comércio. 

                    </p>

                   <figure className="figure">
                       <img src={Img7} alt="Corumbá" className="histimg mx-auto d-block" />
                          <figcaption className="figure-caption">
                          </figcaption>'Essa foto foi tirada do grupo Amigos de Corumbá. 
                          - Estamos em 1977, e o Rio Paraguai estava passando por uma 
                          rigorosa cheia, reparem que  a superfície do outro lado do rio 
                          está encoberta.
                   </figure>

                    <p>Nos fins da década de 70 começou a ser desenvolvido muito artesanalmente
                      o turismo, a ocupação dos prédios portuários pelos novos empresários do 
                      setor permitiu que o casario antigo do Porto Geral não fosse totalmente 
                      depredado. "a natureza ao alcance de todos", a região se voltou para 
                      aproveitar a principal mercadoria que possui: a natureza. 
                    </p>
                    
                   <figure className="figure">
                      <img src={Img8} alt="Corumbá" className="histimg mx-auto d-block" />
                        <figcaption className="figure-caption">
                       </figcaption>
                   </figure>

                   <p> Corumbá é uma cidade de belezas únicas e povo receptivo, venha conhecer as belezas do pantanal e desfrutar de dias inesqueciveis na cidade branca.  </p>
            
            </div>
                 <div className="col-md-3 squarehist">
                   <h5>Navegue pelo site</h5>
                   <a className="histicon fas fa-4x fa-bed mb-3 sr-icons" href="#/hospedagem"><h5>Hospedagem</h5></a>
                </div>
            </div>
        </div>
)
}
        
/*<table className='table' id="historia">
<thead>
    <tr>
        <th>Publicações</th>
    </tr>
</thead>
<tbody>
    {renderRows()}
</tbody>
</table>*/