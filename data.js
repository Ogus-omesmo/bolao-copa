// ===== DADOS DOS JOGADORES =====
const players = {
    capita: {
        name: 'CAPITA',
        points: 0,
        predictions: {}
    },
    certezas: {
        name: 'CERTEZAS',
        points: 0,
        predictions: {}
    },
    gil: {
        name: 'GIL',
        points: 0,
        predictions: {}
    },
    piero: {
        name: 'PIERO',
        points: 0,
        predictions: {}
    },
    walace: {
        name: 'WALACE',
        points: 0,
        predictions: {}
    }
};

// ===== DADOS DOS JOGOS - FASE DE GRUPOS =====
const groupStageGames = [
    {
        id: 'g1',
        date: '2026-06-12',
        time: '14:00',
        stadium: 'Estádio do Morumbi',
        city: 'São Paulo',
        team1: { name: 'Brasil', flag: '🇧🇷' },
        team2: { name: 'Sérbia', flag: '🇷🇸' },
        result: null,
        phase: 'Fase de grupos'
    },
    {
        id: 'g2',
        date: '2026-06-12',
        time: '17:00',
        stadium: 'Estádio Castelão',
        city: 'Fortaleza',
        team1: { name: 'Suíça', flag: '🇨🇭' },
        team2: { name: 'Camarões', flag: '🇨🇲' },
        result: null,
        phase: 'Fase de grupos'
    },
    {
        id: 'g3',
        date: '2026-06-13',
        time: '13:00',
        stadium: 'Estádio Mineirão',
        city: 'Belo Horizonte',
        team1: { name: 'Portugal', flag: '🇵🇹' },
        team2: { name: 'Uruguai', flag: '🇺🇾' },
        result: null,
        phase: 'Fase de grupos'
    },
    {
        id: 'g4',
        date: '2026-06-13',
        time: '16:00',
        stadium: 'Neo Química Arena',
        city: 'São Paulo',
        team1: { name: 'Itália', flag: '🇮🇹' },
        team2: { name: 'Polônia', flag: '🇵🇱' },
        result: null,
        phase: 'Fase de grupos'
    },
    {
        id: 'g5',
        date: '2026-06-14',
        time: '15:00',
        stadium: 'Estádio Beira-Rio',
        city: 'Porto Alegre',
        team1: { name: 'Argentina', flag: '🇦🇷' },
        team2: { name: 'Panamá', flag: '🇵🇦' },
        result: null,
        phase: 'Fase de grupos'
    },
    {
        id: 'g6',
        date: '2026-06-14',
        time: '18:00',
        stadium: 'Estádio do Maracanã',
        city: 'Rio de Janeiro',
        team1: { name: 'França', flag: '🇫🇷' },
        team2: { name: 'Irã', flag: '🇮🇷' },
        result: null,
        phase: 'Fase de grupos'
    }
];

// ===== DADOS DOS PRÓXIMOS JOGOS =====
const upcomingGames = [
    {
        id: 'u1',
        date: '2026-06-12',
        time: '14:00',
        stadium: 'Estádio do Morumbi',
        city: 'São Paulo',
        team1: { name: 'Brasil', flag: '🇧🇷' },
        team2: { name: 'Sérvia', flag: '🇷🇸' },
        result: null,
        phase: 'Próximos'
    },
    {
        id: 'u2',
        date: '2026-06-12',
        time: '17:00',
        stadium: 'Estádio Castelão',
        city: 'Fortaleza',
        team1: { name: 'Suíça', flag: '🇨🇭' },
        team2: { name: 'Camarões', flag: '🇨🇲' },
        result: null,
        phase: 'Próximos'
    }
];

