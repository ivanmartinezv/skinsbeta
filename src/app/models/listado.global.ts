export let aspectos_aatrox = [
  {
    i: "",
    na: "Aatrox Luna de Sangre",
    t: "Epica",
    p: 1350,
    l: false,
    o: true,
    po: false,
    b: false,
    idc: 1
  },
  {
    i: "",
    na: "Aatrox Justiciero",
    t: "Barata",
    p: 975,
    l: false,
    o: true,
    po: true,
    b: false,
    idc: 1
  },
  {
    i: "",
    na: "Aatrox Mecha",
    t: "Epica",
    p: 1350,
    l: false,
    o: true,
    po: true,
    b: false,
    idc: 1
  },
  {
    i: "",
    na: "Aatrox Odisea",
    t: "Epica",
    p: 1350,
    l: false,
    o: true,
    po: false,
    b: false,
    idc: 1
  },
  {
    i: "",
    na: "Aatrox Luna de Sangre Edición Prestigiosa",
    t: "Prestigiosa",
    p: 0,
    l: false,
    o: false,
    po: false,
    b: false,
    idc: 1
  },
  {
    i: "",
    na: "Aatrox Cazador Marino",
    t: "Barata",
    p: 750,
    l: false,
    o: true,
    po: false,
    b: false,
    idc: 1
  },
  {
    i: "",
    na: "Aatrox Victorioso",
    t: "Victoriosa",
    p: 0,
    l: false,
    o: false,
    po: false,
    b: false,
    idc: 1
  }
];

//generalizacion de aspectos_aatrox para todos los aspectos
export let LISTADO_ASPECTOS = [];

