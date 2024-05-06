import "./App.css";
import di from "../img/di.jpg"
import baixo from "../img/baixo.jpg"
import canaleta from "../img/canaleta.jpg"
import capsula from "../img/capsula.jpg"
import espuma from "../img/espuma.jpg"
import headset from "../img/headset.jpg"
import medusa from "../img/medusa.jpg"
import pedestal from "../img/pedestal.jpg"
import tampa from "../img/tampa.jpg"
import teclado from "../img/teclado.jpg"
import trincha from "../img/trincha.jpg"
import violao from "../img/violao.jpg"
import cabo from "../img/cabo.jpg"
import caixa from "../img/caixa.jpg"
import direct from "../img/direct.jpg"



function App() {
  return (
    <div>
      <h1>Lista De Compras IBP</h1>
      <div className="divisoria">
        <div className="dentro">
          {" "}
          <p>
            DI duplo x 2<span>- (Mercado Livre)</span>
            <img src={di} alt="di" />
            <p>R$ 374,00 (cada)</p>
            <p className="urgente">Urgencia - Alta</p>
            <a
              className="link"
              target="_blank"
              href="https://www.mercadolivre.com.br/di-2di-behringer-direct-box-ativo-2-canais-di20-9v-48v/p/MLB27143277?pdp_filters=category:MLB135939#searchVariation=MLB27143277&position=5&search_layout=grid&type=product&tracking_id=11ade767-c390-4979-acc2-aa056d929610"
            >
              Link
            </a>
          </p>
        </div>
      </div>
      <div className="divisoria">
        <div className="dentro">
          {" "}
          <p>
            Trincha pequena x 4
            <span> (Limpeza de equipamento) - (Armazem Coral)</span>
            <img src={trincha} alt="trincha" />
            <p>R$ 5,50 (cada)</p>
            <p className="urgente">Urgencia - Alta</p>
            <a
              className="link"
              target="_blank"
              href="https://www.armazemcoral.com.br/trincha-cerdas-preta-media-para-pintura-de-esmalte-1-ref697--tigre-647101-230
              "
            >
              Link
            </a>
          </p>
        </div>
      </div>
      <div className="divisoria">
        <div className="dentro">
          {" "}
          <p>
            Microfone headset multibanda
            <span> (Teatro) - (Mercado Livre)</span>
            <img src={headset} alt="headset" />
            <p> R$ 1.999,00</p>
            <p className="mediano">Urgencia - Media</p>
            <a
              className="link"
              target="_blank"
              href="https://produto.mercadolivre.com.br/MLB-2831070846-microfone-sem-fio-quadruplo-ksr-pro-kt4-head-80-canais-_JM?matt_tool=88695644&matt_word=&matt_source=google&matt_campaign_id=14300459461&matt_ad_group_id=126793517756&matt_match_type=&matt_network=g&matt_device=c&matt_creative=543111991139&matt_keyword=&matt_ad_position=&matt_ad_type=pla&matt_merchant_id=655478219&matt_product_id=MLB2831070846&matt_product_partition_id=1817816228848&matt_target_id=aud-1966490908987:pla-1817816228848&cq_src=google_ads&cq_cmp=14300459461&cq_net=g&cq_plt=gp&cq_med=pla&gad_source=1&gclid=Cj0KCQjw_-GxBhC1ARIsADGgDjuh7uCETqeEE3SkYWsCleSqk15KG9Dj4hb2fsZPmIavo-tB8-e4bqcaAirQEALw_wcB"
            >
              Link
            </a>
          </p>
        </div>
      </div>
      <div className="divisoria">
        <div className="dentro">
          {" "}
          <p>
            Cabo p10 5m x 2 
            <span>- (Templo Anexo)</span>
            <img src={cabo} alt="cabo" />
            <p> R$ - </p>
            <p className="mediano">Urgencia - Media</p>
            <a className="link" href="#">
              Link
            </a>
          </p>
        </div>
      </div>
      <div className="divisoria">
        <div className="dentro">
          {" "}
          <p>
            Canaleta Pvc x 3
            <span> - (Armazem Coral)</span>
            <img src={canaleta} alt="canaleta" />
            <p>R$ 69,90 (cada)</p>
            <p className="mediano">Urgencia - Media</p>
            <a
              className="link"
              target="_blank"
              href="https://www.armazemcoral.com.br/canaleta-pvc-aberta-50x50x2000mm-branca-620911-ilumi-695718-230"
            >
              Link
            </a>
          </p>
        </div>
      </div>
      <div className="divisoria">
        <div className="dentro">
          {" "}
          <p>
            Capa violão
            <span> (Sugestão) - (Mercado Livre)</span>
            <img src={violao} alt="violao" />
            <p>R$ 129,90</p>
            <p className="mediano">Urgencia Media</p>
            <a
              className="link"
              target="_blank"
              href="https://produto.mercadolivre.com.br/MLB-1184874578-bag-case-violo-classico-acolchoada-impermeavel-sl-bonga-_JM#is_advertising=true&position=1&search_layout=grid&type=pad&tracking_id=debd7768-fdf9-49cd-ab1f-9b8fa62b7567&is_advertising=true&ad_domain=VQCATCORE_LST&ad_position=1&ad_click_id=NDk4NThlYjMtNmRkMS00NmY5LTk2MDgtMzY5NWJiYmJjZTUw"
            >
              Link
            </a>
          </p>
        </div>
      </div>

      <div className="divisoria">
        <div className="dentro">
          {" "}
          <p>
            Capa / Case teclado MX61
            <span> - (Mercado livre)</span>
            <img src={teclado} alt="teclado" />
            <p>R$ 589,00</p>
            <p className="mediano">Urgencia - Media</p>
            <a
              className="link"
              target="_blank"
              href="https://produto.mercadolivre.com.br/MLB-1025399907-case-estojo-para-teclado-yamaha-mx61-kromus-_JM#position=3&search_layout=stack&type=item&tracking_id=aa920082-8c84-433b-8e7c-be94987b2093"
            >
              Link
            </a>
          </p>
        </div>
      </div>

      <div className="divisoria">
        <div className="dentro">
          {" "}
          <p>
            Almofadas Akg K72
            <span> - (Mercado livre)</span>
            <img src={espuma} alt="espuma" />
            <p>R$ 86,90</p>
            <p className="mediano">Urgencia - Media</p>
            <a
              className="link"
              target="_blank"
              href=" https://produto.mercadolivre.com.br/MLB-3462380927-headband-almofada-para-fone-de-ouvido-akg-k52-k72-k92-k240-_JM"
            >
              Link
            </a>
          </p>
        </div>
      </div>

      <div className="divisoria">
        <div className="dentro">
          {" "}
          <p>
            Tampa Microfone sem fio Shure 
            <span>- (Mercado Livre)</span>
            <img src={tampa} alt="tampa" />
            <p>R$ 89,00 </p>
            <p className="suave">Urgencia - Baixa</p>
            <a
              className="link"
              target="_blank"
              href="https://produto.mercadolivre.com.br/MLB-3404984325-tampa-copinho-para-transmissores-pgx-pgx2-slx2-slx-2-_JM#position=29&search_layout=stack&type=item&tracking_id=212bde13-da25-4f81-9f9f-0fbe8efc6122"
            >
              Link
            </a>
          </p>
        </div>
      </div>
      <div className="divisoria">
        <div className="dentro">
          {" "}
          <p>
            Medusa 12 canais 
            <span>(Templo Anexo) - (Mercado Livre)</span>
            <img src={medusa} alt="medusa" />
            <p>R$ 1.246,55 </p>
            <p className="suave">Urgencia - Baixa</p>
            <a
              className="link"
              target="_blank"
              href="https://www.mercadolivre.com.br/medusa-12-vias-com-conectores-combo-cirilo-cabos-25-metros/p/MLB22343869?pdp_filters=item_id:MLB3642396178#is_advertising=true&searchVariation=MLB22343869&position=1&search_layout=stack&type=pad&tracking_id=86718c4e-62fd-4281-9c18-78e915148825&is_advertising=true&ad_domain=VQCATCORE_LST&ad_position=1&ad_click_id=YmU3MjU5NTItMjgxYS00OGQ0LWIxODItOGIyZGQxYWJkNjY2"
            >
              Link
            </a>
          </p>
        </div>
      </div>
      <div className="divisoria">
        <div className="dentro">
          {" "}
          <p>
            Globo metálico Microfone sem fio Shure 
            <span>- (Mercado Livre)</span>
            <img src={capsula} alt="capsula" />
            <p>R$ 119,04 </p>
            <p className="suave">Urgencia - Baixa</p>
            <a
              className="link"
              target="_blank"
              href="https://produto.mercadolivre.com.br/MLB-1333533589-kit-2-globos-metalicos-para-microfone-shure-beta-58a-sm58-_JM?variation=44375654472#reco_item_pos=0&reco_backend=recomm-platform_ranker_v2p&reco_backend_type=low_level&reco_client=vip-v2p&reco_id=4efb75bc-bb1b-4a30-9264-5d932650c4fa"
            >
              Link
            </a>
          </p>
        </div>
      </div>
      <div className="divisoria">
        <div className="dentro">
          {" "}
          <p>
            Pedestal de microfone x 3 
            <span>- (Mercado Livre)</span>
            <img src={pedestal} alt="pedestal" />
            <p>R$ 267,20 </p>
            <p className="suave">Urgencia - Baixa</p>
            <a
              className="link"
              target="_blank"
              href="https://www.mercadolivre.com.br/kit-3-pedestal-girafa-para-microfone-ask-tps-promco/p/MLB26428920#reco_backend=machinalis-comparator-new-brand&reco_client=pdp_comparator&reco_product_pos=1&reco_backend_type=low_level&reco_id=cf8cfcd9-5074-4992-bb99-2a5c38c5e7c8"
            >
              Link
            </a>
          </p>
        </div>
      </div>
      <div className="divisoria">
        <div className="dentro">
          {" "}
          <p>
            Capa contrabaixo 
            <span>- (Mercado Livre)</span>
            <img src={baixo} alt="baixo" />
            <p>R$ 129,90 </p>
            <p className="suave">Urgencia - Baixa</p>
            <a
              className="link"
              target="_blank"
              href="https://produto.mercadolivre.com.br/MLB-1184874693-capa-bag-case-contra-baixo-acolchoada-impermeavel-sl-bonga-_JM#position=6&search_layout=grid&type=item&tracking_id=ade82314-9f5c-4bda-be3f-642d05a96779"
            >
              Link
            </a>
          </p>
        </div>
      </div>
      <h1>Lista de Manutenção</h1>
      <div className="divisoria">
        <div className="dentro">
          {" "}
          <p>
             Caixa Ativa
            <span>- Eventos - (Assistencia Autorizada)</span>
            <img src={caixa} alt="caixa" />
            <p>R$ -</p>
            <p className="mediano">Urgencia - Media</p>
            {/* <a
              className="link"
              
              href="#"
            >
              Link
            </a> */}
          </p>
        </div>
      </div>
      <div className="divisoria">
        <div className="dentro">
          {" "}
          <p>
            Direct Box prata 
            <span>- (Assistencia Autorizada)</span>
            <img src={direct} alt="direct" />
            <p>R$ - </p>
            <p className="suave">Urgencia - Baixa</p>
            {/* <a
              className="link"
              
              href=""
            >
              Link
            </a> */}
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
