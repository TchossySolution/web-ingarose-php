let langEn = document.getElementById('en')
let langPt = document.getElementById('br')
let langFr = document.getElementById('fr')
let language = document.getElementById('language')
let ulLang = document.getElementById('ulLang')

let conteinerall = document.getElementById('conteinerall')

conteinerall.addEventListener('click', () => {
  ulLang.style.display = 'none'
})
language.addEventListener('click', () => {
  if (ulLang.style.display === 'block') {
    ulLang.style.display = 'none'
  } else {
    ulLang.style.display = 'block'
  }
})
// HEADER
let homeHeaderLink = document.getElementById('homeHeaderLink')
let aboutHeaderLink = document.getElementById('aboutHeaderLink')
let teamHeaderLink = document.getElementById('teamHeaderLink')
let servicesHeaderLink = document.getElementById('servicesHeaderLink')
let noticiasHeaderLink = document.getElementById('noticiasHeaderLink')
let processHeaderLink = document.getElementById('processHeaderLink')
let careersHeaderLink = document.getElementById('careersHeaderLink')
let recruitmentHeaderLink = document.getElementById('recruitmentHeaderLink')
let contactHeaderLink = document.getElementById('contactHeaderLink')

let languageselected = document.getElementById('languageSelected')

// home section starts
let h4home = document.getElementById('h4home')
let h2home = document.getElementById('h2home')
let h1home = document.getElementById('h1home')
let p1home = document.getElementById('p1home')
let p2home = document.getElementById('p2home')
let p3home = document.getElementById('p3home')
let btn1home = document.getElementById('btn1home')
let btn2home = document.getElementById('btn2home')

// Qualidades
let titleQualidade1 = document.getElementById('titleQualidade1')
let subTitleQualidade1 = document.getElementById('subTitleQualidade1')

let titleQualidade2 = document.getElementById('titleQualidade2')
let subTitleQualidade2 = document.getElementById('subTitleQualidade2')

let titleQualidade3 = document.getElementById('titleQualidade3')
let subTitleQualidade3 = document.getElementById('subTitleQualidade3')

// ABOUT US
let titleAbout = document.getElementById('titleAbout')
let titleSpanAbout = document.getElementById('titleSpanAbout')

let subtitleAbout = document.getElementById('subtitleAbout')

let descriptionAbout = document.getElementById('descriptionAbout')

// OUR VALUE
let titleValues = document.getElementById('titleValues')
let titleSpanValues = document.getElementById('titleSpanValues')

let subtitleValue = document.getElementById('subtitleValue')

let titleBoxValue1 = document.getElementById('titleBoxValue1')
let SubtitleBoxValue1 = document.getElementById('SubtitleBoxValue1')
let titleBoxValue2 = document.getElementById('titleBoxValue2')
let SubtitleBoxValue2 = document.getElementById('SubtitleBoxValue2')
let titleBoxValue3 = document.getElementById('titleBoxValue3')
let SubtitleBoxValue3 = document.getElementById('SubtitleBoxValue3')
let titleBoxValue4 = document.getElementById('titleBoxValue4')
let SubtitleBoxValue4 = document.getElementById('SubtitleBoxValue4')

// OUR TEAM
let titleTeam = document.getElementById('titleTeam')
let titleSpanTeam = document.getElementById('titleSpanTeam')

let subtitleTeam = document.getElementById('subtitleTeam')

let descriptionTeam = document.getElementById('descriptionTeam')

// OUR SERVICE
let titleServices = document.getElementById('titleServices')
let titleSpanServices = document.getElementById('titleSpanServices')

let subtitleServices = document.getElementById('subtitleServices')

let descriptionServices = document.getElementById('descriptionServices')

let titleBoxServico1 = document.getElementById('titleBoxServico1')
let SubtitleBoxServico1 = document.getElementById('SubtitleBoxServico1')
let titleBoxServico2 = document.getElementById('titleBoxServico2')
let SubtitleBoxServico2 = document.getElementById('SubtitleBoxServico2')
let titleBoxServico3 = document.getElementById('titleBoxServico3')
let SubtitleBoxServico3 = document.getElementById('SubtitleBoxServico3')

// OUR PROCESS
let titleProcess = document.getElementById('titleProcess')
let titleSpanProcess = document.getElementById('titleSpanProcess')

let subtitleProcess = document.getElementById('subtitleProcess')

let descriptionProcess = document.getElementById('descriptionProcess')

