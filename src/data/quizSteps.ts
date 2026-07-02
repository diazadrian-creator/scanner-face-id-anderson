import type { QuizStep } from '../types'

export const branchStep: QuizStep = {
  id: 'momento',
  type: 'single',
  badge: 'Etapa 1 de 15',
  question: 'Qual é seu momento hoje?',
  subtitle: 'Essa resposta define a rota do seu diagnóstico.',
  options: [
    { id: 'zero', label: 'Quero começar do zero', sub: 'Nunca trabalhei com reparos', icon: 'compass' },
    { id: 'tecnico', label: 'Já trabalho com manutenção', sub: 'Tenho experiência na área', icon: 'tool' },
  ],
}

export const routeASteps: QuizStep[] = [
  {
    id: 'a-abriu-iphone',
    type: 'single',
    route: 'A',
    question: 'Você já abriu um iPhone antes?',
    options: [
      { id: 'nunca', label: 'Nunca abri um iPhone', icon: 'smartphone' },
      { id: 'curioso', label: 'Já abri por curiosidade', icon: 'smartphone' },
      { id: 'tentei', label: 'Já tentei um reparo simples', icon: 'tool' },
    ],
  },
  {
    id: 'a-dificuldade',
    type: 'cards',
    route: 'A',
    question: 'Qual sua maior dificuldade hoje?',
    options: [
      { id: 'nao-sei-comecar', label: 'Não sei por onde começar', icon: 'compass' },
      { id: 'medo-quebrar', label: 'Medo de quebrar o aparelho', icon: 'shield' },
      { id: 'falta-ferramenta', label: 'Acho que preciso de ferramentas caras', icon: 'tool' },
      { id: 'falta-tempo', label: 'Falta de tempo para estudar', icon: 'clock' },
    ],
  },
  {
    id: 'a-quanto-ganhar',
    type: 'single',
    route: 'A',
    question: 'Quanto gostaria de ganhar com reparos?',
    options: [
      { id: 'extra-1000', label: 'Uma renda extra de até R$1.000/mês', icon: 'dollar' },
      { id: 'extra-3000', label: 'Entre R$1.000 e R$3.000/mês', icon: 'dollar' },
      { id: 'nova-profissao', label: 'Quero uma nova profissão em tempo integral', icon: 'trending' },
    ],
  },
  {
    id: 'a-tempo-estudo',
    type: 'single',
    route: 'A',
    question: 'Quanto tempo pode estudar por semana?',
    options: [
      { id: 'ate-2h', label: 'Até 2 horas por semana', icon: 'clock' },
      { id: '3-5h', label: 'Entre 3 e 5 horas por semana', icon: 'clock' },
      { id: '6h-mais', label: '6 horas ou mais por semana', icon: 'clock' },
    ],
  },
  {
    id: 'a-trava',
    type: 'multiple',
    route: 'A',
    question: 'O que mais te trava para começar?',
    subtitle: 'Selecione quantas opções fizerem sentido.',
    multipleMax: 3,
    options: [
      { id: 'medo-errar', label: 'Medo de errar', icon: 'alert' },
      { id: 'sem-metodo', label: 'Não ter um método claro', icon: 'compass' },
      { id: 'sem-equipamento', label: 'Achar que preciso de loja física', icon: 'tool' },
      { id: 'sem-tempo', label: 'Rotina cheia', icon: 'clock' },
      { id: 'sem-dinheiro', label: 'Achar que é caro para começar', icon: 'dollar' },
    ],
  },
  {
    id: 'a-imagem-momento',
    type: 'cards',
    route: 'A',
    question: 'Qual imagem representa seu momento atual?',
    options: [
      { id: 'travado', label: 'Parado, sem direção', icon: 'alert' },
      { id: 'estudando', label: 'Estudando por conta, sem método', icon: 'book' },
      { id: 'motivado', label: 'Motivado, pronto para agir', icon: 'zap' },
      { id: 'perdido', label: 'Perdido entre tantos conteúdos', icon: 'compass' },
    ],
  },
  {
    id: 'a-escala-mudanca',
    type: 'scale',
    route: 'A',
    question: 'De 1 a 5: o quanto você quer mudar de vida agora?',
    scaleLabels: ['Ainda pensando', 'Decidido, sem volta'],
  },
  {
    id: 'a-scratch',
    type: 'scratch',
    route: 'A',
    question: 'Diagnóstico parcial revelado',
    scratchTitle: 'Perfil Iniciante com Alto Potencial',
    scratchSubtitle: 'Arraste o dedo sobre a área escaneada para revelar',
  },
  {
    id: 'a-rotina',
    type: 'single',
    route: 'A',
    question: 'Como é sua rotina atual?',
    options: [
      { id: 'clt', label: 'Trabalho CLT, horário fixo', icon: 'clock' },
      { id: 'autonomo', label: 'Autônomo, rotina flexível', icon: 'compass' },
      { id: 'desempregado', label: 'Buscando uma nova oportunidade', icon: 'target' },
      { id: 'estudante', label: 'Estudante', icon: 'book' },
    ],
  },
  {
    id: 'a-ajuda',
    type: 'multiple',
    route: 'A',
    question: 'Que tipo de ajuda você mais precisa?',
    multipleMax: 3,
    options: [
      { id: 'passo-a-passo', label: 'Passo a passo do zero', icon: 'compass' },
      { id: 'suporte', label: 'Suporte para tirar dúvidas', icon: 'users' },
      { id: 'pratica', label: 'Prática guiada', icon: 'tool' },
      { id: 'comunidade', label: 'Comunidade de apoio', icon: 'users' },
    ],
  },
  {
    id: 'a-custo-parado',
    type: 'single',
    route: 'A',
    question: 'Qual o custo de continuar parado?',
    options: [
      { id: 'perder-tempo', label: 'Perder mais tempo sem evoluir', icon: 'clock' },
      { id: 'perder-dinheiro', label: 'Deixar de ganhar dinheiro todo mês', icon: 'dollar' },
      { id: 'perder-oportunidade', label: 'Ver outros saírem na frente', icon: 'trending' },
    ],
  },
  {
    id: 'a-compromisso',
    type: 'scale',
    route: 'A',
    question: 'De 1 a 5: qual seu nível de compromisso com um método guiado?',
    scaleLabels: ['Baixo', 'Total'],
  },
  {
    id: 'a-confirmacao',
    type: 'single',
    route: 'A',
    question: 'Última etapa: você está pronto para ver seu diagnóstico completo?',
    options: [
      { id: 'sim', label: 'Sim, quero ver meu resultado agora', icon: 'check' },
    ],
  },
]

