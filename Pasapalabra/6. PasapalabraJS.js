const questions = [ 
    {status: true, letter: 'a', answer: 'ajedrez', question:'Con la A. Juego de mesa basado en la estrategia.'},
    {status: true, letter: 'a', answer: 'australia', question:'Con la A. Pais que fue una antigua colonia penal.'},
    {status: true, letter: 'a', answer: 'acuatico', question:'Con la A. Que vive en el agua.'},
    {status: true, letter: 'b', answer: 'barco', question:'Con la B. Medio de transporte maritimo.'},
    {status: true, letter: 'b', answer: 'barcelona', question:'Con la B. Capital de Cataluña.'},
    {status: true, letter: 'b', answer: 'botiquin', question:'Con la B. Armario donde se guarda material medico.'},
    {status: true, letter: 'c', answer: 'calcetin', question:'Con la C. Prenda de ropa, que se usa a pares.'},
    {status: true, letter: 'c', answer: 'colombia', question:'Con la C. Pais donde sucede Encanto.'},
    {status: true, letter: 'c', answer: 'carnivoro', question:'Con la C. Animal con una dieta basada solo en carne.'},
    {status: true, letter: 'd', answer: 'delfin', question:'Con la D. Animal marino de la familia de los mamiferos.'},
    {status: true, letter: 'd', answer: 'dinamarca', question:'Con la D. Pais al que pertenece Groenlandia.'},
    {status: true, letter: 'd', answer: 'dado', question:'Con la D. Objeto con varias caras numeradas.'},
    {status: true, letter: 'e', answer: 'escondite', question:'Con la E. Lugar o sitio donde ocultarse.'},
    {status: true, letter: 'e', answer: 'egipto', question:'Con la E. Pais donde desemboca el rio Nilo.'},
    {status: true, letter: 'e', answer: 'escoba', question:'Con la E. Herramienta para barrer.'},
    {status: true, letter: 'f', answer: 'farola', question:'Con la F. Mobiliario urbano que ilumina la calle.'},
    {status: true, letter: 'f', answer: 'francia', question:'Con la F. Pais del oeste de Europa.'},
    {status: true, letter: 'f', answer: 'foca', question:'Con la F. Mamifero acuatico.'},
    {status: true, letter: 'g', answer: 'gafas', question:'Con la G. Sirve para corregir la vista.'},
    {status: true, letter: 'g', answer: 'ghana', question:'Con la G. Pais situado en el golfo de Guinea.'},
    {status: true, letter: 'g', answer: 'gusano', question:'Con la G. Animal terrestre sin extremidades.'},
    {status: true, letter: 'h', answer: 'hebilla', question:'Con la H. Se puede encontrar en los cinturones.'},
    {status: true, letter: 'h', answer: 'hawai', question:'Con la H. Conjunto de islas en medio del oceano Pacifico.'},
    {status: true, letter: 'h', answer: 'hiena', question:'Con la H. Mamifero con una risa caracteristica.'},
    {status: true, letter: 'i', answer: 'imperio', question:'Con la I. Sistema de govierno autoritario.'},
    {status: true, letter: 'i', answer: 'irlanda', question:'Con la I. Pais que tiene san Patricio como patron.'},
    {status: true, letter: 'i', answer: 'iguana', question:'Con la I. Reptil tropical comunmente verde.'},
    {status: true, letter: 'j', answer: 'jota', question:'Con la J. Baile tipico de la zona de Aragon.'},
    {status: true, letter: 'j', answer: 'japon', question:'Con la J. Pais de islas al este de Corea.'},
    {status: true, letter: 'j', answer: 'jirafa', question:'Con la J. Mamifero con un cuello largo.'},
    {status: true, letter: 'k', answer: 'kiosco', question:'Con la K. Tienda de comics y revistas.'},
    {status: true, letter: 'k', answer: 'york', question:'Contiene la K. Ciudad de Inglaterra que se conoce por el jamon.'},
    {status: true, letter: 'k', answer: 'koala', question:'Con la K. Animal endemico de Australia.'},
    {status: true, letter: 'l', answer: 'lago', question:'Con la L. Gran extension de agua sin salida al mar.'},
    {status: true, letter: 'l', answer: 'libia', question:'Con la L. Pias del sur del Mediterraneo.'},
    {status: true, letter: 'l', answer: 'leon', question:'Con la L. Gran felino conocido por su melena.'},
    {status: true, letter: 'm', answer: 'martillo', question:'Con la M. Utensilio usualmente con cabeza metalica y mango de madera.'},
    {status: true, letter: 'm', answer: 'madrid', question:'Con la M. Capital de España.'},
    {status: true, letter: 'm', answer: 'manati', question:'Con la M. Mamifero acuatico tambien llamado vaca marina.'},
    {status: true, letter: 'n', answer: 'nieto', question:'Con la N. Hijo del hijo de su abuelo.'},
    {status: true, letter: 'n', answer: 'nepal', question:'Con la N. Pais situado en la cordillera del Himalaya.'},
    {status: true, letter: 'n', answer: 'narval', question:'Con la N. Animal marino con un cuerno.'},
    {status: true, letter: 'ñ', answer: 'piraña', question:'Contiene la Ñ. Pez que se encuentra en rios de sur america.'},
    {status: true, letter: 'ñ', answer: 'logroño', question:'Contiene la Ñ. La mayor ciudad de La Rioja.'},
    {status: true, letter: 'ñ', answer: 'ñu', question:'Con la Ñ. Mamifero africano que se desplaza en grandes grupos.'},
    {status: true, letter: 'o', answer: 'ostra', question:'Con la O. Crustaceo valorado por sus perlas.'},
    {status: true, letter: 'o', answer: 'oslo', question:'Con la O. Capital de Noruega.'},
    {status: true, letter: 'o', answer: 'ornitorrinco', question:'Con la O. Mamifero que pone huevos.'},
    {status: true, letter: 'p', answer: 'paraguas', question:'Con la P. Se usa para evitar mojarse en un chaparron.'},
    {status: true, letter: 'p', answer: 'peru', question:'Con la P. Pais con antiguas ciudades Incas.'},
    {status: true, letter: 'p', answer: 'pato', question:'Con la P. Ave acuatica.'},
    {status: true, letter: 'q', answer: 'queso', question:'Con la Q. Derivado de la leche.'},
    {status: true, letter: 'q', answer: 'quebec', question:'Con la Q. Ciudad francofona de Canada.'},
    {status: true, letter: 'q', answer: 'quokka', question:'Con la Q. Animal australiano que siempre rie.'},
    {status: true, letter: 'r', answer: 'raton', question:'Con la R. Pequeño roedor o periferico del ordenador.'},
    {status: true, letter: 'r', answer: 'rusia', question:'Con la R. El pais mas extenso del planeta.'},
    {status: true, letter: 'r', answer: 'rinoceronte', question:'Con la R. Mamifero africano con un cuerno.'},
    {status: true, letter: 's', answer: 'silla', question:'Con la S. Mobiliario que suele acompañar a la mesa.'},
    {status: true, letter: 's', answer: 'somalia', question:'Con la S. Pais situado en el cuerno de Africa.'},
    {status: true, letter: 's', answer: 'sapo', question:'Con la S. Se convierte en principe al besarlo.'},
    {status: true, letter: 't', answer: 'tapon', question:'Con la T. Objeto para cerrar una botella.'},
    {status: true, letter: 't', answer: 'tunez', question:'Con la T. Capital de Tunez.'},
    {status: true, letter: 't', answer: 'topo', question:'Con la T. Mamifero subterraneo ciego.'},
    {status: true, letter: 'u', answer: 'universidad', question:'Con la U. Centro de formacion de alto nivel.'},
    {status: true, letter: 'u', answer: 'ucrania', question:'Con la U. Pais limitrofe con Rusia, Polonia y Rumania.'},
    {status: true, letter: 'u', answer: 'unicornio', question:'Con la U. Animal fantastico con un cuerno.'},
    {status: true, letter: 'v', answer: 'vacuna', question:'Con la V. Procedimiento medico que previene enfermedades.'},
    {status: true, letter: 'v', answer: 'venezuela', question:'Con la V. Pais del norte de sur america.'},
    {status: true, letter: 'v', answer: 'vaca', question:'Con la V. Mamifero del que se suele extraer leche.'},
    {status: true, letter: 'w', answer: 'whisky', question:'Con la W. Bebida alcoholica tipicamente de Estados Unidos.'},
    {status: true, letter: 'w', answer: 'washington', question:'Con la W. Capital de Estados Unidos.'},
    {status: true, letter: 'w', answer: 'wombat', question:'Con la W. Marsupial entrañable por sus heces cubicas.'},
    {status: true, letter: 'y', answer: 'yarda', question:'Con la Y. Medida de longitud del sistema ingles.'},
    {status: true, letter: 'y', answer: 'myanmar', question:'Contiene la Y. Pais antiguamente llamado Birmania.'},
    {status: true, letter: 'y', answer: 'yegua', question:'Con la Y. La hembra del caballo.'},
    {status: true, letter: 'z', answer: 'zafiro', question:'Con la Z. Piedra preciosa usualmente de color azul.'},
    {status: true, letter: 'z', answer: 'zagreb', question:'Con la Z. Capital de Croacia.'},
    {status: true, letter: 'z', answer: 'zorro', question:'Con la Z. Mamifero astuto, comunmente de pelaje rojo.'}
];
let ranking = [
    {name: 'Admin', correct: 27},
    {name: 'Silvia', correct: 24},
    {name: 'Lucas', correct: 20},
    {name: 'Marc', correct: 13}
]; 
const totalOfLetters = 26;