let titleBoxProcess1 = document.getElementById('titleBoxProcess1')
let SubtitleBoxProcess1 = document.getElementById('SubtitleBoxProcess1')
let titleBoxProcess2 = document.getElementById('titleBoxProcess2')
let SubtitleBoxProcess2 = document.getElementById('SubtitleBoxProcess2')
let titleBoxProcess3 = document.getElementById('titleBoxProcess3')
let SubtitleBoxProcess3 = document.getElementById('SubtitleBoxProcess3')
let titleBoxProcess4 = document.getElementById('titleBoxProcess4')
let SubtitleBoxProcess4 = document.getElementById('SubtitleBoxProcess4')

// OUR CONTACT

// FOOTER
let infoLogoFooter = document.getElementById('infoLogoFooter')
let titleLinkFooter = document.getElementById('titleLinkFooter')
let a1Footer = document.getElementById('a1Footer')
let a2Footer = document.getElementById('a2Footer')
let a3Footer = document.getElementById('a3Footer')
let a4Footer = document.getElementById('a4Footer')
let titlePostFooter = document.getElementById('titlePostFooter')
let p1Footer = document.getElementById('p1Footer')
let p2Footer = document.getElementById('p2Footer')
let p3Footer = document.getElementById('p3Footer')

langEn.addEventListener('click', () => {
  document.location.reload(true)
})

