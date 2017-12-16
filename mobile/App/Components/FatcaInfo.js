import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import { ApplicationStyles } from '@theme/';
import { Card, Text } from '@ui/';

export default class FatcaInfo extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: 'FATCA',
  });

  render() {
    return (
      <ScrollView style={ApplicationStyles.container}>
        <Card>

          <Text h3> 1. INFORMAÇÕES GERAIS/DEFINIÇÕES </Text>
          <Text>
            FATCA - Foreign Account Tax Compliance Act: corresponde ao 4o Capítulo do Internal Revenue Code (IRC) da Autoridade Fiscal dos EUA Internal Revenue
            Service (IRS). O referido Capítulo tem como objetivo primordial prevenir a evasão fiscal de sujeitos passivos norte-americanos não isentos de imposto,
            relativamente a rendimentos/ganhos referentes a investimentos efetuados fora dos Estados Unidos. Com a implementação do FATCA, pretende-se que
            as instituições financeiras não residentes em território norte-americano (bancos, seguradoras do ramo vida, entre outras) assumam a partir de 1 de
            julho de 2014, diversas obrigações ao nível de recolha de informação, documentação e caracterização dos Clientes norte-americanos (ou potenciais), e
            envio de reportes relativos aos mesmos. A SGF – Sociedade Gestora de Fundos de Pensões, S.A. aderiu ao acordo FATCA, registando-se como
            Participante, como tal deve assegurar o cumprimento de um conjunto de requisitos, nomeadamente identificar e obter evidências documentais da
            condição de US Person ou de Clientes que apresentem indícios nesse sentido.
          </Text>
          <Text>São considerados US Person, as pessoas que cumpram os seguintes critérios:</Text>
          <Text>Cidadãos norte-americanos, incluindo os detentores de dupla nacionalidade, ainda que residam fora dos USA;</Text>
          <Text> Detentores de green card; </Text>
          <Text> Detentores de passaporte norte-americano;</Text>
          <Text> Nascidos nos EUA ou num dos territórios norte americanos (Guam; Ilhas Margaridas do Norte; Ilhas Virgens Americanas; Porto Rico; Samoa),
            exceto os que renunciaram à cidadania;</Text>
          <Text>Residente permanente nos EUA ou que tenha presença substancial, de acordo com as seguintes regras:</Text>
          <Text>31 dias no ano corrente e 183 dias durante os últimos 3 anos, os quais incluem o ano corrente e os 2 anos precedentes, devendo contar-se:</Text>
          <Text>Todos os dias em que a pessoa esteve presente nos EUA no ano corrente;</Text>
          <Text>1/3 dos dias em que a pessoa esteve presente nos EUA no ano anterior;</Text>
          <Text>1/6 dos dias em que a pessoa esteve presente nos EUA no segundo ano anterior.</Text>
          <Text>Com exceção de:</Text>
          <Text>Diplomatas;</Text>
          <Text>Estudantes (visto de estudantes);</Text>
          <Text>Professores destacados;</Text>
          <Text>Atletas profissionais.</Text>
          <Text>Com o intuito de permitir o cumprimento das obrigações decorrentes do FATCA, o Cliente declara aceitar as seguintes cláusulas:</Text>
          <Text>1a - MONITORIZAÇÃO:</Text>
          <Text>
            O Cliente reconhece e aceita que a SGF, em cumprimento das exigências legais decorrentes do FATCA se encontra obrigada a monitorizar periodicamente
            os dados pessoais de todos os clientes com a finalidade de identificar possíveis contribuintes fiscais norte-americanos. O Cliente autoriza a SGF a realizar
            as atividades de monitorização dos seus dados que sejam necessárias ao cumprimento das referidas obrigações de informação sujeitas a reporte.
          </Text>
          <Text h3>2a - ALTERAÇÃO DAS CIRCUNSTÂNCIAS:</Text>
          <Text>
            Não obstante a cláusula anterior, o Cliente compromete-se a comunicar à SGF, por escrito, qualquer alteração dos seus dados pessoais, referentes à
            jurisdição norte-americana, nomeadamente alterações de cidadania, de residência, ou de outras circunstâncias, que determinem a aquisição de qualidade
            de contribuinte fiscal norte-americano, no prazo máximo de 90 dias a contar da data de verificação dessa alteração. O Cliente compromete-se ainda,
            dentro do mesmo prazo, a fornecer à SGF a documentação comprovativa dessa alteração de circunstâncias, assim como os documentos que esta lhe venha
            a solicitar, e que se mostrem pertinentes para esse efeito.
          </Text>
          <Text h3>3a - SOBRE OS DADOS PESSOAIS:</Text>
          <Text>
            O Cliente declara reconhecer a obrigação legal da SGF em efetuar a comunicação dos seus dados pessoais caso tenha ou venha a adquirir a qualidade de
            contribuinte fiscal norte-americano, bem como, o fornecimento de documentos que comprovam essa qualidade à Autoridade Tributária e Aduaneira, em
            cumprimento das citadas disposições legais e afirmam dar o seu consentimento inequívoco e esclarecido para esse fim.
          </Text>
        </Card>
      </ScrollView>
    );
  }
}