// ===== DADOS DOS JOGOS - MATA-MATA =====
const knockoutGames = [
    {
        id: 'ko1',
        date: '2026-07-03',
        time: '16:00',
        stadium: 'Estádio do Maracanã',
        city: 'Rio de Janeiro',
        team1: { name: '1º A', flag: '🥇' },
        team2: { name: '2º B', flag: '🥈' },
        result: null,
        phase: 'Oitavas'
    },
    {
        id: 'ko2',
        date: '2026-07-03',
        time: '20:00',
        stadium: 'Estádio Mineirão',
        city: 'Belo Horizonte',
        team1: { name: '1º B', flag: '🥇' },
        team2: { name: '2º A', flag: '🥈' },
        result: null,
        phase: 'Oitavas'
    },
    {
        id: 'ko3',
        date: '2026-07-12',
        time: '16:00',
        stadium: 'Neo Química Arena',
        city: 'São Paulo',
        team1: { name: 'Vencedor KO1', flag: '⚽' },
        team2: { name: 'Vencedor KO2', flag: '⚽' },
        result: null,
        phase: 'Semifinal'
    },
    {
        id: 'ko4',
        date: '2026-07-13',
        time: '16:00',
        stadium: 'Estádio Beira-Rio',
        city: 'Porto Alegre',
        team1: { name: 'Vencedor KO3', flag: '⚽' },
        team2: { name: 'Vencedor KO4', flag: '⚽' },
        result: null,
        phase: 'Semifinal'
    },
    {
        id: 'final',
        date: '2026-07-20',
        time: '18:00',
        stadium: 'Estádio do Maracanã',
        city: 'Rio de Janeiro',
        team1: { name: 'Semifinalista 1', flag: '🏆' },
        team2: { name: 'Semifinalista 2', flag: '🏆' },
        result: null,
        phase: 'Final'
    }
];

// ===== DADOS DOS BÔNUS =====
const bonusOptions = [
    {
        id: 'bonus1',
        title: 'Campeão',
        options: [
            { value: 'brasil', label: 'Brasil 🇧🇷', points: 50 },
            { value: 'argentina', label: 'Argentina 🇦🇷', points: 50 },
            { value: 'franca', label: 'França 🇫🇷', points: 50 },
            { value: 'outro', label: 'Outro', points: 100 }
        ]
    },
    {
        id: 'bonus2',
        title: 'Artilheiro',
        options: [
            { value: 'neymar', label: 'Neymar 🇧🇷', points: 30 },
            { value: 'messi', label: 'Messi 🇦🇷', points: 30 },
            { value: 'mbappe', label: 'Mbappé 🇫🇷', points: 30 },
            { value: 'outro', label: 'Outro', points: 50 }
        ]
    }
];

// ===== FUNÇÃO PARA SALVAR PALPITE =====
function savePrediction(gameId, team1Score, team2Score, currentPlayer) {
    if (!players[currentPlayer]) return;
    
    if (!players[currentPlayer].predictions[gameId]) {
        players[currentPlayer].predictions[gameId] = {};
    }
    
    players[currentPlayer].predictions[gameId] = {
        team1Score: parseInt(team1Score),
        team2Score: parseInt(team2Score),
        timestamp: new Date()
    };
    
    // Salvar no localStorage
    localStorage.setItem('predictions', JSON.stringify(players));
    console.log(`Palpite salvo para ${gameId} pelo jogador ${currentPlayer}`);
}

// ===== FUNÇÃO PARA CARREGAR PALPITES DO LOCALSTORAGE =====
function loadPredictions() {
    const saved = localStorage.getItem('predictions');
    if (saved) {
        const savedData = JSON.parse(saved);
        Object.assign(players, savedData);
    }
}

// ===== FUNÇÃO PARA CALCULAR PONTUAÇÃO =====
function calculateScore(gameId, team1Score, team2Score, realTeam1Score, realTeam2Score) {
    let score = 0;
    
    // Acertar placar exato = 10 pontos
    if (team1Score === realTeam1Score && team2Score === realTeam2Score) {
        score = 10;
    }
    // Acertar o vencedor = 5 pontos
    else if ((team1Score > team2Score && realTeam1Score > realTeam2Score) ||
             (team1Score < team2Score && realTeam1Score < realTeam2Score) ||
             (team1Score === team2Score && realTeam1Score === realTeam2Score)) {
        score = 5;
    }
    
    return score;
}

// Carregar palpites ao iniciar a página
loadPredictions();