langPt.addEventListener('click', () => {
  ulLang.style.display = 'none'
  // languageselected.classList.add('language-selectedBr')
  languageselected.textContent = 'pt-br'

  languageselected.classList.remove('language-selected')
  languageselected.classList.remove('language-selectedFr')
  // MENULINKS
  homeHeaderLink.textContent = 'Inicio'
  aboutHeaderLink.textContent = 'sobre'
  teamHeaderLink.textContent = 'equipe'
  servicesHeaderLink.textContent = 'serviços'
  noticiasHeaderLink.textContent = 'notícias'
  processHeaderLink.textContent = 'precessar'
  careersHeaderLink.textContent = 'carreiras'
  recruitmentHeaderLink.textContent = 'recrutamento'
  contactHeaderLink.textContent = 'contato'

  // Home
  h4home.textContent = 'Sua Visão'
  h2home.textContent = 'NOSSA '
  h1home.textContent = ' PAIXÃO'
  p1home.textContent = 'A INGA ROSE É UMA BOUTIQUE'
  p2home.textContent = 'CONSULTORIA FOCADA EM ESTRATÉGIA E'
  p3home.textContent = 'GESTÃO'
  btn1home.textContent = 'Sobre nos'
  btn2home.textContent = 'ENTRE EM CONTATO CONOSCO'

  // Qualidades
  titleQualidade1.textContent = 'QUALIFICADO'
  subTitleQualidade1.textContent =
    'SOMOS PROFISSIONAIS QUE ESTÃO NO TOPO DE SEU JOGO '

  titleQualidade2.textContent = 'CONFIÁVEL'
  subTitleQualidade2.textContent =
    'TENHA A CERTEZA DE SERVIÇOS DISCRETOS E RESULTADOS GARANTIDOS'

  titleQualidade3.textContent = 'GLOBAL'
  subTitleQualidade3.textContent = 'LIDE CONOSCO EM VÁRIOS PAÍSES'

  // ABOUT US
  titleAbout.textContent = 'Sobre'
  titleSpanAbout.textContent = ' Nós'

  subtitleAbout.textContent = 'TRANSFORMANDO SUA VISÃO EM REALIDADE '

  descriptionAbout.textContent =
    'A Inga Rose é uma empresa de consultoria focada em Estratégia e Gestão. Desenhamos, desenvolvemos e implementamos projetos estratégicos nas áreas Administrativa, Operacional, Controladoria e Sistemas. Facilitamos e aceleramos a compreensão de um mundo em constante evolução. Acreditamos firmemente em ir além do óbvio e não fazemos suposições. Desafiamos como as coisas podem ser melhoradas para beneficiar as partes interessadas e os parceiros. Valorizamos a diversidade, pois reflete toda a amplitude da sociedade em que atuamos, por isso atraímos profissionais altamente qualificados, com capacidade e determinação para influenciar e moldar o futuro. Acreditamos que desenvolver projetos é uma das principais formas de entender a sociedade contemporânea'

  // OUR VALUES
  titleValues.textContent = 'NOSSOS '
  titleSpanValues.textContent = 'VALORES'

  subtitleValue.textContent = 'EM QUE ACREDITAMOS '

  titleBoxValue1.textContent = 'AGILIDADE '
  SubtitleBoxValue1.textContent =
    'Somos rápidos, ágeis e flexíveis. Trabalhamos de acordo com sua agenda e necessidades. Nossa ousadia transcende e transforma ideias.'

  titleBoxValue2.textContent = 'EXCELÊNCIA EXECUCIONAL '
  SubtitleBoxValue2.textContent =
    'Focamos na mais alta qualidade Fornecemos soluções sob medida Buscamos resultados extraordinários. '

  titleBoxValue3.textContent = 'DIVERSIDADE '
  SubtitleBoxValue3.textContent =
    'Acreditamos na diversidade e na inclusão Nossa equipe é multinacional, multigeracional e multicultural Trabalhamos em prol da igualdade e da unidade, '

  titleBoxValue4.textContent = 'DOAÇÃO DA COMUNIDADE '
  SubtitleBoxValue4.textContent =
    'Acreditamos em devolver à comunidade Trabalhamos para alcançar a melhoria da sociedade para as gerações futuras. Nosso objetivo é o desenvolvimento de si e dos outros por meio de recursos novos e sustentáveis. '

  // OUR TEAM
  titleTeam.textContent = 'NOSSA '
  titleSpanTeam.textContent = 'EQUIPE'

  subtitleTeam.textContent = 'QUEM NÓS SOMOS'

  descriptionTeam.textContent =
    'Valorizamos a diversidade, pois reflete toda a amplitude da sociedade em que atuamos, por isso atraímos profissionais altamente qualificados, com capacidade e determinação para influenciar e moldar o futuro.'

  // OUR SERVICES
  titleServices.textContent = 'NOSSOS '
  titleSpanServices.textContent = 'SERVIÇOS'

  subtitleServices.textContent = 'ESTAMOS AQUI POR VOCÊ '

  descriptionServices.textContent =
    'Nossos serviços são todos pensados ​​para atender às suas necessidades. Possuímos as qualificações, conhecimentos e experiência necessários para garantir que todas as áreas do seu negócio sejam tratadas da maneira mais profissional. Trabalhamos para, em última análise, contribuir para o crescimento económico do continente africano através do desenvolvimento de negócios sustentáveis.'

  titleBoxServico1.textContent = 'FORNECIMENTO ESTRATÉGICO E COMPRAS'
  SubtitleBoxServico1.textContent =
    'Auxiliamos os clientes no fornecimento de infraestrutura, incluindo a aquisição de ativos e/ou locação de prédios ou acomodações transportáveis ​​para operações em locais remotos.'

  titleBoxServico2.textContent = 'SERVIÇOS DE CONSULTORIA DE RECURSOS HUMANOS'
  SubtitleBoxServico2.textContent =
    'Ajudamos a definir o papel do pessoal na organização e a identificar, selecionar e recrutar os melhores talentos disponíveis para garantir que o negócio tenha as pessoas certas no comando.'

  titleBoxServico3.textContent = 'DESENVOLVIMENTO DE NEGÓCIOS'
  SubtitleBoxServico3.textContent =
    'Fornecemos inteligência de negócios e iniciativas de desenvolvimento estratégico para novos mercados e ajudamos a desenvolver oportunidades de negócios para nossos clientes.'

  // OUR PROCESS
  titleProcess.textContent = 'NOSSO '
  titleSpanProcess.textContent = 'PROCESSO'

  subtitleProcess.textContent =
    'UM PROCESSO PASSO A PASSO BEM PLANEJADO PARA GARANTIR TRANSPARÊNCIA E RESPONSABILIDADE '

  descriptionProcess.textContent =
    'Para garantir que cada projeto que realizamos seja tratado de forma profissional e transparente, nossa equipe trabalha em um processo estruturado em etapas em que nosso cliente está envolvido em todas as etapas. O controle de qualidade é mantido em cada etapa para garantir que não haja atrasos ou desvios de escopo.'

  titleBoxProcess1.textContent = 'DESCOBRIR '
  SubtitleBoxProcess1.textContent =
    'Começamos aprendendo sobre sua empresa, seus pontos problemáticos e expectativas. '

  titleBoxProcess2.textContent = 'ANALISAR '
  SubtitleBoxProcess2.textContent =
    'Depois de coletar informações detalhadas, analisamos os dados para entender quais soluções funcionarão para você. '

  titleBoxProcess3.textContent = 'DESENVOLVE '
  SubtitleBoxProcess3.textContent =
    'Começamos a desenvolver as soluções que se adaptam às suas necessidades e atendem às suas expectativas. '

  titleBoxProcess4.textContent = 'A MEDIDA '
  SubtitleBoxProcess4.textContent =
    'Colocamos em prática medidas para garantir que as soluções desenvolvidas tenham o impacto para o qual foram projetadas. '

  // Footer
  infoLogoFooter.textContent = 'Transformando sua Visão em Realidade'

  titleLinkFooter.textContent = 'LINKS ADICIONAIS'
  a1Footer.textContent = 'Serviços'
  a2Footer.textContent = 'Nosso Time'
  a3Footer.textContent = 'noticias'
  a4Footer.textContent = 'Contacte-nos'
  titlePostFooter.textContent = 'POSTAGENS RECENTES'
  p1Footer.textContent = 'Hengye Electroncis Indústria SA'
  p2Footer.textContent =
    'Em direção à inovação e interconectividade da economia sustentável'
  p3Footer.textContent = 'MASFAMU em parceria com INGA ROSE'
})