//no se importa
export const LISTADO_NOMBRE_ASPECTOS = [
  "Aatrox Luna de Sangre",
  "Aatrox Justiciero",
  "Aatrox Mecha",
  "Aatrox Odisea",
  "Aatrox Luna de Sangre Edición Prestigiosa",
  "Aatrox Cazador Marino",
  "Aatrox Victorioso",
  "Ahri Academia",
  "Ahri de Arcadia",
  "Ahri Retadora",
  "Ahri Dinástica",
  "Ahri Bosqueviejo",
  "Ahri Raposa de Fuego",
  "Ahri K/DA",
  "Ahri K/DA ALL OUT",
  "Ahri de Medianoche",
  "Ahri Estrella del Pop",
  "Ahri K/DA Edición Prestigiosa",
  "Ahri Flor Espiritual",
  "Ahri Guardiana Estelar",
  "Akali Supercampeona",
  "Akali Luna de Sangre",
  "Akali Cazadora de Cabezas",
  "Akali Infernal",
  "Akali K/DA",
  "Akali K/DA ALL OUT",
  "Enfermera Akali",
  "PROYECTO: Akali",
  "Akali K/DA Edición Prestigiosa",
  "Akali Sashimi",
  "Akali Colmillo de Plata",
  "Akali Aguijón",
  "Akali True Damage",
  "Alistar Negro",
  "Alistar Escarcha Negra",
  "Alistar Conquistador",
  "Alistar Dorado",
  "Alistar Hextech",
  "Alistar Infernal",
  "Alistar Cuernoslargos",
  "Alistar Bestia Lunar",
  "Alistar Merodeador",
  "Alistar Matador",
  "Alistar Vaquita Mu",
  "Alistar SKT T1",
  "Alistar Leñero",
  "Alistar Desencadenado",
  "Amumu Casi Chambelán",
  "Emumu",
  "Amumu Hextech",
  "Amumu Infernal",
  "Amumu Caballerito Andante",
  "Faraón Amumu",
  "Amumu Príncipe Calabaza",
  "Amumu Regalo Reciclado",
  "Amumu Robot Triste",
  "Amumu Costura del Caos",
  "Amumu Fiesta Sorpresa",
  "Amumu de Vancouver",
  "Anivia Ave de Presa",
  "Anivia Escarcha Negra",
  "Anivia Vuelo Cósmico",
  "Anivia Reina del Carnaval",
  "Anivia Hextech",
  "Anivia Cazadora de Noxus",
  "Anivia Arte de Papel",
  "Anivia Prehistórica",
  "Anivia Espíritu de Equipo",
  "Annie en el País de las Maravillas",
  "Annieversario",
  "Annie FrankenTibbers",
  "Annie Fuego Escarchado",
  "Annie Gótica",
  "Annie Hextech",
  "Annie Bestia Lunar",
  "Annie Osito Panda",
  "Annie Quinceañera",
  "Annie Caperucita Roja",
  "Annie al Revés",
  "Annie Supergaláctica",
  "Annie Cariñosita",
  "Aphelios Bestia Lunar",
  "Aphelios Portador del Anochecer",
  "Ashe Amatista",
  "Ashe de Campeonato",
  "Ashe Reina Cósmica",
  "Ashe Hada Dragón",
  "Ashe del Fréljord",
  "Ashe Buscacorazones",
  "Ashe la Forajida",
  "Ashe Merodeadora",
  "PROYECTO: Ashe",
  "Reina Ashe",
  "Ashe Bosque de Sherwood",
  "Ashe Tribu Woad",
  "Aurelion Sol Señor de las Cenizas",
  "Aurelion Sol Mecha",
  "Aurelion Sol Dragón de la Tormenta",
  "Azir Bosqueviejo",
  "Azir Galáctico",
  "Azir Señor de la Muerte",
  "Azir SKT T1",
  "Azir Reinos en Guerra",
  "AstroBardo",
  "Bardo el Bardo",
  "Bardo Bosqueviejo",
  "Bardo Día Nevado",
  "Blitzcrank Subjefe",
  "Blitzcrank Boxeador",
  "Este no es Blitzcrank",
  "Blitzcrank Páralotodo",
  "Blitzcrank Lancero Radiante",
  "Blitzcrank Lancero Sombrío",
  "Blitzcrank Talleres Piltóver",
  "Riot Blitzcrank",
  "Blitzcrank Oxidado",
  "Blitzcrank Costura del Caos",
  "Blitzcrank Caldero de Bruja",
  "iBlitzcrank",
  "Brand Apocalíptico",
  "Brand Arco de Luz",
  "Brand Subjefe",
  "Brand Críonuclear",
  "Brand Dragón Eterno",
  "Brand Fuego Espiritual",
  "Brand Vándalo",
  "Zombi Brand",
  "Braum Corazón de León",
  "Braum Ciudad del Crimen",
  "Braum Matadragones",
  "El Tigre Braum",
  "Braum Santa",
  "Braum Soldado de Galleta",
  "Caitlyn de Arcadia",
  "Caitlyn Guerras Árticas",
  "Caitlyn Cazadora de Cabezas",
  "Caitlyn Espectro Lunar",
  "Oficial Caitlyn",
  "Caitlyn Veraniega",
  "Caitlyn de Arcadia Edición Prestigiosa",
  "Caitlyn Pulso de Fuego",
  "Caitlyn Rebelde",
  "Caitlyn Safari",
  "Sheriff Caitlyn",
  "Camille Aquelarre",
  "Programa Camille",
  "Camille iG",
  "Cassiopeia Bandida",
  "Cassiopeia Eternum",
  "Cassiopeia Colmillo de Jade",
  "Cassiopeia Mítica",
  "Sirena Cassiopeia",
  "Cassiopeia Flor Espiritual",
  "Cho'Gath Blindaje Superior",
  "Cho'Gath Estrella Oscura",
  "Finísimo Caballero Cho'Gath",
  "Cho'Gath Jurásico",
  "Cho'Gath del Lago Ness",
  "Pesadilla Cho'Gath",
  "Cho'Gath Prehistórico",
  "Cho'Gath Pergaminos Shan Hai",
  "Corki de Arcadia",
  "Corki Corgi",
  "Corki Ala de Dragón",
  "Corki Fnatic",
  "Enchúlame la Corkinave",
  "Corki Trineo de Hielo",
  "Corki Barón Rojo",
  "Objeto Volador no IdentiCorki",
  "Corki MontaUrfs",
  "Darius Academia",
  "Darius Bioforjado",
  "Darius Nova Terrorífica",
  "Darius Rey de las Clavadas",
  "Darius Rey Divino",
  "Darius el Forajido",
  "Lord Darius",
  "Darius Bestia Lunar",
  "Darius Rey Tribal Woad",
  "Diana Reina Guerrera",
  "Diana Luna de Sangre",
  "Diana Valquiria Oscura",
  "Diana Aguas Oscuras",
  "Diana Matadragones",
  "Diana Infernal",
  "Diana Diosa Lunar",
  "Diana Reina Guerrera Edición Prestigiosa",
  "Mundo Ejecutivo",
  "El Macho Mundo",
  "Mundo Verdugo",
  "Mundo Príncipe del Hielo",
  "Sr. Mundoverso",
  "Mundo Mundo",
  "Mundo Veraniego",
  "Mundo Nacido de la Ira",
  "Mundo TPA",
  "Mundo Tóxico",
  "Draven Cazador de Bestias",
  "Draven Draven",
  "Draven Gladiador",
  "Draven Reinos Mecha",
  "Draven Veraniego",
  "Draven Horario Estelar",
  "Draven Arruinado",
  "Draven Santa",
  "Draven Saqueador de Almas",
  "Ekko Academia",
  "PROYECTO: Ekko",
  "Ekko Pulso de Fuego",
  "Ekko SKT T1",
  "Ekko Tormenta de Arena",
  "Ekko Dulce o Truco",
  "Ekko True Damage",
  "Elise Embrujada",
  "Elise Luna de Sangre",
  "Elise Pétalo Mortal",
  "Elise SKT T1",
  "Elise Supergaláctica",
  "Elise Victoriosa",
  "Evelynn Luna de Sangre",
  "Evelynn K/DA",
  "Evelynn K/DA ALL OUT",
  "Evelynn Enmascarada",
  "Evelynn K/DA Edición Prestigiosa",
  "Evelynn Rompecerrojos",
  "Evelynn de las Sombras",
  "Evelynn Chocofresas",
  "Evelynn Tanguera",
  "Ezreal As de Espadas",
  "Ezreal de Arcadia",
  "Ezreal Academia de Combate",
  "Ezreal Gallardo",
  "Ezreal Explorador",
  "Ezreal Frío",
  "Ezreal de Nottingham",
  "Ezreal Pijama Estelar",
  "Ezreal PsyOps Edición Prestigiosa",
  "Ezreal PsyOps",
  "Ezreal Pulso de Fuego",
  "Ezreal SSG",
  "Ezreal Guardián Estelar",
  "Ezreal Goleador",
  "Ezreal TPA",
  "Fidel Pistolero",
  "Fiddlesticks Dulciniestro",
  "Por las Barbas de Fiddlesticks",
  "Fiddlesticks Pretoriano",
  "Fiddle Cabeza de Calabaza",
  "Fiddlesticks Resucitado",
  "Espectro de Fiddlesticks",
  "Fiddlesticks Fiesta Sorpresa",
  "Fiddlesticks Unión Jack",
  "Directora Fiora",
  "Fiora Rompecorazones",
  "Fiora Bestia Lunar",
  "Fiora Cuervo de la Noche",
  "PROYECTO: Fiora",
  "Fiora Veraniega",
  "Fiora Bestia Lunar Edición Prestigiosa",
  "Fiora Pulso de Fuego",
  "Fiora de la Guardia Real",
  "Fiora Espada Creciente",
  "Fiora iG",
  "Fizz Atlante",
  "Fizz Colita de Algodón",
  "Fizz Pescador",
  "Fizz Perrito",
  "Fizz Pequeño Demonio",
  "Fizz Escuadrón Omega",
  "Fizz Perrito Edición Prestigiosa",
  "Fizz Supergaláctico",
  "Fizz de la Tundra",
  "Fizz del Vacío",
  "Kikiri Galio",
  "Galio Comando",
  "Galio Gallardo",
  "Galio Embrujado",
  "Galio Cancerbero",
  "Galio Hextech",
  "Galio Infernal",
  "Capitán Gangplank",
  "Gangplank Nova Terrorífica",
  "Gangplank FPX",
  "Gangplank Miliciano",
  "Gangplank Veraniego",
  "Marinero Gangplank",
  "Gangplank de Fuerzas Especiales",
  "Gangplank Galeón Fantasma",
  "Sultán Gangplank",
  "Gangplank Soldado de Juguete",
  "Garen Comando",
  "Garen Demacia Vice",
  "Garen Soldado del Desierto",
  "Garen Caballero del Terror",
  "Garen Rey Divino",
  "Garen Reinos Mecha",
  "Garen Reinos Mecha Edición Prestigiosa",
  "Garen Almirante Bandolero",
  "Garen Tipo Duro",
  "Garen Sanguinario",
  "Garen de la Legión de Acero",
  "Garen Reinos en Guerra",
  "AstroGnar",
  "DinoGnar",
  "El León Gnar",
  "Finísimo Caballerito Gnar",
  "Gnar SSG",
  "Gnar Día Nevado",
  "Gnar Supergaláctico",
  "Gragas Operación Ártica",
  "Gragas Fnatic",
  "Gragas Rompebarriles",
  "Don Gragas",
  "Gragas Rural",
  "Gragas de Oktoberfest",
  "Gragas Papá Noel",
  "Gragas Buzo",
  "Gragas Hincha",
  "Gragas Vándalo",
  "Gragas Protector",
  "Graves Profesor de Combate",
  "Graves Ciudad del Crimen",
  "Graves Robavidas",
  "Graves Asesino a Sueldo",
  "Graves Fugitivo",
  "Graves Veraniego",
  "Graves Pretoriano",
  "Riot Graves",
  "Graves Día Nevado",
  "Graves Victorioso",
  "Hecarim de Arcadia",
  "Hecarim Caballero Sangriento",
  "Hecarim Caballería Cósmica",
  "Hecarim Bosqueviejo",
  "El Hecarim sin Cabeza",
  "Hecarim el Forajido",
  "Hecarim Lancero Z",
  "Hecarim Segador de Almas",
  "Hecarim Devorador de Mundos",
  "Heimerdinger Alienígena",
  "Heimerdinger Estallido",
  "Heimerdinger Entrenador de Dragones",
  "Heimerdinger Traje NBQ",
  "Heimerdinger Talleres Piltóver",
  "Heimerdinger Veraniego",
  "Nieverdinger",
  "Illaoi Invocadora Cósmica",
  "Illaoi Rebelde",
  "Illaoi Portadora del Vacío",
  "Irelia Aviadora",
  "Irelia Cuchillas Divinas",
  "Irelia Cuchillas de Hielo",
  "Irelia la Forajida",
  "Irelia Infiltradora",
  "Irelia Cuchilla Nurna",
  "Irelia de la Orden del Loto",
  "PROYECTO: Irelia",
  "PROYECTO: Irelia Edición Prestigiosa",
  "Irelia iG",
  "Ivern Rey de las Golosinas",
  "Ivern Rey de las Clavadas",
  "Ivern Bosqueviejo",
  "Janna Reina Guerrera",
  "Janna Embrujada",
  "Janna Fnatic",
  "Janna Reportera del Clima",
  "Janna Reina de Hielo",
  "Janna Guardiana de las Arenas",
  "Janna Hextech",
  "Janna Espada Sagrada",
  "Janna Guardiana Estelar",
  "Janna Tempestad",
  "Janna Victoriosa",
  "Jarvan IV Comando",
  "Jarvan IV Estrella Oscura",
  "Jarvan IV de Forja Oscura",
  "Jarvan IV Matadragones",
  "Jarvan IV Fnatic",
  "Jarvan IV Hextech",
  "Jarvan IV Bestia Lunar",
  "Jarvan IV Veraniego",
  "Jarvan IV SSG",
  "Jarvan IV Victorioso",
  "Jarvan IV Reinos en Guerra",
  "Jax Humilde Pescador",
  "Jax Báculo Divino",
  "Jaximus",
  "Jax Reinos Mecha",
  "Jax Némesis",
  "Jax PAX",
  "Jax SKT T1",
  "Jax del Templo",
  "El Poderoso Jax",
  "Jax Vándalo",
  "Jax Protector",
  "Jayce Academia de Combate",
  "Jayce Gallardo",
  "Jayce Abandonado",
  "Jayce Metalizado",
  "Jayce Martillo Brillante",
  "Jayce Rebelde",
  "Jhin Luna de Sangre",
  "Jhin Oscuridad Cósmica",
  "Jhin el Forajido",
  "PROYECTO: Jhin",
  "Jhin SKT T1",
  "Jhin Pergaminos Shan Hai",
  "Jinx Elfa Ambiciosa",
  "Jinx Ciudad del Crimen",
  "Jinx Explosiva",
  "Jinx Buscacorazones",
  "Jinx Odisea",
  "PROYECTO: Jinx",
  "Jinx Guardiana Estelar",
  "Jinx Ejecutora",
  "Kai'Sa de Arcadia",
  "Kai'Sa Ángel Exterminador",
  "Kai'Sa K/DA",
  "Kai'Sa K/DA ALL OUT",
  "Kai'Sa K/DA Edición Prestigiosa",
  "Kai'Sa K/DA ALL OUT Edición Prestigiosa",
  "Kai'Sa iG",
  "Kalista Luna de Sangre",
  "Kalista de Campeonato",
  "Kalista Merodeadora",
  "Kalista SKT T1",
  "Karma Conquistadora",
  "Karma Estrella Oscura",
  "Karma Portadora del Amanecer",
  "Karma Odisea",
  "Karma de la Orden del Loto",
  "Karma Arruinada",
  "Sakura Karma",
  "Karma Diosa Solar",
  "Karma Tradicional",
  "Karma Protectora",
  "Karma Maravilla Invernal",
  "Karthus Fnatic",
  "La Parca Karthus",
  "Karthus Infernal",
  "Karthus Maldición de la Luz",
  "Karthus Pentakill",
  "Karthus Fantasmal",
  "Estatua de Karthus",
  "Kassadin Segador Cósmico",
  "Conde Kassadin",
  "Kassadin de los Profundos",
  "Kassadin Festivo",
  "Kassadin Mensajero",
  "Kassadin Hextech",
  "Kassadin Antes del Vacío",
  "Katarina Academia de Combate",
  "Katarina Reina Guerrera",
  "Katarina de Aguasturbias",
  "Katarina Luna de Sangre",
  "Katarina Juramento Funesto",
  "Katarina del Alto Mando",
  "Katarina Minina",
  "Katarina Mercenaria",
  "PROYECTO: Katarina",
  "Katarina Tarjeta Roja",
  "Katarina Tormenta de Arena",
  "Katarina Belleza Mortal",
  "Katarina Reinos en Guerra",
  "Kayle Alas Etéreas",
  "Kayle Nacida para la Batalla",
  "Kayle la Inquisidora de Hierro",
  "Kayle Justiciera",
  "Kayle Pentakill",
  "Kayle PsyOps",
  "Riot Kayle",
  "Kayle de Plata",
  "Kayle Trascendida",
  "Kayle Desenmascarada",
  "Kayle de Viridián",
  "Kayn Odisea",
  "Kayn Cazador de Almas",
  "Kennen Operación Ártica",
  "Kennen Luna de Sangre",
  "Kennen Mortífero",
  "Kennen Infernal",
  "Karate Kennen",
  "Dor Kennen",
  "SuperKennen",
  "Kennen Maestro del Pantano",
  "Kha'Zix de Campeonato",
  "Kha'Zix Estrella Oscura",
  "Kha'Zix Pétalo Mortal",
  "Kha'Zix Guardián de las Arenas",
  "Kha'Zix Mecha",
  "Kha'Zix Odisea",
  "Kindred Fuego Sombrío",
  "Kindred Flor Espiritual",
  "Kindred Supergalácticos",
  "Conde Kledula",
  "Kled Merodeador",
  "Sir Kled",
  "Kog'Maw Arcanista",
  "Kog'Maw Blindaje Bélico",
  "pxBee'Maw",
  "Kog'Maw Oruga",
  "Kog'Maw de las Profundidades",
  "Kog'Maw Hextech",
  "Kog'Maw Jurásico",
  "Danza del León Kog'Maw",
  "Kog'Maw Monarca",
  "Pug'Maw",
  "Kog'Maw Reno",
  "Kog'Maw de Sonora",
  "LeBlanc de Campeonato",
  "LeBlanc Aquelarre",
  "LeBlanc Bosqueviejo",
  "LeBlanc Muérdago",
  "LeBlanc Ilusionista",
  "Programa LeBlanc",
  "LeBlanc Hija de los Cuervos",
  "LeBlanc Maligna",
  "LeBlanc iG",
  "Lee Sin Acólito",
  "Lee Sin Puño de Dragón",
  "Lee Sin FPX",
  "Lee Sin Puño de Dios",
  "Lee Sin KO",
  "Lee Sin Muay Thai",
  "Lee Sin Portador del Anochecer",
  "Lee Sin Delantero",
  "Lee Sin Veraniego",
  "Lee Sin Portador del Anochecer Edición Prestigiosa",
  "Lee Sin SKT T1",
  "Lee Sin Dragón de la Tormenta",
  "Lee Sin Tradicional",
  "Leona Parrillera",
  "Leona Defensora",
  "Leona Solari de Hierro",
  "Leona Eclipse Lunar",
  "Leona Reinos Mecha",
  "PROYECTO: Leona",
  "Leona Veraniega",
  "Leona Eclipse Solar",
  "Leona Valquiria",
  "Lillia Flor Espiritual",
  "Lissandra Reina de Dagas",
  "Lissandra Piedra de Sangre",
  "Lissandra Aquelarre",
  "Lissandra Oscuridad Cósmica",
  "Programa Lissandra",
  "Lucian Demacia Vice",
  "Lucian Buscacorazones",
  "Lucian el Forajido",
  "Lucian Asesino a Sueldo",
  "PROYECTO: Lucian",
  "Lucian Pulso de Fuego Edición Prestigiosa",
  "Lucian Pulso de Fuego",
  "Lucian Goleador",
  "Lucian Victoriosoespecial",
  "Lulu Agridulce",
  "Lulu Encantadora Cósmica",
  "Lulu Entrenadora de Dragones",
  "Lulu Pijama Estelar",
  "Lulu Veraniega",
  "Lulu Guardiana Estelar",
  "Lulu Maligna",
  "Lulu Maravilla Invernal",
  "Lux Academia de Combate",
  "Lux Comando",
  "Lux Cósmica",
  "Lux Oscuridad Cósmica",
  "Lux Elementalista",
  "Lux Imperial",
  "Lux Emperatriz Lunar",
  "Lux Pijama Estelar",
  "Lux Academia de Combate Edición Prestigiosa",
  "Brujita Lux",
  "Lux Ladrona de Hechizos",
  "Lux Guardiana Estelar",
  "Lux de la Legion de Acero",
  "Malphite de los Arrecifes",
  "Malphite Estrella Oscura",
  "Malphite FPX",
  "Malphite Glacial",
  "Malphite Coraza de Hierro",
  "Malphite de Marmol",
  "Malphite Mecha",
  "Malphite de Obsidiana",
  "Malphite Odisea",
  "Malphite Estrella Oscura Edición Prestigiosaspecial",
  "Malphite Trébol",
  "Malzahar Subjefe",
  "pxBeezahar",
  "Genio Malzahar",
  "Malzahar Hextech",
  "Malzahar Soberano",
  "Príncipe de las Sombras Malzahar",
  "Malzahar Día Nevado",
  "Visir Malzahar",
  "Malzahar Devorador de Mundos",
  "Maokai Carbonizado",
  "Maokai Festivo",
  "Maokai Guardavallas",
  "Maokai Embrujado",
  "Miaukai",
  "Maokai Totémico",
  "Maokai Victorioso",
  "Maokai Devorador de Mundos",
  "Maestro Yi Asesino",
  "Maestro Yi Luna de Sangre",
  "Yi el Elegido",
  "Maestro Yi Espada Cósmica",
  "Yi Espada Eterna",
  "Maestro Yi Cazador de Cabezas",
  "Maestro Yi de Jonia",
  "PROYECTO: Yi",
  "Maestro Yi PsyOps",
  "Samurái Yi",
  "Yi Muñeco de Nieve",
  "Miss Fortune de Arcadia",
  "Miss Fortune Embrujada",
  "Miss Fortune de Caramelo",
  "Capitana Fortune",
  "Miss Fortune Vaquera",
  "Miss Fortune Ciudad del Crimen",
  "Miss Fortune Gatillera Galáctica",
  "Miss Fortune Pijama Estelar",
  "Miss Fortune Veraniega",
  "Miss Fortune Embrujada Edición Prestigiosa",
  "Miss Fortune Guerrera del Camino",
  "Miss Fortune Agente Secreta",
  "Miss Fortune Guardiana Estelar",
  "Miss Fortune de Waterloo",
  "Mordekaiser Estrella Oscura",
  "Mordekaiser Caballero Dragón",
  "Mordekaiser Infernal",
  "Mordekaiser Rey de Bastos",
  "Lord Mordekaiser",
  "Mordekaiser Pentakill",
  "Morgana Embrujada",
  "Morgana Espina Negra",
  "Morgana Dama de Espadas",
  "Morgana Aquelarre",
  "Morgana Exiliada",
  "Morgana la Llorona",
  "Morgana Espectro Lunar",
  "Morgana Emperatriz Majestuosa",
  "Morgana Suculencia Pecaminosa",
  "Morgana Victoriosa",
  "Nami Destino Cósmico",
  "Nami de las Profundidades",
  "Nami Koi",
  "Programa Nami",
  "Nami Iara",
  "Nami SKT T1",
  "Nami Báculo Magnífico",
  "Urf el Namití",
  "Archiduque Nasus",
  "Nasus Blindaje Bélico",
  "Nasus Caballero del Terror",
  "Nasus Galáctico",
  "Nasus Infernal",
  "Nasus Guardián Lunar",
  "Faraón Nasus",
  "Riot Nasus K",
  "Nasus Devorador de Mundos",
  "Nautilus Abisal",
  "AstroNautilus",
  "Nautilus Conquistador",
  "Nautilus Pergaminos Shan Hai",
  "Nautilus Subterráneo",
  "Nautilus Protector",
  "Nautilus Devorador de Mundos",
  "Neeko Guardiana Estelar Edición Prestigiosa",
  "Neeko Pergaminos Shan Hai",
  "Neeko Guardiana Estelar",
  "Neeko Maravilla Invernal",
  "Nidalee Embrujada",
  "Nidalee Retadora",
  "Nidalee Cazadora Cósmica",
  "Nidalee Portadora del Amanecer",
  "Nidalee Mon Amour",
  "Nidalee Cazadora de Cabezas",
  "Nidalee Leopardo",
  "Faraona Nidalee",
  "Nidalee Conejita Invernal",
  "Nidalee Supergaláctica",
  "Nidalee Reinos en Guerra",
  "Nurne El Renacido Maldito",
  "Nurne Bosqueviejo",
  "Nurne Eternum",
  "Nurne Terror Frío",
  "Nurne Embrujado",
  "Nurne Hextech",
  "Nurne Asolador",
  "Nurne del Vacío",
  "Nunu y Willump Demoledor",
  "Nunu y Willump Gruñón",
  "Nunu y Willump Bot",
  "Nunu y Willump Arte de Papel",
  "Nunu y Willump Pie Grande",
  "Nunu y Willump TPA",
  "Nunu y Willump del Taller de Santa",
  "Nunu y Willump Zombi",
  "Brolaf",
  "Olaf Carnicero",
  "Olaf Matadragones",
  "Olaf Abandonado",
  "Olaf Glacial",
  "Olaf Merodeador",
  "Olaf Pentakill",
  "Olaf SKT T1",
  "Orianna Artificio Mortal",
  "Orianna Estrella Oscura",
  "Orianna Gótica",
  "Orianna Buscacorazones",
  "Orianna Veraniega",
  "Orianna Costura del Caos",
  "Orianna TPA",
  "Orianna Victoriosa",
  "Orianna Maravilla Invernal",
  "Ornn Bosqueviejo",
  "Ornn Señor del Trueno",
  "Pantheon Panadero",
  "Pantheon Matadragones",
  "Pantheon Metalizado",
  "Pantheon Espada Guerrera",
  "Pantheon Mirmidón",
  "Perseo Pantheon",
  "Pantheon Pulso de Fuego",
  "Pantheon Indomable",
  "Pantheon Ejecutor",
  "AstroPoppy",
  "Poppy Armadura Reluciente",
  "Poppy la Herrera",
  "Poppy Hextech",
  "Poppypaleta",
  "Poppy de Noxus",
  "Poppy Muñeca de Trapo",
  "Poppy Martillo Escarlata",
  "Poppy Reno Bebé",
  "Poppy Guardiana Estelar",
  "Pyke Luna de Sangre",
  "PROYECTO: Pyke",
  "Pyke PsyOps",
  "Pyke Espectro de las Arenas",
  "Qiyana Subjefe",
  "Qiyana Reina Guerrera",
  "Qiyana True Damage Edición Prestigiosa",
  "Qiyana True Damage",
  "Quinn Corsaria",
  "Quinn Buscacorazones",
  "Quinn Fénix",
  "Quinn Protectora",
  "Quinn Exploradora Woad",
  "Rakan Alba Cósmica",
  "Rakan Bosqueviejo",
  "Rakan SSG",
  "Rakan Guardián Estelar",
  "Rakan Cariñosito",
  "Rakan iG",
  "Rammus de Cromo",
  "Rammus del Fréljord",
  "Rammus Metalizado",
  "Rammus Guardián de las Arenas",
  "Rammus Hextech",
  "Rey Rammus",
  "Rammus Fundido",
  "Rammus Ninja",
  "Rammus Cañonazo",
  "Rek'Sai Escarcha Negra",
  "Rek'Sai Eternum",
  "Rek'Sai Veraniega",
  "Rell Reina Guerrera",
  "Renekton Escarcha Negra",
  "Renekton Furiasangre",
  "Renekton Galáctico",
  "Renekton Hextech",
  "Renekton de los Yermos",
  "Renekton Veraniego",
  "Renekton Prehistórico",
  "Renekton Figura de Acción",
  "Renekton de las Guerras Rúnicas",
  "Renekton SKT T1",
  "Renekton de Tierra Calcinada",
  "Rengar Guardián de las Arenas",
  "Rengar Cazador de Cabezas",
  "Rengar Mecha",
  "Rengar Cazador Nurno",
  "Rengar Gatito Miau",
  "Rengar SSW",
  "Riven de Arcadia",
  "Riven Conejita Guerrera",
  "Riven de Campeonato",
  "Riven de Campeonato ",
  "Riven Élite Carmesí",
  "Riven Portadora del Amanecer",
  "Riven Espadragón",
  "Riven Espada Valiente Edición Prestigiosa",
  "Riven Pulso de Fuego",
  "Riven Redimida",
  "Riven Flor Espiritual",
  "Riven Espada Valiente",
  "Rumble Barón del Yermo",
  "Rumble de Aguasturbias",
  "Rumble de la Jungla",
  "Rumble Supergaláctico",
  "Ryze de Campeonato",
  "Ryze Cristal Oscuro",
  "Ryze Guardián de las Arenas",
  "Pirata Ryze",
  "Profesor Ryze",
  "Ryze Barbablanca",
  "Ryze SKT T1",
  "Ryze Tribal",
  "Ryze Triunfante",
  "Tío Ryze",
  "Ryze Joven",
  "Zombi Ryze",
  "Samira PsyOps",
  "Sejuani Caballería Ursina",
  "Sejuani Cazadora de Bestias",
  "Sejuani Jinete Oscura",
  "Sejuani Explosiva",
  "Sejuani Hextech",
  "Sejuani Jinete de Poros",
  "Sejuani Colmillos de Sable",
  "Sejuani Cazadora del Amanecer",
  "Sejuani Tradicional",
  "Senna la Forajida",
  "Senna True Damage Edición Prestigiosa",
  "Senna True Damage",
  "Seraphine K/DA ALL OUT Indie",
  "Seraphine K/DA ALL OUT Estrella Ascendenteespecial",
  "Seraphine K/DA ALL OUT Superestrellaespecial",
  "Sett Reinos Mecha",
  "Sett Dragón de Obsidiana",
  "Sett Dragón de Obsidiana Edición Prestigiosa",
  "Shaco Arcanista",
  "Shaco de Atar",
  "Shaco Estrella Oscura",
  "El Sombrerero Shaco",
  "Shaco Enmascarado",
  "El Shascanueces",
  "Shaco del Palacio Real",
  "Shaco Comodín",
  "Shaco de Juguete",
  "Shen Luna de Sangre",
  "Shen Frío",
  "Shen Infernal",
  "Shen PsyOps",
  "Shen Pulso de Fuego",
  "Cirujano Shen",
  "Shen TPA",
  "Shen Señor de la Guerra",
  "Shen Amarillo",
  "Shyvana Garras de Hueso",
  "Shyvana de Campeonato",
  "Shyvana Llama Oscura",
  "Shyvana Dragón de Hielo",
  "Shyvana Escamas de Hierro",
  "Shyvana Arruinada",
  "Shyvana Supergaláctica",
  "Singed Mejorado",
  "Singed Apicultor",
  "Singed la Plaga Negra",
  "Singed Hextech",
  "Singed Científico Loco",
  "Singed Rebelde",
  "Singed del Escuadrón Riot",
  "Singed SSW",
  "Singed Día Nevado",
  "Singed Surfista",
  "Sion el Bárbaro",
  "Sion Hextech",
  "Sion Leñador",
  "Sion Mecha Zero",
  "Sion Belicista",
  "Sion Devorador de Mundos",
  "Sivir Bandida",
  "Sivir Luna de Sangre",
  "Sivir Cazadora",
  "Sivir Neo PAX",
  "Sivir Odisea",
  "Sivir PAX",
  "Pizzivir",
  "Sivir Tormenta de Nieve",
  "Sivir Espectacular",
  "Sivir Victoriosa",
  "Sivir Protectora",
  "Sivir Princesa Guerrera",
  "Skarner Blindaje Alfa",
  "Skarner Aguijón Cósmico",
  "Skarner Runa de Tierra",
  "Skarner Guardián de las Arenas",
  "Skarner Azote de las Arenas",
  "Sona de Arcadia",
  "DJ Sona",
  "Guqin Sona",
  "Sona Musa",
  "Sona Odisea",
  "Sona Pentakill",
  "Sona PsyOps",
  "Sona Noche de Paz",
  "Sona Cariñosita",
  "Soraka Celestial",
  "Soraka Portadora del Amanecer",
  "Soraka Divina",
  "Soraka Dríade",
  "Soraka Portadora del Anochecer",
  "Soraka Orden de la Banana",
  "Soraka Pijama Estelar",
  "Soraka Guardiana Estelar Edición Prestigiosaespecial",
  "Programa Soraka",
  "Soraka Segadora de Almas",
  "Soraka Guardiana Estelar",
  "Soraka Maravilla Invernal",
  "Swain de Aguasturbias",
  "Swain Rosa de Cristal",
  "Swain Amo de los Dragones",
  "Swain Hextech",
  "Swain Frente Nórdico",
  "Swain Tirano",
  "Sylas del Fréljord",
  "Sylas Espectro Lunar",
  "Syndra Atlante",
  "Syndra Justiciera",
  "Syndra Veraniega",
  "Syndra Reina de Diamantes",
  "Syndra SKT T1",
  "Syndra Día Nevado",
  "Syndra Guardiana Estelar",
  "Syndra Rosa Marchita",
  "Tahm Kench Emperador de la Fortuna",
  "Tahm Kench Master Chef",
  "Urf Kench",
  "Taliyah del Fréljord",
  "Taliyah Veraniega",
  "Taliyah SSG",
  "Talon Luna de Sangre",
  "Talon Élite Carmesí",
  "Talon Espadragón",
  "Talon Filo Perpetuo",
  "Talon Renegado",
  "Talon SSW",
  "Talon del Bosque Negro",
  "Talon Rosa Marchita",
  "Taric de la Quinta Era",
  "Taric Piedra de Sangre",
  "Taric Esmeralda",
  "Taric Veraniego",
  "Taric Paladín Radiante",
  "AstroTeemo",
  "Teemo Tejón",
  "Teemo Abejorro",
  "Teemo Colita de Algodón",
  "Teemo Elfo Feliz",
  "Pequeño Teemonio",
  "Teemo Escuadrón Omega",
  "Teemo Osito Panda",
  "Teemo Flor Espiritual Edición Prestigiosa",
  "Teemo Explorador",
  "Teemo Flor Espiritual",
  "SuperTeemo",
  "Thresh Luna de Sangre",
  "Thresh de Campeonato",
  "Thresh Estrella Oscura",
  "Thresh Terror Pofundo",
  "Thresh FPX",
  "Thresh el Forajido",
  "Thresh Pulso de Fuego Edición Prestigiosa",
  "Thresh Pulso de Fuego",
  "Thresh SSW",
  "Thresh Flor Espiritual",
  "Tristana Embrujada",
  "Tristana Bucanera",
  "Tristana Entrenadora de Dragones",
  "Tristana Elfa Buena",
  "Tristana Bomberita",
  "Tristana Guerrillera",
  "Tristana Pequeña Demonio",
  "Tristana Escuadrón Omega",
  "Tristana Cosplay Pengu",
  "Tristana Chica Riot",
  "Tristana Chica Cohete",
  "Agente Trundle",
  "Trundle Matadragones",
  "Trundle Chatarra",
  "Trundle Ligas Menores",
  "Trundle Tradicional",
  "Trundle Devorador de Mundos",
  "Tryndamere Cazador de Bestias",
  "Tryndamere Luna de Sangre",
  "Tryndamere Tecnoquímica",
  "Tryndamere Espademonium",
  "Tryndamere el Inmortal",
  "Rey Tryndamere",
  "Pesadilla Tryndamere",
  "Sultán Tryndamere",
  "Tryndamere Vikingo",
  "Tryndamere Reinos en Guerra",
  "Twisted Fate Luna de Sangre",
  "Twisted Fate Robacarteras",
  "Twisted Fate el Forajido",
  "Twisted Fate Sota de Corazones",
  "Twisted Fate Mosquetero",
  "Twisted Fate Odisea",
  "Twisted Fate PAX",
  "Twisted Fate Pulso de Fuego",
  "Twisted Fate Tarjeta Roja",
  "Twisted Fate Tanguero",
  "Twisted Fate el Magnífico",
  "Twisted Fate del Inframundo",
  "Twitch Ciudad del Crimen",
  "Twitch Rey del Hielo",
  "El Jefe Twitch",
  "Twitch Medieval",
  "Twitch Escuadrón Omega",
  "Twitch Robacarteras",
  "Twitch SSW",
  "Twitch Zancasmudas",
  "Twitch Vándalo",
  "Twitch de Whistler Village",
  "Udyr Cinta Negra",
  "Este no es Udyr",
  "Udyr Oráculo Dragón",
  "Udyr Primigenio",
  "Udyr Guardián de Espíritus",
  "Urgot Blindaje Bélico",
  "Urgot Carnicero",
  "Crabgot Enemigo Gigante",
  "Urgot el Forajido",
  "Urgot Cosplay Pijama Estelar",
  "Varus Arco de Luz",
  "Varus Operación Ártica",
  "Varus Cristal Maldito",
  "Varus Conquistador",
  "Varus Cazador Cósmico",
  "Varus Estrella Oscura",
  "Varus Buscacorazones",
  "Varus Infernal",
  "Varus Rayo Veloz",
  "Vayne Arco de Luz",
  "Vayne Aristócrata",
  "Vayne Matadragones",
  "Vayne FPX",
  "Vayne Explosiva",
  "Vayne Buscacorazones",
  "PROYECTO: Vayne",
  "Vayne Explosiva Edición Prestigiosa",
  "Vayne SKT T1",
  "Vayne Robaalmas",
  "Vayne Flor Espiritual",
  "Vayne Vengadora",
  "Veigar Santa Malo",
  "Baron Von Veigar",
  "Veigar Jugador de Curling",
  "Veigar Bosqueviejo",
  "Veigar Jefe Final",
  "Veigar Cosplay Furicuerno",
  "Veigar Duende Irlandes",
  "Veigar Escuadrón Omega",
  "Veigar Villano Soberbio",
  "Veigar Barbagrís",
  "Veigar Hechicero Blanco",
  "Vel'Koz Arco de Luz",
  "Vel'Koz Blindaje Bélico",
  "Este no es Vel'Koz",
  "Vel'Koz Infernal",
  "Vi Galante",
  "Vi Demoníaca",
  "Vi Rompecorazones",
  "Vi Golpe de Neón",
  "Oficial Vi",
  "PROYECTO: Vi",
  "Vi PsyOps",
  "Vi Reinos en Guerra",
  "Viego Bestia Lunar",
  "Viktor el Creador",
  "Viktor Juramento Funesto",
  "Viktor Mecanizado",
  "Viktor Prototipo",
  "Viktor PsyOps",
  "Vladimir Academia",
  "Vladimir Señor de la Sangre",
  "Vladimir Devorador Cósmico",
  "Conde Vladimir",
  "Vladimir Aguas Oscuras",
  "Marqués Vladimir",
  "Vladimir Portador del Anochecer",
  "Vladimir Nosferatu",
  "Vladimir Robaalmas",
  "Vladimir Vándalo",
  "Capitán Volibear",
  "El Rayo Volibear",
  "Volibear Tormenta del Norte",
  "Volibear Guardián Rúnico",
  "Oso de Mil Batallas",
  "Volibear Señor del Trueno",
  "El Warwick Feroz",
  "Warwick Salvaje",
  "Warwick Colmillo de Fuego",
  "Warwick Grís",
  "Warwick Hiena",
  "Warwick Guardián Lunar",
  "Warwick Merodeador",
  "PROYECTO: Warwick",
  "Warwick Cazador de la Tundra",
  "Urf el Manatí",
  "Urfwick",
  "General Wukong",
  "Wukong Dragón de Jade",
  "Wukong Lancero del Nimbo",
  "Wukong Radiante",
  "Wukong del Inframundo",
  "Wukong Volcánico",
  "Xayah Ocaso Cósmico",
  "Xayah Bosqueviejo",
  "Xayah SSG",
  "Xayah Guardiana Estelar",
  "Xayah Cariñosita",
  "Xerath Blindaje Bélico",
  "Xerath Estrella Oscura",
  "Xerath Guardián de las Arenas",
  "Xerath Hijo de las Runas",
  "Xerath de Tierra Calcinada",
  "Xin Zhao Comando",
  "Xin Zhao Defensor Cósmico",
  "Xin Zhao Matadragones",
  "Xin Zhao Imperial",
  "Xin Zhao Merodeador",
  "Xin Zhao Agente Secreto",
  "Xin Zhao Viscero",
  "Xin Zhao Reinos en Guerra",
  "Xin Zhao Húsar Alado",
  "Yasuo Subjefe",
  "Yasuo Luna de Sangre",
  "Yasuo el Forajido",
  "Yasuo Portador del Anochecer",
  "Yasuo Odisea",
  "PROYECTO: Yasuo",
  "Yasuo True Damage Edición Prestigiosa",
  "Yasuo Flor Espiritual",
  "Yasuo True Damage",
  "Yone Flor Espiritual",
  "Yorick Arco de Luz",
  "Miaurick",
  "Yorick Pentakill",
  "Yorick Rebelde",
  "Yorick Enterrador",
  "Yuumi Directora de Combate",
  "Yuumi Buscacorazones",
  "pxYuubee",
  "Zac Blindaje Bélico",
  "Zac Veraniego",
  "Zac SKT T1",
  "Zac Arma Especial",
  "Zed de Campeonato",
  "Zed Juramento Funesto",
  "Zed Exterminador Galáctico",
  "PROYECTO: Zed",
  "Zed PsyOps",
  "Zed SKT T1",
  "Zed Filo Relámp",
  "Ziggs Subjefe",
  "Ziggs Hextech",
  "Ziggs Científico Loco",
  "Comandante Ziggs",
  "Ziggs Maestro Taumaturgo",
  "Ziggs Odisea",
  "Ziggs Veraniego",
  "Ziggs Día Nevado",
  "Ziggs Pastelillo",
  "Zilean Luna de Sangre",
  "Zilean Buena Onda",
  "Viejito Zilean Pascuero",
  "Zilean Desierto Shurimano",
  "Zilean Reloj de Galleta",
  "Zilean Viajero del Tiempo",
  "Zoe Arcanista",
  "Zoe Ciber Pop",
  "Zoe Veraniega",
  "Zoe Arcanista Edición Prestigiosa",
  "Zoe Guardiana Estelar",
  "Zyra Aquelarre",
  "Zyra Rosa de Cristal",
  "Zyra Hechicera de Dragones",
  "Zyra Embrujada",
  "Zyra Aquelarre Edición Prestigiosa",
  "Zyra SKT T1",
  "Zyra Fuego Salvaje"
];