export const routeBSteps: QuizStep[] = [
  {
    id: 'b-tempo-manutencao',
    type: 'single',
    route: 'B',
    question: 'Há quanto tempo você trabalha com manutenção?',
    options: [
      { id: 'menos-1', label: 'Menos de 1 ano', icon: 'clock' },
      { id: '1-3', label: 'Entre 1 e 3 anos', icon: 'clock' },
      { id: '3-mais', label: 'Mais de 3 anos', icon: 'clock' },
    ],
  },
  {
    id: 'b-servicos',
    type: 'cards',
    route: 'B',
    question: 'Quais serviços você já faz hoje?',
    options: [
      { id: 'tela', label: 'Troca de tela', icon: 'smartphone' },
      { id: 'bateria', label: 'Troca de bateria', icon: 'battery' },
      { id: 'placa', label: 'Reparo de placa', icon: 'cpu' },
      { id: 'software', label: 'Software / desbloqueios', icon: 'zap' },
    ],
  },
  {
    id: 'b-tentou-faceid',
    type: 'single',
    route: 'B',
    question: 'Você já tentou fazer reparo em Face ID?',
    options: [
      { id: 'nunca-tentei', label: 'Nunca tentei', icon: 'alert' },
      { id: 'tentei-nao-deu', label: 'Já tentei, mas não deu certo', icon: 'alert' },
      { id: 'faco-as-vezes', label: 'Já faço, mas com insegurança', icon: 'shield' },
    ],
  },
  {
    id: 'b-dificuldade-tecnica',
    type: 'cards',
    route: 'B',
    question: 'Qual sua maior dificuldade técnica com Face ID?',
    options: [
      { id: 'programacao', label: 'Programação do sensor', icon: 'cpu' },
      { id: 'microsolda', label: 'Microssolda de precisão', icon: 'tool' },
      { id: 'diagnostico', label: 'Diagnóstico do defeito real', icon: 'target' },
      { id: 'sem-equip', label: 'Falta de equipamento certo', icon: 'shield' },
    ],
  },
  {
    id: 'b-quanto-deixa-ganhar',
    type: 'single',
    route: 'B',
    question: 'Quanto você sente que deixa de ganhar por não dominar Face ID?',
    options: [
      { id: 'ate-1000', label: 'Até R$1.000/mês', icon: 'dollar' },
      { id: '1000-3000', label: 'Entre R$1.000 e R$3.000/mês', icon: 'dollar' },
      { id: 'mais-3000', label: 'Mais de R$3.000/mês', icon: 'trending' },
    ],
  },
  {
    id: 'b-imagem-momento',
    type: 'cards',
    route: 'B',
    question: 'Qual imagem representa seu momento atual na oficina?',
    options: [
      { id: 'recusando', label: 'Recusando serviços de Face ID', icon: 'alert' },
      { id: 'terceirizando', label: 'Terceirizando para outro técnico', icon: 'users' },
      { id: 'travado-tecnico', label: 'Travado tecnicamente', icon: 'cpu' },
      { id: 'pronto-escalar', label: 'Pronto para escalar o faturamento', icon: 'trending' },
    ],
  },
  {
    id: 'b-escala-dor',
    type: 'scale',
    route: 'B',
    question: 'De 1 a 5: qual a intensidade dessa dor técnica hoje?',
    scaleLabels: ['Incômodo leve', 'Está travando meu negócio'],
  },
  {
    id: 'b-scratch',
    type: 'scratch',
    route: 'B',
    question: 'Diagnóstico parcial revelado',
    scratchTitle: 'Perfil Técnico com Bloqueio em Face ID',
    scratchSubtitle: 'Arraste o dedo sobre a área escaneada para revelar',
  },
  {
    id: 'b-rotina',
    type: 'single',
    route: 'B',
    question: 'Como é sua rotina de trabalho hoje?',
    options: [
      { id: 'loja-propria', label: 'Tenho loja própria', icon: 'tool' },
      { id: 'freelancer', label: 'Atendo como freelancer', icon: 'compass' },
      { id: 'funcionario', label: 'Sou funcionário de uma assistência', icon: 'users' },
    ],
  },
  {
    id: 'b-ajuda',
    type: 'multiple',
    route: 'B',
    question: 'Que tipo de ajuda você mais precisa agora?',
    multipleMax: 3,
    options: [
      { id: 'metodo-faceid', label: 'Método claro de Face ID', icon: 'compass' },
      { id: 'diagnostico-preciso', label: 'Diagnóstico técnico mais preciso', icon: 'target' },
      { id: 'aumentar-ticket', label: 'Aumentar ticket médio', icon: 'dollar' },
      { id: 'suporte-tecnico', label: 'Suporte técnico direto', icon: 'users' },
    ],
  },
  {
    id: 'b-custo-limitado',
    type: 'single',
    route: 'B',
    question: 'Qual o custo de continuar limitado em Face ID?',
    options: [
      { id: 'perder-clientes', label: 'Perder clientes para concorrentes', icon: 'users' },
      { id: 'perder-faturamento', label: 'Deixar faturamento na mesa todo mês', icon: 'dollar' },
      { id: 'perder-reputacao', label: 'Reputação de oficina incompleta', icon: 'shield' },
    ],
  },
  {
    id: 'b-compromisso',
    type: 'scale',
    route: 'B',
    question: 'De 1 a 5: qual seu nível de compromisso em dominar esse método?',
    scaleLabels: ['Baixo', 'Total'],
  },
  {
    id: 'b-confirmacao',
    type: 'single',
    route: 'B',
    question: 'Última etapa: você está pronto para ver seu diagnóstico completo?',
    options: [
      { id: 'sim', label: 'Sim, quero ver meu resultado agora', icon: 'check' },
    ],
  },
]

export const loadingStep: QuizStep = {
  id: 'loading',
  type: 'loading',
  question: 'Processando diagnóstico',
  loadingMessages: [
    'Escaneando perfil...',
    'Analisando experiência...',
    'Calculando compatibilidade com Face ID...',
    'Gerando diagnóstico...',
  ],
}

export function getRouteSteps(route: 'A' | 'B'): QuizStep[] {
  return route === 'A' ? routeASteps : routeBSteps
}

export const TOTAL_STEPS = 1 + routeASteps.length + 1