langFr.addEventListener('click', () => {
  // languageselected.classList.add('language-selectedFr')
  languageselected.textContent = 'fr'
  ulLang.style.display = 'none'

  languageselected.classList.remove('language-selected')
  languageselected.classList.remove('language-selectedBr')
  // MENULINKS
  homeHeaderLink.textContent = 'comenzar'
  aboutHeaderLink.textContent = 'sobre'
  teamHeaderLink.textContent = 'equipar'
  servicesHeaderLink.textContent = 'servicios'
  noticiasHeaderLink.textContent = 'nouvelles'
  processHeaderLink.textContent = 'preceder'
  careersHeaderLink.textContent = 'carreras'
  recruitmentHeaderLink.textContent = 'recrutement'
  contactHeaderLink.textContent = 'contacto'

  // Home
  h4home.textContent = 'Tu visión'
  h2home.textContent = 'GUAU '
  h1home.textContent = 'PASIÓN'
  p1home.textContent = 'INGA ROSE ES UNA BOUTIQUE'
  p2home.textContent = 'CONSULTORÍA ENFOCADA EN ESTRATEGIA'
  p3home.textContent = 'Y GESTIÓN'
  btn1home.textContent = 'Sobre nosotros'
  btn2home.textContent = 'Contáctenos'

  // Qualidades
  titleQualidade1.textContent = 'CALIFICADO'
  subTitleQualidade1.textContent =
    'SOMOS PROFESIONALES QUE ESTÁN EN LA PARTE SUPERIOR DE SU JUEGO '

  titleQualidade2.textContent = 'DE CONFIANZA'
  subTitleQualidade2.textContent =
    'ASEGÚRESE DE SERVICIOS DISCRETOS Y RESULTADOS GARANTIZADOS'

  titleQualidade3.textContent = 'GLOBAL'
  subTitleQualidade3.textContent = 'TRATA CON NOSOTROS EN MÚLTIPLES PAÍSES'

  // ABOUT US
  titleAbout.textContent = 'Sobre'
  titleSpanAbout.textContent = ' Nosotros'

  subtitleAbout.textContent = 'CONVIRTIENDO SU VISIÓN EN REALIDAD '

  descriptionAbout.textContent =
    'Inga Rose es una empresa de consultoría enfocada en Estrategia y Gestión. Diseñamos, desarrollamos e implementamos proyectos estratégicos en las áreas Administrativa, Operacional, de Contraloría y de Sistemas. Facilitamos y aceleramos la comprensión de un mundo en constante evolución. Creemos firmemente en ir más allá de lo obvio y no hacemos suposiciones. Desafiamos cómo se pueden mejorar las cosas para beneficiar a las partes interesadas y los socios. Valoramos la diversidad, ya que refleja toda la amplitud de la sociedad en la que operamos, por lo que atraemos a profesionales altamente calificados con capacidad y determinación para influir y dar forma al futuro. Creemos que desarrollar proyectos es una de las principales formas de entender la sociedad contemporánea'

  // OUR VALUES
  titleValues.textContent = 'NUESTRO '
  titleSpanValues.textContent = 'VALORES'

  subtitleValue.textContent = 'LO QUE CREEMOS '

  titleBoxValue1.textContent = 'AGILIDAD '
  SubtitleBoxValue1.textContent =
    'Somos rápidos, ágiles y flexibles. Trabajamos de acuerdo a su horario y necesidades. Nuestra audacia trasciende y transforma las ideas.'

  titleBoxValue2.textContent = 'EXCELENCIA EJECUTIVA '
  SubtitleBoxValue2.textContent =
    'Apostamos por la máxima calidad Aportamos soluciones a medida Buscamos resultados extraordinarios. '

  titleBoxValue3.textContent = 'DIVERSIDAD '
  SubtitleBoxValue3.textContent =
    'Creemos en la diversidad y la inclusión Nuestro equipo es multinacional, multigeneracional y multicultural Trabajamos por la igualdad y la unidad, '

  titleBoxValue4.textContent = 'DONACIÓN COMUNITARIA '
  SubtitleBoxValue4.textContent =
    'Creemos en retribuir a la comunidad. Trabajamos para lograr el mejoramiento de la sociedad para las generaciones futuras. Nuestro objetivo es el desarrollo propio y de los demás a través de recursos nuevos y sostenibles. '

  // OUR TEAM
  titleTeam.textContent = 'GUAU '
  titleSpanTeam.textContent = 'EQUIPO'

  subtitleTeam.textContent = 'QUIENES SOMOS'

  descriptionTeam.textContent =
    'Valoramos la diversidad, ya que refleja toda la amplitud de la sociedad en la que operamos, por lo que atraemos a profesionales altamente calificados, con capacidad y determinación para influir y moldear el futuro.'

  // OUR SERVICES
  titleServices.textContent = 'NUESTRO '
  titleSpanServices.textContent = 'SERVICIOS'

  subtitleServices.textContent = 'ESTAMOS AQUÍ PARA TI '

  descriptionServices.textContent =
    'Todos nuestros servicios están diseñados para satisfacer sus necesidades. Tenemos las calificaciones, el conocimiento y la experiencia necesarios para garantizar que todas las áreas de su negocio se manejen de la manera más profesional. Trabajamos para contribuir en última instancia al crecimiento económico del continente africano a través del desarrollo empresarial sostenible.'

  titleBoxServico1.textContent = 'ABASTECIMIENTO ESTRATÉGICO Y COMPRAS'
  SubtitleBoxServico1.textContent =
    'Ayudamos a los clientes a proporcionar infraestructura, incluida la adquisición de activos y/o el arrendamiento de edificios o alojamiento transportable para operaciones en ubicaciones remotas.'

  titleBoxServico2.textContent = 'SERVICIOS DE CONSULTORÍA EN RECURSOS HUMANOS'
  SubtitleBoxServico2.textContent =
    'Ayudamos a definir el papel de las personas en la organización e identificamos, seleccionamos y contratamos al mejor talento disponible para garantizar que la empresa cuente con las personas adecuadas al mando.'

  titleBoxServico3.textContent = 'DESARROLLO DE NEGOCIOS'
  SubtitleBoxServico3.textContent =
    'Brindamos inteligencia comercial e iniciativas de desarrollo estratégico para nuevos mercados y ayudamos a desarrollar oportunidades comerciales para nuestros clientes.'

  // OUR PROCESS
  titleProcess.textContent = 'NUESTRO '
  titleSpanProcess.textContent = 'PROCESO'

  subtitleProcess.textContent =
    'UN PROCESO PASO A PASO BIEN PLANIFICADO PARA GARANTIZAR LA TRANSPARENCIA Y LA RESPONSABILIDAD '

  descriptionProcess.textContent =
    'Para garantizar que cada proyecto que emprendemos se maneje de manera profesional y transparente, nuestro equipo trabaja en un proceso estructurado paso a paso donde nuestro cliente está involucrado en cada paso. El control de calidad se mantiene en cada paso para garantizar que no haya demoras ni desviaciones del alcance.'

  titleBoxProcess1.textContent = 'DESCUBRIR '
  SubtitleBoxProcess1.textContent =
    'Comenzamos aprendiendo sobre su empresa, sus puntos débiles y expectativas. '

  titleBoxProcess2.textContent = 'ANALIZAR '
  SubtitleBoxProcess2.textContent =
    'Después de recopilar información detallada, analizamos los datos para comprender qué soluciones funcionarán para usted. '

  titleBoxProcess3.textContent = 'DESARROLLA '
  SubtitleBoxProcess3.textContent =
    'Empezamos a desarrollar las soluciones que se adaptan a tus necesidades y cumplen tus expectativas. '

  titleBoxProcess4.textContent = 'LA MEDIDA '
  SubtitleBoxProcess4.textContent =
    'Implementamos medidas para garantizar que las soluciones que desarrollamos tengan el impacto para el que fueron diseñadas. '

  // Footer
  infoLogoFooter.textContent = 'Convirtiendo tu Visión en Realidad'

  titleLinkFooter.textContent = 'ENLACES ADICIONALES'
  a1Footer.textContent = 'servicios'
  a2Footer.textContent = 'Nuestro equipo'
  a3Footer.textContent = 'noticias'
  a4Footer.textContent = 'Contáctenos'
  titlePostFooter.textContent = 'MENSAJES RECIENTES'
  p1Footer.textContent = 'Hengye Electroncis Industria SA'
  p2Footer.textContent =
    'Hacia la economía sostenible, la innovación y la interconectividad'
  p3Footer.textContent = 'MASFAMU en colaboración con INGA ROSE'
})