export const LISTADO_CAMPEONES = [
  //public campeones: Array<any> = [
  "Aatrox",
  "Ahri",
  "Akali",
  "Alistar",
  "Amumu",
  "Anivia",
  "Annie",
  "Aphelios",
  "Ashe",
  "Aurelion",
  "Azir",
  "Bardo",
  "Blitzcrank",
  "Brand",
  "Braum",
  "Caitlyn",
  "Camille",
  "Cassio",
  "Cho'gath",
  "Corki",
  "Darius",
  "Diana",
  "Draven",
  "Dr Mundo",
  "Ekko",
  "Elise ",
  "Evelynn",
  "Ezreal",
  "Fiddle",
  "Fiora",
  "Fizz",
  "Galio",
  "Gangplank",
  "Garen",
  "Gnar",
  "Gragas",
  "Graves",
  "Hecarim",
  "Heimer",
  "Illaoi",
  "Irelia",
  "Ivern",
  "Janna",
  "Jarvan",
  "Jax",
  "Jayce",
  "Jhin",
  "Jinx",
  "Kai'sa",
  "Kalista",
  "Karma",
  "Karthus",
  "Kassadin",
  "Katarina",
  "Kayle",
  "Kayn",
  "Kennen",
  "Kha'zix",
  "Kindred",
  "Kled",
  "Kog'maw",
  "LeBlanc",
  "Lee Sin",
  "Leona",
  "Lillia",
  "Lissandra",
  "Lucian",
  "Lulu",
  "Lux",
  "Maestro Yi",
  "Malphite",
  "Malzahar",
  "Maokai",
  "Miss Fortune",
  "Mordekaiser",
  "Morgana",
  "Nami",
  "Nasus",
  "Nautilus",
  "Neeko",
  "Nidalee",
  "Nocturne",
  "Nunu",
  "Olaf",
  "Orianna",
  "Ornn",
  "Pantheon",
  "Poppy",
  "Pyke",
  "Qiyana",
  "Quinn",
  "Rakan",
  "Rammus",
  "Rek'sai",
  "Rell",
  "Renekton",
  "Rengar",
  "Riven",
  "Rumble",
  "Ryze",
  "Samira",
  "Sejuani",
  "Senna",
  "Seraphine",
  "Sett",
  "Shaco",
  "Shen",
  "Shyvana",
  "Singed",
  "Sion",
  "Sivir",
  "Skarner",
  "Sona",
  "Soraka",
  "Swain",
  "Sylas",
  "Syndra",
  "Tahm Kench",
  "Taliyah",
  "Talon",
  "Taric",
  "Teemo",
  "Thresh",
  "Tristana",
  "Trundle",
  "Tryndamere",
  "Twisted Fate",
  "Twitch",
  "Udyr",
  "Urgot",
  "Varus",
  "Vayne",
  "Veigar",
  "Vel'koz",
  "Vi",
  "Viego",
  "Viktor",
  "Vladimir",
  "Volibear",
  "Warwick",
  "Wukong",
  "Xayah",
  "Xerath",
  "Xin Zhao",
  "Yasuo",
  "Yone",
  "Yorick",
  "Yuumi",
  "Zac",
  "Zed",
  "Ziggs",
  "Zilean",
  "Zoe",
  "Zyra"
];
