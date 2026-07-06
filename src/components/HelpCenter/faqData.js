const faqData = [

/* ===========================================================
   CADASTRO
=========================================================== */

{
    id:1,
    categoria:"Cadastro",
    relacionadas:[2,3,4],
    pergunta:"Como criar uma conta no Mobiliza?",
    palavras:[
        "cadastro","criar conta","novo usuário","registrar","conta"
    ],
    tempo:"2 minutos",
    dificuldade:"Fácil",
    passos:[
        "Abra o aplicativo Mobiliza ou acesse o portal web.",
        "Clique no botão 'Criar Conta'.",
        "Informe seu nome completo.",
        "Digite um CPF válido.",
        "Informe um e-mail válido.",
        "Cadastre seu telefone celular.",
        "Preencha seu endereço completo.",
        "Crie uma senha forte com pelo menos 8 caracteres.",
        "Leia e aceite os Termos de Uso.",
        "Clique em 'Criar Conta'.",
        "Sua conta será criada automaticamente."
    ],
    observacoes:[
        "Utilize um e-mail que você tenha acesso.",
        "Nunca compartilhe sua senha.",
        "O CPF deve pertencer ao titular da conta."
    ]
},

{
    id:2,
    categoria:"Cadastro",
    relacionadas:[1,3,5],
    pergunta:"Meu CPF já está cadastrado. O que devo fazer?",
    palavras:[
        "cpf","duplicado","cadastro","já existe","conta"
    ],
    tempo:"3 minutos",
    dificuldade:"Fácil",
    passos:[
        "Verifique se você já possui uma conta Mobiliza.",
        "Caso tenha esquecido a senha utilize a opção 'Esqueci minha senha'.",
        "Confirme se o CPF foi digitado corretamente.",
        "Caso o problema continue entre em contato com o suporte.",
        "Informe seu CPF para análise."
    ],
    observacoes:[
        "Cada CPF pode possuir apenas uma conta.",
        "Não crie contas duplicadas."
    ]
},

{
    id:3,
    categoria:"Cadastro",
    relacionadas:[1,4,6],
    pergunta:"Como alterar meus dados cadastrais?",
    palavras:[
        "alterar","editar","dados","cadastro"
    ],
    tempo:"2 minutos",
    dificuldade:"Fácil",
    passos:[
        "Faça login.",
        "Abra o menu Perfil.",
        "Selecione 'Editar Cadastro'.",
        "Atualize as informações desejadas.",
        "Clique em Salvar."
    ],
    observacoes:[
        "Alguns dados poderão exigir validação."
    ]
},

{
    id:4,
    categoria:"Cadastro",
    relacionadas:[1,3,7],
    pergunta:"Como alterar meu endereço?",
    palavras:[
        "endereço","cep","cidade","bairro"
    ],
    tempo:"2 minutos",
    dificuldade:"Fácil",
    passos:[
        "Entre em Perfil.",
        "Abra Meus Dados.",
        "Atualize o CEP.",
        "Confira se o endereço foi preenchido automaticamente.",
        "Informe o número e complemento.",
        "Salve as alterações."
    ],
    observacoes:[
        "O sistema utiliza o ViaCEP para preenchimento automático."
    ]
},

{
    id:5,
    categoria:"Cadastro",
    relacionadas:[2,6,8],
    pergunta:"Como alterar meu e-mail?",
    palavras:[
        "email","alterar email","trocar email"
    ],
    tempo:"2 minutos",
    dificuldade:"Fácil",
    passos:[
        "Entre em Perfil.",
        "Selecione Alterar E-mail.",
        "Digite o novo endereço.",
        "Confirme utilizando sua senha.",
        "Salve."
    ],
    observacoes:[
        "O novo e-mail deverá ser válido."
    ]
},

{
    id:6,
    categoria:"Cadastro",
    relacionadas:[3,5,9],
    pergunta:"Como alterar meu telefone?",
    palavras:[
        "telefone","celular","trocar telefone"
    ],
    tempo:"1 minuto",
    dificuldade:"Fácil",
    passos:[
        "Abra Perfil.",
        "Clique em Telefone.",
        "Digite o novo número.",
        "Salve as alterações."
    ],
    observacoes:[
        "Utilize um número que esteja ativo."
    ]
},

{
    id:7,
    categoria:"Cadastro",
    relacionadas:[4,8,10],
    pergunta:"Meu endereço não foi encontrado pelo CEP.",
    palavras:[
        "cep","via cep","endereço"
    ],
    tempo:"3 minutos",
    dificuldade:"Médio",
    passos:[
        "Confira se o CEP está correto.",
        "Digite novamente apenas números.",
        "Caso o CEP não exista informe os dados manualmente.",
        "Salve o cadastro."
    ],
    observacoes:[
        "Alguns CEPs novos podem não estar disponíveis imediatamente."
    ]
},

{
    id:8,
    categoria:"Cadastro",
    relacionadas:[5,7,10],
    pergunta:"Posso excluir minha conta?",
    palavras:[
        "excluir","apagar conta","cancelar conta"
    ],
    tempo:"5 minutos",
    dificuldade:"Médio",
    passos:[
        "Entre em Perfil.",
        "Acesse Configurações.",
        "Selecione Excluir Conta.",
        "Leia as informações apresentadas.",
        "Confirme a exclusão."
    ],
    observacoes:[
        "A exclusão pode ser irreversível."
    ]
},

{
    id:9,
    categoria:"Cadastro",
    relacionadas:[6,10,1],
    pergunta:"Como atualizar meu cadastro?",
    palavras:[
        "atualizar cadastro","dados"
    ],
    tempo:"2 minutos",
    dificuldade:"Fácil",
    passos:[
        "Entre em Perfil.",
        "Verifique seus dados.",
        "Atualize as informações necessárias.",
        "Salve."
    ],
    observacoes:[
        "Mantenha seus dados sempre atualizados."
    ]
},

{
    id:10,
    categoria:"Cadastro",
    relacionadas:[7,8,9],
    pergunta:"Recebi uma mensagem de erro ao criar minha conta.",
    palavras:[
        "erro","cadastro","falha","não cria"
    ],
    tempo:"4 minutos",
    dificuldade:"Médio",
    passos:[
        "Verifique sua conexão com a internet.",
        "Confirme que todos os campos obrigatórios foram preenchidos.",
        "Confira se CPF e e-mail são válidos.",
        "Tente novamente após alguns minutos.",
        "Persistindo o problema entre em contato com o suporte."
    ],
    observacoes:[
        "Erros temporários podem ocorrer durante manutenção do sistema."
    ]
},

/* ===========================================================
   LOGIN
=========================================================== */

{
    id:11,
    categoria:"Login",
    relacionadas:[12,13,14],
    pergunta:"Esqueci minha senha. Como recuperar?",
    palavras:[
        "senha","recuperar","esqueci","login","nova senha"
    ],
    tempo:"2 minutos",
    dificuldade:"Fácil",
    passos:[
        "Acesse a tela de Login.",
        "Clique em 'Esqueci minha senha'.",
        "Digite o e-mail cadastrado.",
        "Clique em 'Enviar'.",
        "Verifique sua caixa de entrada.",
        "Abra o e-mail recebido.",
        "Clique no link de recuperação.",
        "Cadastre uma nova senha.",
        "Confirme a nova senha.",
        "Faça login normalmente."
    ],
    observacoes:[
        "Verifique também a caixa de Spam.",
        "O link possui tempo de validade."
    ]
},

{
    id:12,
    categoria:"Login",
    relacionadas:[11,13,20],
    pergunta:"Não recebi o e-mail de recuperação de senha.",
    palavras:[
        "email","recuperação","spam","senha"
    ],
    tempo:"3 minutos",
    dificuldade:"Fácil",
    passos:[
        "Verifique a caixa de Spam.",
        "Confira se digitou corretamente o e-mail.",
        "Espere alguns minutos.",
        "Solicite novamente o envio.",
        "Persistindo o problema entre em contato com o suporte."
    ],
    observacoes:[
        "Alguns provedores podem atrasar o recebimento do e-mail."
    ]
},

{
    id:13,
    categoria:"Login",
    relacionadas:[11,12,15],
    pergunta:"Não consigo entrar na minha conta.",
    palavras:[
        "login","erro","entrar","acesso","conta"
    ],
    tempo:"3 minutos",
    dificuldade:"Médio",
    passos:[
        "Confira seu e-mail.",
        "Verifique sua senha.",
        "Confira sua conexão com a internet.",
        "Atualize o aplicativo.",
        "Caso necessário redefina sua senha.",
        "Persistindo o problema entre em contato com o suporte."
    ],
    observacoes:[
        "Certifique-se de utilizar o e-mail correto."
    ]
},

{
    id:14,
    categoria:"Login",
    relacionadas:[11,15,16],
    pergunta:"Minha conta foi bloqueada.",
    palavras:[
        "bloqueio","conta bloqueada","segurança"
    ],
    tempo:"5 minutos",
    dificuldade:"Médio",
    passos:[
        "Aguarde alguns minutos.",
        "Tente novamente.",
        "Caso continue bloqueada utilize Recuperar Senha.",
        "Entre em contato com o suporte caso necessário."
    ],
    observacoes:[
        "O bloqueio pode ocorrer por excesso de tentativas."
    ]
},

{
    id:15,
    categoria:"Login",
    relacionadas:[13,14,16],
    pergunta:"Como alterar minha senha?",
    palavras:[
        "trocar senha","alterar senha"
    ],
    tempo:"2 minutos",
    dificuldade:"Fácil",
    passos:[
        "Entre em Perfil.",
        "Acesse Segurança.",
        "Selecione Alterar Senha.",
        "Informe a senha atual.",
        "Digite a nova senha.",
        "Confirme.",
        "Salve."
    ],
    observacoes:[
        "Utilize uma senha forte."
    ]
},

{
    id:16,
    categoria:"Login",
    relacionadas:[14,15,17],
    pergunta:"Como entrar utilizando minha conta Google?",
    palavras:[
        "google","gmail","oauth","google login"
    ],
    tempo:"30 segundos",
    dificuldade:"Fácil",
    passos:[
        "Abra a tela de Login.",
        "Clique em 'Entrar com Google'.",
        "Escolha sua conta Google.",
        "Autorize o acesso.",
        "O Mobiliza realizará o login automaticamente."
    ],
    observacoes:[
        "Necessário possuir uma conta Google ativa."
    ]
},

{
    id:17,
    categoria:"Login",
    relacionadas:[16,18,19],
    pergunta:"Minha sessão expirou.",
    palavras:[
        "sessão","expirou","login novamente"
    ],
    tempo:"1 minuto",
    dificuldade:"Fácil",
    passos:[
        "Retorne para a tela de Login.",
        "Informe novamente seu e-mail.",
        "Digite sua senha.",
        "Entre normalmente."
    ],
    observacoes:[
        "Por segurança o sistema encerra sessões inativas."
    ]
},

{
    id:18,
    categoria:"Login",
    relacionadas:[17,19,20],
    pergunta:"Como ativar a opção 'Lembrar-me'?",
    palavras:[
        "lembrar senha","lembrar login","manter conectado"
    ],
    tempo:"30 segundos",
    dificuldade:"Fácil",
    passos:[
        "Na tela de Login marque a opção 'Lembrar senha'.",
        "Realize o login normalmente.",
        "Seu acesso ficará salvo neste dispositivo."
    ],
    observacoes:[
        "Não utilize esta opção em computadores públicos."
    ]
},

{
    id:19,
    categoria:"Login",
    relacionadas:[17,18,20],
    pergunta:"Recebi a mensagem 'Usuário ou senha inválidos'.",
    palavras:[
        "usuário inválido","senha inválida","erro login"
    ],
    tempo:"2 minutos",
    dificuldade:"Fácil",
    passos:[
        "Confira o e-mail informado.",
        "Confira a senha.",
        "Evite espaços antes ou depois.",
        "Caso necessário redefina sua senha."
    ],
    observacoes:[
        "A senha diferencia letras maiúsculas e minúsculas."
    ]
},

{
    id:20,
    categoria:"Login",
    relacionadas:[11,13,19],
    pergunta:"Como sair da minha conta com segurança?",
    palavras:[
        "logout","sair","encerrar sessão"
    ],
    tempo:"30 segundos",
    dificuldade:"Fácil",
    passos:[
        "Abra o menu Perfil.",
        "Role até o final da tela.",
        "Clique em 'Sair'.",
        "Confirme a operação.",
        "Sua sessão será encerrada."
    ],
    observacoes:[
        "Sempre saia da conta ao utilizar dispositivos compartilhados."
    ]
},

/* ===========================================================
   BILHETE VIRTUAL
=========================================================== */

{
    id:21,
    categoria:"Bilhete Virtual",
    relacionadas:[22,23,24],
    pergunta:"O que é o Bilhete Virtual do Mobiliza?",
    palavras:[
        "bilhete virtual","cartão digital","bilhete","transporte","mobiliza"
    ],
    tempo:"2 minutos",
    dificuldade:"Fácil",
    passos:[
        "O Bilhete Virtual é a versão digital do cartão de transporte.",
        "Ele fica disponível dentro do aplicativo Mobiliza.",
        "Você poderá consultar saldo, histórico de viagens e recargas em tempo real.",
        "Após realizar uma recarga, o saldo será vinculado automaticamente ao seu bilhete.",
        "Utilize sempre a versão mais recente do aplicativo."
    ],
    observacoes:[
        "O Bilhete Virtual substitui o cartão físico em sistemas compatíveis.",
        "É necessário possuir uma conta cadastrada."
    ]
},

{
    id:22,
    categoria:"Bilhete Virtual",
    relacionadas:[21,23,25],
    pergunta:"Como acessar meu Bilhete Virtual?",
    palavras:[
        "abrir bilhete","acessar bilhete","visualizar bilhete"
    ],
    tempo:"1 minuto",
    dificuldade:"Fácil",
    passos:[
        "Faça login no aplicativo Mobiliza.",
        "Na tela inicial toque em 'Bilhete Virtual'.",
        "Seu saldo será exibido imediatamente.",
        "Caso possua mais de um bilhete, escolha o desejado.",
        "Pronto! Agora você poderá visualizar todas as informações."
    ],
    observacoes:[
        "Necessário estar conectado à internet na primeira sincronização."
    ]
},

{
    id:23,
    categoria:"Bilhete Virtual",
    relacionadas:[21,22,26],
    pergunta:"Como consultar meu saldo?",
    palavras:[
        "saldo","consultar saldo","créditos","valor disponível"
    ],
    tempo:"30 segundos",
    dificuldade:"Fácil",
    passos:[
        "Abra o aplicativo Mobiliza.",
        "Entre em Bilhete Virtual.",
        "Na parte superior será exibido seu saldo atualizado.",
        "Também será possível visualizar a data da última atualização."
    ],
    observacoes:[
        "Após uma recarga pode ser necessário atualizar a tela."
    ]
},

{
    id:24,
    categoria:"Bilhete Virtual",
    relacionadas:[21,27,28],
    pergunta:"Como visualizar meu histórico de viagens?",
    palavras:[
        "histórico","viagens","embarques","utilizações"
    ],
    tempo:"1 minuto",
    dificuldade:"Fácil",
    passos:[
        "Entre no Bilhete Virtual.",
        "Selecione 'Histórico'.",
        "Visualize todas as viagens realizadas.",
        "Cada viagem apresentará data, horário, linha e valor descontado."
    ],
    observacoes:[
        "O histórico permanece disponível conforme a política do sistema."
    ]
},

{
    id:25,
    categoria:"Bilhete Virtual",
    relacionadas:[22,26,30],
    pergunta:"Posso utilizar meu Bilhete Virtual em outro celular?",
    palavras:[
        "trocar celular","novo aparelho","outro telefone"
    ],
    tempo:"2 minutos",
    dificuldade:"Médio",
    passos:[
        "Instale o aplicativo Mobiliza no novo aparelho.",
        "Faça login utilizando sua conta.",
        "O Bilhete Virtual será sincronizado automaticamente.",
        "Caso solicitado, confirme sua identidade."
    ],
    observacoes:[
        "Dependendo das regras da operadora poderá existir limite de dispositivos."
    ]
},

{
    id:26,
    categoria:"Bilhete Virtual",
    relacionadas:[23,25,29],
    pergunta:"Meu saldo não aparece. O que fazer?",
    palavras:[
        "saldo zerado","saldo sumiu","saldo não aparece"
    ],
    tempo:"3 minutos",
    dificuldade:"Médio",
    passos:[
        "Atualize a tela puxando para baixo.",
        "Verifique sua conexão com a internet.",
        "Confirme se a recarga foi aprovada.",
        "Feche e abra novamente o aplicativo.",
        "Caso o problema continue entre em contato com o suporte."
    ],
    observacoes:[
        "Algumas atualizações podem levar alguns minutos."
    ]
},

{
    id:27,
    categoria:"Bilhete Virtual",
    relacionadas:[24,28,30],
    pergunta:"Como verificar minhas últimas recargas?",
    palavras:[
        "recargas","histórico de recarga","pagamentos"
    ],
    tempo:"1 minuto",
    dificuldade:"Fácil",
    passos:[
        "Abra o Bilhete Virtual.",
        "Selecione 'Histórico de Recargas'.",
        "Visualize todos os pagamentos realizados.",
        "Confira o valor e a data de cada operação."
    ],
    observacoes:[
        "As informações ficam disponíveis na sua conta."
    ]
},

{
    id:28,
    categoria:"Bilhete Virtual",
    relacionadas:[24,27,29],
    pergunta:"Como visualizar os detalhes de uma viagem?",
    palavras:[
        "detalhes da viagem","linha","ônibus","trajeto"
    ],
    tempo:"1 minuto",
    dificuldade:"Fácil",
    passos:[
        "Entre no Histórico.",
        "Selecione a viagem desejada.",
        "Visualize horário, linha utilizada, valor debitado e local da utilização."
    ],
    observacoes:[
        "Essas informações auxiliam no controle das viagens."
    ]
},

{
    id:29,
    categoria:"Bilhete Virtual",
    relacionadas:[26,28,30],
    pergunta:"O Bilhete Virtual está indisponível.",
    palavras:[
        "indisponível","erro bilhete","não abre"
    ],
    tempo:"4 minutos",
    dificuldade:"Médio",
    passos:[
        "Verifique sua conexão.",
        "Atualize o aplicativo.",
        "Reinicie o celular.",
        "Faça login novamente.",
        "Caso continue indisponível entre em contato com o suporte."
    ],
    observacoes:[
        "Manutenções programadas podem gerar indisponibilidade temporária."
    ]
},

{
    id:30,
    categoria:"Bilhete Virtual",
    relacionadas:[25,26,29],
    pergunta:"Meu Bilhete Virtual está bloqueado.",
    palavras:[
        "bloqueado","bloqueio","bilhete bloqueado"
    ],
    tempo:"5 minutos",
    dificuldade:"Médio",
    passos:[
        "Verifique se existe alguma pendência em sua conta.",
        "Atualize seus dados cadastrais.",
        "Confirme que sua conta está ativa.",
        "Caso necessário solicite desbloqueio através do suporte.",
        "Aguarde a confirmação do atendimento."
    ],
    observacoes:[
        "O bloqueio pode ocorrer por questões de segurança ou validação cadastral."
    ]
},

/* ===========================================================
   RECARGAS
=========================================================== */

{
    id:31,
    categoria:"Recarga",
    relacionadas:[32,33,34],
    pergunta:"Como fazer uma recarga no Bilhete Virtual?",
    palavras:[
        "recarga","adicionar saldo","créditos","carregar bilhete"
    ],
    tempo:"3 minutos",
    dificuldade:"Fácil",
    passos:[
        "Faça login no aplicativo Mobiliza.",
        "Na tela inicial toque em 'Recarga'.",
        "Escolha o Bilhete Virtual desejado.",
        "Selecione o valor da recarga.",
        "Escolha a forma de pagamento.",
        "Confirme a operação.",
        "Aguarde a confirmação do pagamento.",
        "Após a confirmação o saldo será atualizado automaticamente."
    ],
    observacoes:[
        "Certifique-se de possuir conexão com a internet.",
        "O saldo normalmente é atualizado em poucos minutos."
    ]
},

{
    id:32,
    categoria:"Recarga",
    relacionadas:[31,33,35],
    pergunta:"Como pagar uma recarga utilizando PIX?",
    palavras:[
        "pix","qr code pix","pagamento instantâneo","recarga pix"
    ],
    tempo:"2 minutos",
    dificuldade:"Fácil",
    passos:[
        "Escolha o valor da recarga.",
        "Selecione PIX como forma de pagamento.",
        "Copie o código PIX ou escaneie o QR Code.",
        "Abra o aplicativo do seu banco.",
        "Efetue o pagamento.",
        "Retorne ao Mobiliza.",
        "Aguarde a confirmação automática."
    ],
    observacoes:[
        "O PIX costuma ser confirmado em poucos segundos.",
        "Guarde o comprovante até o saldo ser atualizado."
    ]
},

{
    id:33,
    categoria:"Recarga",
    relacionadas:[31,32,36],
    pergunta:"Como pagar utilizando cartão de crédito?",
    palavras:[
        "cartão","crédito","visa","mastercard"
    ],
    tempo:"3 minutos",
    dificuldade:"Fácil",
    passos:[
        "Selecione o valor da recarga.",
        "Escolha Cartão de Crédito.",
        "Informe os dados do cartão.",
        "Confira todas as informações.",
        "Confirme o pagamento.",
        "Aguarde a autorização da operadora."
    ],
    observacoes:[
        "Alguns bancos podem solicitar autenticação adicional."
    ]
},

{
    id:34,
    categoria:"Recarga",
    relacionadas:[31,35,37],
    pergunta:"Qual o valor mínimo para realizar uma recarga?",
    palavras:[
        "valor mínimo","mínimo","recarga mínima"
    ],
    tempo:"30 segundos",
    dificuldade:"Fácil",
    passos:[
        "Abra a tela de Recarga.",
        "Os valores disponíveis serão exibidos automaticamente.",
        "Escolha um dos valores permitidos pelo sistema."
    ],
    observacoes:[
        "O valor mínimo pode variar conforme a operadora de transporte."
    ]
},

{
    id:35,
    categoria:"Recarga",
    relacionadas:[32,34,38],
    pergunta:"Existe valor máximo para recarga?",
    palavras:[
        "valor máximo","limite","máximo"
    ],
    tempo:"30 segundos",
    dificuldade:"Fácil",
    passos:[
        "Consulte os limites exibidos na tela de recarga.",
        "Escolha um valor dentro do limite permitido.",
        "Confirme o pagamento normalmente."
    ],
    observacoes:[
        "Os limites podem variar conforme as regras da operadora."
    ]
},

{
    id:36,
    categoria:"Recarga",
    relacionadas:[33,39,40],
    pergunta:"Meu pagamento foi aprovado, mas o saldo não apareceu.",
    palavras:[
        "saldo","pagamento aprovado","recarga não caiu"
    ],
    tempo:"5 minutos",
    dificuldade:"Médio",
    passos:[
        "Atualize a tela inicial do aplicativo.",
        "Verifique se o pagamento foi realmente aprovado.",
        "Confira o histórico de recargas.",
        "Aguarde alguns minutos.",
        "Persistindo o problema, entre em contato com o suporte enviando o comprovante."
    ],
    observacoes:[
        "Algumas instituições financeiras podem demorar alguns minutos para confirmar o pagamento."
    ]
},

{
    id:37,
    categoria:"Recarga",
    relacionadas:[34,38,40],
    pergunta:"Posso cancelar uma recarga?",
    palavras:[
        "cancelar","cancelamento","desistir"
    ],
    tempo:"2 minutos",
    dificuldade:"Médio",
    passos:[
        "Verifique se o pagamento já foi concluído.",
        "Caso ainda esteja pendente, poderá ser cancelado.",
        "Após a confirmação do pagamento poderá ser necessário solicitar análise ao suporte."
    ],
    observacoes:[
        "As regras de cancelamento seguem a política da operadora."
    ]
},

{
    id:38,
    categoria:"Recarga",
    relacionadas:[35,37,39],
    pergunta:"Como solicitar estorno de uma recarga?",
    palavras:[
        "estorno","reembolso","devolver dinheiro"
    ],
    tempo:"5 minutos",
    dificuldade:"Médio",
    passos:[
        "Abra a Central de Ajuda.",
        "Escolha 'Solicitar Estorno'.",
        "Informe o motivo.",
        "Anexe o comprovante de pagamento.",
        "Aguarde a análise da equipe."
    ],
    observacoes:[
        "O prazo para análise depende da forma de pagamento utilizada."
    ]
},

{
    id:39,
    categoria:"Recarga",
    relacionadas:[36,38,40],
    pergunta:"Como consultar minhas recargas realizadas?",
    palavras:[
        "histórico de recarga","consultar recarga","pagamentos"
    ],
    tempo:"1 minuto",
    dificuldade:"Fácil",
    passos:[
        "Entre no aplicativo.",
        "Abra o Bilhete Virtual.",
        "Selecione Histórico de Recargas.",
        "Visualize todas as operações realizadas."
    ],
    observacoes:[
        "É possível visualizar data, valor e status de cada recarga."
    ]
},

{
    id:40,
    categoria:"Recarga",
    relacionadas:[36,37,39],
    pergunta:"Recebi erro durante a recarga. O que devo fazer?",
    palavras:[
        "erro","falha","recarga","problema"
    ],
    tempo:"4 minutos",
    dificuldade:"Médio",
    passos:[
        "Verifique sua conexão com a internet.",
        "Atualize o aplicativo.",
        "Repita a operação após alguns minutos.",
        "Caso o erro continue, registre uma solicitação no suporte.",
        "Informe o código do erro, caso seja exibido."
    ],
    observacoes:[
        "Não realize vários pagamentos seguidos sem verificar se a operação anterior foi concluída."
    ]
},

/* ===========================================================
   PAGAMENTOS
=========================================================== */

{
    id:41,
    categoria:"Pagamentos",
    relacionadas:[42,43,44],
    pergunta:"Quais formas de pagamento são aceitas no Mobiliza?",
    palavras:[
        "formas de pagamento","pix","cartão","crédito","débito","pagamento"
    ],
    tempo:"1 minuto",
    dificuldade:"Fácil",
    passos:[
        "Abra o aplicativo Mobiliza.",
        "Acesse a opção Recarga.",
        "Escolha o valor desejado.",
        "Visualize as formas de pagamento disponíveis.",
        "Selecione PIX, Cartão de Crédito ou Cartão de Débito.",
        "Conclua o pagamento normalmente."
    ],
    observacoes:[
        "As formas disponíveis podem variar conforme a operadora de transporte."
    ]
},

{
    id:42,
    categoria:"Pagamentos",
    relacionadas:[41,43,45],
    pergunta:"Meu pagamento PIX ficou pendente.",
    palavras:[
        "pix pendente","pagamento pendente","aguardando pix"
    ],
    tempo:"5 minutos",
    dificuldade:"Médio",
    passos:[
        "Verifique se o pagamento foi concluído no aplicativo do banco.",
        "Confira se houve débito em sua conta.",
        "Atualize a tela do Mobiliza.",
        "Aguarde alguns minutos.",
        "Caso continue pendente envie o comprovante ao suporte."
    ],
    observacoes:[
        "PIX normalmente é confirmado em poucos segundos."
    ]
},

{
    id:43,
    categoria:"Pagamentos",
    relacionadas:[42,44,46],
    pergunta:"O QR Code PIX expirou.",
    palavras:[
        "pix expirado","qr code expirou","pix inválido"
    ],
    tempo:"2 minutos",
    dificuldade:"Fácil",
    passos:[
        "Retorne para a tela de pagamento.",
        "Solicite um novo QR Code.",
        "Efetue o pagamento utilizando o novo código.",
        "Não utilize QR Codes expirados."
    ],
    observacoes:[
        "Cada QR Code possui tempo de validade."
    ]
},

{
    id:44,
    categoria:"Pagamentos",
    relacionadas:[41,43,47],
    pergunta:"Meu cartão foi recusado.",
    palavras:[
        "cartão recusado","pagamento recusado","erro cartão"
    ],
    tempo:"3 minutos",
    dificuldade:"Médio",
    passos:[
        "Confira os dados do cartão.",
        "Verifique a validade.",
        "Confira o código de segurança.",
        "Verifique o limite disponível.",
        "Caso continue recusando utilize outra forma de pagamento."
    ],
    observacoes:[
        "A autorização depende da instituição financeira."
    ]
},

{
    id:45,
    categoria:"Pagamentos",
    relacionadas:[42,46,48],
    pergunta:"O pagamento foi aprovado, mas ainda não recebi confirmação.",
    palavras:[
        "pagamento aprovado","confirmação","saldo"
    ],
    tempo:"5 minutos",
    dificuldade:"Médio",
    passos:[
        "Atualize a tela inicial.",
        "Verifique o histórico de recargas.",
        "Confirme se houve débito.",
        "Aguarde alguns minutos.",
        "Persistindo o problema entre em contato com o suporte."
    ],
    observacoes:[
        "Alguns pagamentos levam alguns minutos para sincronizar."
    ]
},

{
    id:46,
    categoria:"Pagamentos",
    relacionadas:[45,47,49],
    pergunta:"Recebi cobrança em duplicidade.",
    palavras:[
        "duplicidade","duas cobranças","pagamento duplicado"
    ],
    tempo:"5 minutos",
    dificuldade:"Médio",
    passos:[
        "Verifique o extrato do banco.",
        "Confirme se realmente ocorreram duas cobranças.",
        "Abra uma solicitação no suporte.",
        "Envie os comprovantes.",
        "Aguarde a análise."
    ],
    observacoes:[
        "Cobranças duplicadas são analisadas individualmente."
    ]
},

{
    id:47,
    categoria:"Pagamentos",
    relacionadas:[44,46,50],
    pergunta:"Como solicitar reembolso?",
    palavras:[
        "reembolso","estorno","devolver dinheiro"
    ],
    tempo:"5 minutos",
    dificuldade:"Médio",
    passos:[
        "Acesse Suporte.",
        "Selecione Solicitar Reembolso.",
        "Informe o motivo.",
        "Anexe o comprovante.",
        "Envie a solicitação.",
        "Aguarde a análise da equipe."
    ],
    observacoes:[
        "O prazo depende da forma de pagamento utilizada."
    ]
},

{
    id:48,
    categoria:"Pagamentos",
    relacionadas:[45,49,50],
    pergunta:"Como visualizar meus comprovantes de pagamento?",
    palavras:[
        "comprovante","recibo","pagamento"
    ],
    tempo:"1 minuto",
    dificuldade:"Fácil",
    passos:[
        "Abra o Histórico de Recargas.",
        "Selecione a operação desejada.",
        "Clique em Visualizar Comprovante.",
        "Faça o download ou compartilhe."
    ],
    observacoes:[
        "Os comprovantes ficam disponíveis no histórico."
    ]
},

{
    id:49,
    categoria:"Pagamentos",
    relacionadas:[46,48,50],
    pergunta:"Meu pagamento foi cancelado automaticamente.",
    palavras:[
        "cancelado","pagamento cancelado","falha pagamento"
    ],
    tempo:"2 minutos",
    dificuldade:"Fácil",
    passos:[
        "Confira sua conexão.",
        "Verifique se o banco autorizou a operação.",
        "Tente novamente.",
        "Caso continue ocorrendo utilize outra forma de pagamento."
    ],
    observacoes:[
        "Falhas temporárias podem ocorrer durante a comunicação com a operadora."
    ]
},

{
    id:50,
    categoria:"Pagamentos",
    relacionadas:[47,48,49],
    pergunta:"Os pagamentos realizados no Mobiliza são seguros?",
    palavras:[
        "segurança","pagamento seguro","criptografia"
    ],
    tempo:"2 minutos",
    dificuldade:"Fácil",
    passos:[
        "Todos os pagamentos utilizam conexão criptografada.",
        "Os dados financeiros não ficam armazenados no aplicativo.",
        "As transações seguem padrões modernos de segurança.",
        "Sempre utilize o aplicativo oficial do Mobiliza."
    ],
    observacoes:[
        "Nunca informe sua senha para terceiros."
    ]
},

/* ===========================================================
   APLICATIVO MOBILE
=========================================================== */

{
    id:51,
    categoria:"Aplicativo",
    relacionadas:[52,53,54],
    pergunta:"Como baixar o aplicativo Mobiliza?",
    palavras:[
        "baixar app","instalar","download","play store","app store"
    ],
    tempo:"2 minutos",
    dificuldade:"Fácil",
    passos:[
        "Acesse a Google Play Store ou Apple App Store.",
        "Pesquise por 'Mobiliza'.",
        "Verifique se o desenvolvedor é o oficial.",
        "Clique em Instalar.",
        "Aguarde o download ser concluído.",
        "Abra o aplicativo.",
        "Realize seu cadastro ou login."
    ],
    observacoes:[
        "Baixe somente pelas lojas oficiais.",
        "Evite instalar aplicativos de terceiros."
    ]
},

{
    id:52,
    categoria:"Aplicativo",
    relacionadas:[51,53,55],
    pergunta:"Como atualizar o aplicativo Mobiliza?",
    palavras:[
        "atualizar","nova versão","update","play store"
    ],
    tempo:"2 minutos",
    dificuldade:"Fácil",
    passos:[
        "Abra a loja de aplicativos.",
        "Pesquise Mobiliza.",
        "Caso exista atualização clique em Atualizar.",
        "Aguarde a instalação.",
        "Abra novamente o aplicativo."
    ],
    observacoes:[
        "Sempre utilize a versão mais recente."
    ]
},

{
    id:53,
    categoria:"Aplicativo",
    relacionadas:[51,52,56],
    pergunta:"O aplicativo fecha sozinho. O que fazer?",
    palavras:[
        "fecha sozinho","crash","travando","erro aplicativo"
    ],
    tempo:"4 minutos",
    dificuldade:"Médio",
    passos:[
        "Feche completamente o aplicativo.",
        "Reinicie o celular.",
        "Verifique se existe atualização.",
        "Limpe o cache do aplicativo.",
        "Caso continue ocorrendo reinstale o Mobiliza."
    ],
    observacoes:[
        "A maioria dos problemas é resolvida com atualização."
    ]
},

{
    id:54,
    categoria:"Aplicativo",
    relacionadas:[51,55,57],
    pergunta:"Quais celulares são compatíveis?",
    palavras:[
        "compatível","android","iphone","ios","celular"
    ],
    tempo:"1 minuto",
    dificuldade:"Fácil",
    passos:[
        "O Mobiliza funciona em Android e iPhone.",
        "Utilize sempre versões atualizadas do sistema operacional.",
        "Mantenha espaço livre para melhor desempenho."
    ],
    observacoes:[
        "Versões muito antigas podem não ser compatíveis."
    ]
},

{
    id:55,
    categoria:"Aplicativo",
    relacionadas:[52,54,58],
    pergunta:"Como permitir notificações do Mobiliza?",
    palavras:[
        "notificação","avisos","alertas"
    ],
    tempo:"2 minutos",
    dificuldade:"Fácil",
    passos:[
        "Abra Configurações do celular.",
        "Entre em Aplicativos.",
        "Selecione Mobiliza.",
        "Abra Notificações.",
        "Ative todas as permissões."
    ],
    observacoes:[
        "As notificações informam recargas e avisos importantes."
    ]
},

{
    id:56,
    categoria:"Aplicativo",
    relacionadas:[53,57,59],
    pergunta:"Como limpar o cache do aplicativo?",
    palavras:[
        "cache","memória","armazenamento"
    ],
    tempo:"2 minutos",
    dificuldade:"Médio",
    passos:[
        "Abra Configurações.",
        "Entre em Aplicativos.",
        "Selecione Mobiliza.",
        "Abra Armazenamento.",
        "Clique em Limpar Cache."
    ],
    observacoes:[
        "Seus dados não serão apagados."
    ]
},

{
    id:57,
    categoria:"Aplicativo",
    relacionadas:[54,56,60],
    pergunta:"Troquei de celular. Como acessar minha conta?",
    palavras:[
        "novo celular","trocar aparelho","outro telefone"
    ],
    tempo:"2 minutos",
    dificuldade:"Fácil",
    passos:[
        "Instale o Mobiliza no novo aparelho.",
        "Faça login com seu e-mail.",
        "Digite sua senha.",
        "Confirme sua identidade, caso solicitado.",
        "Todos os seus dados serão sincronizados."
    ],
    observacoes:[
        "Não é necessário criar uma nova conta."
    ]
},

{
    id:58,
    categoria:"Aplicativo",
    relacionadas:[55,59,60],
    pergunta:"O aplicativo consome muita bateria?",
    palavras:[
        "bateria","consumo","energia"
    ],
    tempo:"1 minuto",
    dificuldade:"Fácil",
    passos:[
        "Mantenha o aplicativo atualizado.",
        "Feche aplicativos em segundo plano.",
        "Utilize brilho automático.",
        "Atualize o sistema do celular."
    ],
    observacoes:[
        "O Mobiliza foi otimizado para baixo consumo."
    ]
},

{
    id:59,
    categoria:"Aplicativo",
    relacionadas:[56,58,60],
    pergunta:"O aplicativo funciona sem internet?",
    palavras:[
        "offline","internet","sem conexão"
    ],
    tempo:"2 minutos",
    dificuldade:"Fácil",
    passos:[
        "Algumas informações ficam disponíveis offline.",
        "Consultas de saldo e sincronizações exigem internet.",
        "Recargas necessitam conexão ativa."
    ],
    observacoes:[
        "Sempre utilize internet para garantir dados atualizados."
    ]
},

{
    id:60,
    categoria:"Aplicativo",
    relacionadas:[57,58,59],
    pergunta:"Como sincronizar novamente meus dados?",
    palavras:[
        "sincronizar","atualizar dados","recarregar"
    ],
    tempo:"2 minutos",
    dificuldade:"Fácil",
    passos:[
        "Abra o aplicativo.",
        "Na tela inicial deslize para baixo.",
        "Aguarde a sincronização.",
        "Confira se os dados foram atualizados."
    ],
    observacoes:[
        "Necessário possuir conexão com a internet."
    ]
},

/* ===========================================================
   SEGURANÇA
=========================================================== */

{
    id:61,
    categoria:"Segurança",
    relacionadas:[62,63,64],
    pergunta:"Como manter minha conta Mobiliza segura?",
    palavras:[
        "segurança","proteger conta","senha","conta segura","proteção"
    ],
    tempo:"3 minutos",
    dificuldade:"Fácil",
    passos:[
        "Utilize uma senha forte contendo letras, números e caracteres especiais.",
        "Nunca compartilhe sua senha com terceiros.",
        "Evite utilizar a mesma senha em outros serviços.",
        "Mantenha seu aplicativo sempre atualizado.",
        "Saia da conta ao utilizar dispositivos compartilhados."
    ],
    observacoes:[
        "A segurança da sua conta também depende dos seus hábitos de utilização."
    ]
},

{
    id:62,
    categoria:"Segurança",
    relacionadas:[61,63,65],
    pergunta:"Como alterar minha senha?",
    palavras:[
        "alterar senha","trocar senha","nova senha"
    ],
    tempo:"2 minutos",
    dificuldade:"Fácil",
    passos:[
        "Faça login no aplicativo.",
        "Acesse Perfil.",
        "Entre em Segurança.",
        "Selecione Alterar Senha.",
        "Digite sua senha atual.",
        "Informe a nova senha.",
        "Confirme a alteração."
    ],
    observacoes:[
        "Escolha uma senha diferente das utilizadas anteriormente."
    ]
},

{
    id:63,
    categoria:"Segurança",
    relacionadas:[61,62,66],
    pergunta:"Esqueci minha senha. Como redefinir?",
    palavras:[
        "esqueci senha","recuperar senha","nova senha"
    ],
    tempo:"2 minutos",
    dificuldade:"Fácil",
    passos:[
        "Na tela de Login clique em Esqueci minha senha.",
        "Informe seu e-mail.",
        "Acesse o link recebido.",
        "Cadastre uma nova senha.",
        "Faça login novamente."
    ],
    observacoes:[
        "Verifique também sua caixa de Spam."
    ]
},

{
    id:64,
    categoria:"Segurança",
    relacionadas:[61,65,67],
    pergunta:"Recebi um aviso de acesso em um dispositivo desconhecido.",
    palavras:[
        "dispositivo","acesso","login suspeito","segurança"
    ],
    tempo:"4 minutos",
    dificuldade:"Médio",
    passos:[
        "Altere sua senha imediatamente.",
        "Encerre todas as sessões ativas.",
        "Verifique seus dados pessoais.",
        "Caso não reconheça o acesso entre em contato com o suporte."
    ],
    observacoes:[
        "Nunca ignore alertas de segurança."
    ]
},

{
    id:65,
    categoria:"Segurança",
    relacionadas:[62,64,68],
    pergunta:"Posso utilizar minha conta em mais de um celular?",
    palavras:[
        "vários celulares","outro aparelho","login em outro celular"
    ],
    tempo:"2 minutos",
    dificuldade:"Fácil",
    passos:[
        "Faça login normalmente no novo aparelho.",
        "O sistema poderá solicitar confirmação da identidade.",
        "Alguns recursos poderão exigir nova autenticação."
    ],
    observacoes:[
        "Por segurança, acessos simultâneos podem ser limitados."
    ]
},

{
    id:66,
    categoria:"Segurança",
    relacionadas:[63,67,69],
    pergunta:"Como identificar tentativas de fraude?",
    palavras:[
        "fraude","golpe","phishing","segurança"
    ],
    tempo:"5 minutos",
    dificuldade:"Médio",
    passos:[
        "Desconfie de mensagens solicitando sua senha.",
        "Nunca informe códigos recebidos por SMS ou e-mail.",
        "Acesse apenas os canais oficiais do Mobiliza.",
        "Verifique sempre o endereço do site antes de inserir seus dados."
    ],
    observacoes:[
        "O Mobiliza nunca solicita sua senha por telefone, e-mail ou WhatsApp."
    ]
},

{
    id:67,
    categoria:"Segurança",
    relacionadas:[64,66,70],
    pergunta:"O Mobiliza protege meus dados pessoais?",
    palavras:[
        "lgpd","dados pessoais","privacidade","proteção de dados"
    ],
    tempo:"3 minutos",
    dificuldade:"Fácil",
    passos:[
        "Todos os dados são tratados conforme a Lei Geral de Proteção de Dados (LGPD).",
        "As informações são utilizadas apenas para prestação dos serviços.",
        "Os dados são armazenados em ambiente seguro.",
        "O acesso às informações é restrito."
    ],
    observacoes:[
        "Consulte nossa Política de Privacidade para mais informações."
    ]
},

{
    id:68,
    categoria:"Segurança",
    relacionadas:[65,69,70],
    pergunta:"Como sair da minha conta com segurança?",
    palavras:[
        "logout","sair","encerrar sessão"
    ],
    tempo:"1 minuto",
    dificuldade:"Fácil",
    passos:[
        "Abra o menu Perfil.",
        "Role até o final da página.",
        "Clique em Sair.",
        "Confirme a operação."
    ],
    observacoes:[
        "Sempre encerre a sessão em dispositivos públicos."
    ]
},

{
    id:69,
    categoria:"Segurança",
    relacionadas:[66,68,70],
    pergunta:"Posso compartilhar minha conta com outra pessoa?",
    palavras:[
        "compartilhar conta","emprestar conta","outra pessoa"
    ],
    tempo:"2 minutos",
    dificuldade:"Fácil",
    passos:[
        "Não compartilhe sua conta.",
        "Cada usuário deve possuir seu próprio cadastro.",
        "O compartilhamento pode comprometer sua segurança."
    ],
    observacoes:[
        "Você é responsável pelas ações realizadas em sua conta."
    ]
},

{
    id:70,
    categoria:"Segurança",
    relacionadas:[67,68,69],
    pergunta:"Como entrar em contato caso suspeite de fraude?",
    palavras:[
        "fraude","golpe","suporte","segurança","contato"
    ],
    tempo:"3 minutos",
    dificuldade:"Fácil",
    passos:[
        "Acesse a Central de Ajuda.",
        "Selecione a opção Suporte.",
        "Informe o ocorrido com o máximo de detalhes.",
        "Anexe imagens ou comprovantes, se necessário.",
        "Aguarde o retorno da equipe."
    ],
    observacoes:[
        "Quanto mais rápido o contato, maiores as chances de proteger sua conta."
    ]
},

/* ===========================================================
   PROBLEMAS TÉCNICOS
=========================================================== */

{
    id:71,
    categoria:"Problemas Técnicos",
    relacionadas:[72,73,74],
    pergunta:"O aplicativo não abre. O que devo fazer?",
    palavras:[
        "não abre","erro","iniciar aplicativo","app travou","falha"
    ],
    tempo:"3 minutos",
    dificuldade:"Fácil",
    passos:[
        "Feche completamente o aplicativo.",
        "Reinicie o seu celular.",
        "Verifique se existe atualização disponível.",
        "Confira se há espaço livre no armazenamento.",
        "Abra novamente o Mobiliza.",
        "Caso o problema continue, reinstale o aplicativo."
    ],
    observacoes:[
        "A maioria dos problemas é resolvida após atualização ou reinstalação."
    ]
},

{
    id:72,
    categoria:"Problemas Técnicos",
    relacionadas:[71,73,75],
    pergunta:"O aplicativo está muito lento.",
    palavras:[
        "lentidão","travando","demora","desempenho","lento"
    ],
    tempo:"4 minutos",
    dificuldade:"Fácil",
    passos:[
        "Feche outros aplicativos abertos.",
        "Reinicie o aparelho.",
        "Atualize o Mobiliza.",
        "Verifique sua conexão com a internet.",
        "Limpe o cache do aplicativo."
    ],
    observacoes:[
        "Pouco espaço livre pode reduzir o desempenho."
    ]
},

{
    id:73,
    categoria:"Problemas Técnicos",
    relacionadas:[71,72,76],
    pergunta:"Não consigo sincronizar meus dados.",
    palavras:[
        "sincronização","dados","atualizar","sincronizar"
    ],
    tempo:"3 minutos",
    dificuldade:"Médio",
    passos:[
        "Confira sua conexão.",
        "Puxe a tela inicial para baixo para sincronizar.",
        "Faça logout.",
        "Entre novamente na conta.",
        "Verifique se os dados foram atualizados."
    ],
    observacoes:[
        "Necessário possuir conexão ativa com a internet."
    ]
},

{
    id:74,
    categoria:"Problemas Técnicos",
    relacionadas:[71,75,77],
    pergunta:"Recebo mensagem de erro ao abrir o aplicativo.",
    palavras:[
        "erro","mensagem","falha","código"
    ],
    tempo:"5 minutos",
    dificuldade:"Médio",
    passos:[
        "Anote o código do erro.",
        "Atualize o aplicativo.",
        "Reinicie o celular.",
        "Tente novamente.",
        "Persistindo o erro envie o código ao suporte."
    ],
    observacoes:[
        "O código ajuda a equipe técnica a identificar o problema."
    ]
},

{
    id:75,
    categoria:"Problemas Técnicos",
    relacionadas:[72,74,78],
    pergunta:"As notificações não chegam.",
    palavras:[
        "notificação","push","alerta","aviso"
    ],
    tempo:"2 minutos",
    dificuldade:"Fácil",
    passos:[
        "Abra Configurações do celular.",
        "Entre em Aplicativos.",
        "Selecione Mobiliza.",
        "Ative as notificações.",
        "Reabra o aplicativo."
    ],
    observacoes:[
        "Alguns modos de economia de bateria bloqueiam notificações."
    ]
},

{
    id:76,
    categoria:"Problemas Técnicos",
    relacionadas:[73,77,79],
    pergunta:"Erro de conexão com o servidor.",
    palavras:[
        "servidor","internet","conexão","offline"
    ],
    tempo:"3 minutos",
    dificuldade:"Fácil",
    passos:[
        "Verifique sua internet.",
        "Teste outra rede Wi-Fi ou dados móveis.",
        "Atualize a tela.",
        "Caso continue, aguarde alguns minutos."
    ],
    observacoes:[
        "Pode ocorrer durante manutenções programadas."
    ]
},

{
    id:77,
    categoria:"Problemas Técnicos",
    relacionadas:[74,76,80],
    pergunta:"A atualização do aplicativo falhou.",
    palavras:[
        "atualização","play store","app store","erro atualização"
    ],
    tempo:"5 minutos",
    dificuldade:"Médio",
    passos:[
        "Reinicie o celular.",
        "Abra novamente a loja de aplicativos.",
        "Verifique espaço disponível.",
        "Atualize novamente.",
        "Caso necessário reinstale o aplicativo."
    ],
    observacoes:[
        "Mantenha sempre espaço livre no dispositivo."
    ]
},

{
    id:78,
    categoria:"Problemas Técnicos",
    relacionadas:[75,79,80],
    pergunta:"O aplicativo fecha após fazer login.",
    palavras:[
        "fecha","crash","login","erro"
    ],
    tempo:"4 minutos",
    dificuldade:"Médio",
    passos:[
        "Limpe o cache.",
        "Atualize o aplicativo.",
        "Reinicie o celular.",
        "Entre novamente.",
        "Caso continue reinstale o aplicativo."
    ],
    observacoes:[
        "Verifique também se o sistema operacional está atualizado."
    ]
},

{
    id:79,
    categoria:"Problemas Técnicos",
    relacionadas:[76,78,80],
    pergunta:"Minha internet funciona, mas o Mobiliza não conecta.",
    palavras:[
        "internet","wifi","dados móveis","sem conexão"
    ],
    tempo:"3 minutos",
    dificuldade:"Médio",
    passos:[
        "Troque entre Wi-Fi e Dados Móveis.",
        "Desative VPN caso esteja utilizando.",
        "Atualize a tela.",
        "Reinicie o aplicativo.",
        "Caso necessário reinicie o aparelho."
    ],
    observacoes:[
        "Algumas redes corporativas podem bloquear conexões."
    ]
},

{
    id:80,
    categoria:"Problemas Técnicos",
    relacionadas:[77,78,79],
    pergunta:"Como enviar um erro para o suporte técnico?",
    palavras:[
        "reportar erro","bug","suporte","problema"
    ],
    tempo:"4 minutos",
    dificuldade:"Fácil",
    passos:[
        "Abra a Central de Ajuda.",
        "Selecione Suporte Técnico.",
        "Descreva detalhadamente o problema.",
        "Informe o modelo do aparelho.",
        "Informe a versão do Android ou iOS.",
        "Anexe capturas de tela.",
        "Envie a solicitação."
    ],
    observacoes:[
        "Quanto mais informações forem enviadas, mais rápida será a análise."
    ]
},

/* ===========================================================
   TRANSPORTE PÚBLICO
=========================================================== */

{
    id:81,
    categoria:"Transporte Público",
    relacionadas:[82,83,84],
    pergunta:"Como utilizar o Bilhete Virtual durante a viagem?",
    palavras:[
        "usar bilhete","embarque","viagem","transporte","utilizar"
    ],
    tempo:"2 minutos",
    dificuldade:"Fácil",
    passos:[
        "Abra o aplicativo Mobiliza.",
        "Entre na opção Bilhete Virtual.",
        "Verifique se existe saldo disponível.",
        "Aproxime o celular do equipamento de validação quando solicitado pela operadora.",
        "Aguarde a confirmação da leitura.",
        "Após a validação sua viagem será registrada automaticamente."
    ],
    observacoes:[
        "Mantenha a tela desbloqueada durante a utilização.",
        "Verifique se o brilho da tela está adequado."
    ]
},

{
    id:82,
    categoria:"Transporte Público",
    relacionadas:[81,83,85],
    pergunta:"Posso utilizar o Bilhete Virtual sem internet?",
    palavras:[
        "offline","internet","dados móveis","sem conexão"
    ],
    tempo:"2 minutos",
    dificuldade:"Fácil",
    passos:[
        "Algumas informações permanecem armazenadas no aparelho.",
        "O funcionamento depende das regras da operadora de transporte.",
        "Sempre que possível sincronize o aplicativo antes de sair."
    ],
    observacoes:[
        "Recomenda-se possuir conexão antes do embarque."
    ]
},

{
    id:83,
    categoria:"Transporte Público",
    relacionadas:[81,82,86],
    pergunta:"Meu celular descarregou durante a viagem. O que acontece?",
    palavras:[
        "bateria","celular desligado","sem bateria"
    ],
    tempo:"3 minutos",
    dificuldade:"Médio",
    passos:[
        "Sempre mantenha seu aparelho carregado.",
        "Caso possível utilize um carregador portátil.",
        "Verifique as orientações da empresa de transporte da sua cidade."
    ],
    observacoes:[
        "O Bilhete Virtual depende do funcionamento do aparelho."
    ]
},

{
    id:84,
    categoria:"Transporte Público",
    relacionadas:[81,85,87],
    pergunta:"Como consultar meu histórico de viagens?",
    palavras:[
        "histórico","viagens","utilizações","embarques"
    ],
    tempo:"1 minuto",
    dificuldade:"Fácil",
    passos:[
        "Abra o aplicativo.",
        "Entre em Bilhete Virtual.",
        "Selecione Histórico de Viagens.",
        "Visualize todas as utilizações realizadas."
    ],
    observacoes:[
        "Cada viagem apresenta data, horário e valor."
    ]
},

{
    id:85,
    categoria:"Transporte Público",
    relacionadas:[82,84,88],
    pergunta:"Posso utilizar o Bilhete Virtual em diferentes linhas?",
    palavras:[
        "linha","ônibus","integração","transporte"
    ],
    tempo:"2 minutos",
    dificuldade:"Fácil",
    passos:[
        "O Bilhete Virtual funciona conforme as regras da operadora.",
        "Verifique as condições de integração da sua cidade.",
        "As regras podem variar entre municípios."
    ],
    observacoes:[
        "Consulte a legislação do transporte local."
    ]
},

{
    id:86,
    categoria:"Transporte Público",
    relacionadas:[83,87,89],
    pergunta:"Meu Bilhete Virtual foi recusado na validação.",
    palavras:[
        "recusado","validação","erro","embarque"
    ],
    tempo:"4 minutos",
    dificuldade:"Médio",
    passos:[
        "Confira seu saldo.",
        "Atualize o aplicativo.",
        "Sincronize os dados.",
        "Tente novamente.",
        "Persistindo o problema entre em contato com o suporte."
    ],
    observacoes:[
        "Em alguns casos pode ser necessário atualizar os créditos."
    ]
},

{
    id:87,
    categoria:"Transporte Público",
    relacionadas:[84,86,90],
    pergunta:"Como verificar se meu Bilhete Virtual está ativo?",
    palavras:[
        "ativo","bilhete","status","habilitado"
    ],
    tempo:"1 minuto",
    dificuldade:"Fácil",
    passos:[
        "Abra o aplicativo.",
        "Entre em Bilhete Virtual.",
        "Confira o status apresentado na tela.",
        "Caso esteja inativo siga as orientações exibidas."
    ],
    observacoes:[
        "O aplicativo informa automaticamente o status do bilhete."
    ]
},

{
    id:88,
    categoria:"Transporte Público",
    relacionadas:[85,89,90],
    pergunta:"O Bilhete Virtual possui prazo de validade?",
    palavras:[
        "validade","expira","vencimento"
    ],
   tempo:"2 minutos",
    dificuldade:"Fácil",
    passos:[
        "O Bilhete Virtual permanece ativo enquanto sua conta estiver regular.",
        "Mantenha seus dados atualizados.",
        "Consulte as regras da operadora de transporte."
    ],
    observacoes:[
        "Alguns benefícios podem possuir prazo específico."
    ]
},

{
    id:89,
    categoria:"Transporte Público",
    relacionadas:[86,88,90],
    pergunta:"Como atualizar meus créditos antes da viagem?",
    palavras:[
        "atualizar créditos","saldo","recarga"
    ],
    tempo:"2 minutos",
    dificuldade:"Fácil",
    passos:[
        "Abra o aplicativo.",
        "Puxe a tela para baixo.",
        "Aguarde a sincronização.",
        "Confira o saldo atualizado."
    ],
    observacoes:[
        "Realize essa atualização antes de iniciar sua viagem."
    ]
},

{
    id:90,
    categoria:"Transporte Público",
    relacionadas:[87,88,89],
    pergunta:"Posso utilizar o Bilhete Virtual em qualquer cidade?",
    palavras:[
        "cidade","município","outra cidade","transporte"
    ],
    tempo:"3 minutos",
    dificuldade:"Médio",
    passos:[
        "Verifique se o sistema Mobiliza está disponível na cidade desejada.",
        "Consulte as empresas de transporte participantes.",
        "Confira as regras locais de utilização."
    ],
    observacoes:[
        "A disponibilidade depende da integração com cada município."
    ]
},

/* ===========================================================
   SUPORTE E ATENDIMENTO
=========================================================== */

{
    id:91,
    categoria:"Suporte",
    relacionadas:[92,93,94],
    pergunta:"Como entrar em contato com o suporte do Mobiliza?",
    palavras:[
        "suporte","atendimento","ajuda","contato","falar com suporte"
    ],
    tempo:"2 minutos",
    dificuldade:"Fácil",
    passos:[
        "Abra o aplicativo Mobiliza.",
        "Acesse a Central de Ajuda.",
        "Selecione a opção 'Falar com o Suporte'.",
        "Escolha o canal desejado (WhatsApp, E-mail ou Telefone).",
        "Descreva seu problema detalhadamente.",
        "Envie a solicitação."
    ],
    observacoes:[
        "Sempre informe o máximo de detalhes possíveis para agilizar o atendimento."
    ]
},

{
    id:92,
    categoria:"Suporte",
    relacionadas:[91,93,95],
    pergunta:"Como abrir um chamado de atendimento?",
    palavras:[
        "chamado","abrir chamado","suporte técnico","solicitação"
    ],
    tempo:"3 minutos",
    dificuldade:"Fácil",
    passos:[
        "Entre na Central de Ajuda.",
        "Clique em Abrir Chamado.",
        "Escolha a categoria do problema.",
        "Descreva o ocorrido.",
        "Anexe imagens ou comprovantes, se necessário.",
        "Envie a solicitação."
    ],
    observacoes:[
        "Quanto mais informações forem fornecidas, mais rápido será o atendimento."
    ]
},

{
    id:93,
    categoria:"Suporte",
    relacionadas:[91,92,96],
    pergunta:"Como acompanhar o andamento do meu chamado?",
    palavras:[
        "acompanhar","status","protocolo","chamado"
    ],
    tempo:"1 minuto",
    dificuldade:"Fácil",
    passos:[
        "Entre no aplicativo.",
        "Acesse Meus Chamados.",
        "Selecione o protocolo desejado.",
        "Visualize o status atualizado."
    ],
    observacoes:[
        "Você também poderá receber notificações sobre alterações."
    ]
},

{
    id:94,
    categoria:"Suporte",
    relacionadas:[91,95,96],
    pergunta:"Qual o horário de atendimento do suporte?",
    palavras:[
        "horário","atendimento","funcionamento","suporte"
    ],
    tempo:"30 segundos",
    dificuldade:"Fácil",
    passos:[
        "Consulte a tela Contato dentro do aplicativo.",
        "Verifique os horários atualizados de atendimento.",
        "Utilize o canal disponível conforme sua necessidade."
    ],
    observacoes:[
        "Os horários podem sofrer alterações em feriados."
    ]
},

{
    id:95,
    categoria:"Suporte",
    relacionadas:[91,94,97],
    pergunta:"Como falar com o suporte pelo WhatsApp?",
    palavras:[
        "whatsapp","chat","atendimento whatsapp"
    ],
    tempo:"1 minuto",
    dificuldade:"Fácil",
    passos:[
        "Abra a área Contato.",
        "Clique em WhatsApp.",
        "Você será redirecionado automaticamente.",
        "Envie sua mensagem."
    ],
    observacoes:[
        "Tenha seu CPF e protocolo em mãos para agilizar o atendimento."
    ]
},

{
    id:96,
    categoria:"Suporte",
    relacionadas:[93,94,98],
    pergunta:"Como entrar em contato por e-mail?",
    palavras:[
        "email","e-mail","contato","mensagem"
    ],
    tempo:"2 minutos",
    dificuldade:"Fácil",
    passos:[
        "Abra Contato.",
        "Selecione E-mail.",
        "Informe o assunto.",
        "Descreva o problema.",
        "Anexe documentos, se necessário.",
        "Envie a mensagem."
    ],
    observacoes:[
        "Você receberá um número de protocolo."
    ]
},

{
    id:97,
    categoria:"Suporte",
    relacionadas:[95,98,99],
    pergunta:"Como falar com a central telefônica?",
    palavras:[
        "telefone","ligação","central","0800"
    ],
    tempo:"2 minutos",
    dificuldade:"Fácil",
    passos:[
        "Acesse a tela Contato.",
        "Visualize o telefone oficial.",
        "Realize a ligação.",
        "Informe seus dados ao atendente."
    ],
    observacoes:[
        "Tenha um documento de identificação em mãos."
    ]
},

{
    id:98,
    categoria:"Suporte",
    relacionadas:[96,97,100],
    pergunta:"Onde encontro a Política de Privacidade?",
    palavras:[
        "política","privacidade","lgpd","dados"
    ],
    tempo:"1 minuto",
    dificuldade:"Fácil",
    passos:[
        "Role até o rodapé do site.",
        "Clique em Política de Privacidade.",
        "Leia todas as informações referentes ao tratamento de dados."
    ],
    observacoes:[
        "A Política segue a Lei Geral de Proteção de Dados (LGPD)."
    ]
},

{
    id:99,
    categoria:"Suporte",
    relacionadas:[97,100,91],
    pergunta:"Onde posso consultar os Termos de Uso?",
    palavras:[
        "termos","contrato","uso","condições"
    ],
    tempo:"1 minuto",
    dificuldade:"Fácil",
    passos:[
        "Acesse o rodapé do site.",
        "Clique em Termos de Uso.",
        "Leia todas as condições de utilização do Mobiliza."
    ],
    observacoes:[
        "Recomendamos a leitura antes da utilização dos serviços."
    ]
},

{
    id:100,
    categoria:"Suporte",
    relacionadas:[98,99,91],
    pergunta:"Quais são os canais oficiais do Mobiliza?",
    palavras:[
        "site","instagram","facebook","linkedin","whatsapp","email","telefone","oficial"
    ],
    tempo:"2 minutos",
    dificuldade:"Fácil",
    passos:[
        "Utilize somente os canais oficiais divulgados pelo Mobiliza.",
        "Acesse nosso site oficial.",
        "Siga nossas redes sociais verificadas.",
        "Utilize apenas WhatsApp, e-mail e telefone oficiais.",
        "Nunca forneça informações pessoais para canais não oficiais."
    ],
    observacoes:[
        "O Mobiliza nunca solicita senhas ou códigos de verificação por telefone, WhatsApp ou e-mail."
    ]
},

    ];

export default faqData;