const welcomeNameAndGreet = () => {
    console.log('Bienvenid@ al Pasapalabra');
    let nameOk = false;
    let playerName;
    do{
        playerName = prompt('Cual es tu nombre?');
        if(playerName === null) {
            console.log('Lo siento, cual?');
        }else if(playerName.trim !== '' && isNaN(playerName)){
            nameOk = true;
        }else{
            console.log('Lo siento, cual?');
        }
    }
    while(nameOk === false);
    console.log(`Hola ${playerName}, preparad@ para jugar`);
    return playerName;
}
const rules = () => {
    console.log('Se ira preguntando letra por letra y tienes 3 opciones:');
    console.log('- Primera, responde sin poner tildes a las respuestas');
    console.log('- Segunda, hacer un "pasapalabra" y saltaremos esa pregunta para mas tarde');
    console.log('- Tercera, cuando quieras terminar pon "end" y el programa se apagara');
    window.alert('Lee las normas del juego que salen en pantalla');
}
const questionListSelector = () => {
    let list = [];
    let lettersCounter = 0;
    for(let i = 0; i < totalOfLetters; i++){
        list.push(questions[Math.floor(Math.random() * 3) + lettersCounter]);
        lettersCounter = lettersCounter + 3;
    }
    return list;
}
const completeCircle = (list) => {
    for(let i = 0; i < totalOfLetters; i++) {
        if(list[i].status === true){
            return true;
        }
    }
    return false;
}
const questionsCircle = (questionsList) => {
    let questionCounter = 0;
    let correctAnswers = 0;
    while(completeCircle(questionsList)){
        let actualQuestion = questionsList[questionCounter];
        if(actualQuestion.status === true){
            switch (reciveAnswers(actualQuestion.question)){
                case actualQuestion.answer:
                    console.log('Correcto');
                    correctAnswers++;
                    actualQuestion.status = false;
                    break;
                case 'pasapalabra':
                    console.log(`Pasapalabra, en la letra ${actualQuestion.letter}`);
                    break;
                case 'end':
                    return ['end', 0];
                default:
                    console.log(`No, lo siento la respuesta correcta es: ${actualQuestion.answer}`);
                    actualQuestion.status = false;
            }
        }
        if(questionCounter === totalOfLetters - 1){
            questionCounter = 0;
        }else{
            questionCounter++;
        }
    }
    return ['complete',correctAnswers];
}
const reciveAnswers = (question) => {
    let answer = prompt(question);
    if(answer === null ){
        return 'error';
    }else if(answer.trim !== '' && isNaN(answer)){
        return answer.toLowerCase();
    }else{
        return 'error';
    }
}
const enterResultsAtRanking = (player) => {
    let i;
    for( i = 0; i < ranking.length; i++){
        if(player.correct > ranking[i].correct){
            break;
        }
    }
    ranking.splice(i , 0, player);  
    showRanking(player);
}
const showRanking = (actualPlayer) => {
    let rankingFormated = ranking.map((element,index) => { 
        return {
            Position: index,
            Name: element.name,
            Score: element.correct
        }
    });
    console.table(rankingFormated);
    console.log(`Bye ${actualPlayer.name}, see you next time`);
}

const pasapalabra = () => {
    let player = {};
    player.name = welcomeNameAndGreet();
    rules();
    let endgame = questionsCircle(questionListSelector());
    if(endgame[0] === 'end'){
        showRanking(player);
    }else{
        player.correct = endgame[1];
        enterResultsAtRanking(player);
    }
}

pasapalabra ();