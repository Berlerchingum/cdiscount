import moment from 'moment'

// Ici sont les données json Un étage possède une liste de salles, une salles possède une lise de rendez-vous

let listeSlot1 = [
    {
        start: new moment("2017-06-30 10:00"),
        end: new moment("2017-06-30 11:00"),
    },
    {
        start: new moment("2017-06-30 15:00"),
        end: new moment("2017-06-30 17:00"),
    }
];

let listeSlot2 = [
    {
        start: new moment("2017-06-30 9:00"),
        end: new moment("2017-06-30 11:00"),
    },
    {
        start: new moment("2017-06-30 12:00"),
        end: new moment("2017-06-30 15:00"),
    },
    {
        start: new moment("2017-06-30 15:00"),
        end: new moment("2017-06-30 20:00"),
    }
];

let listeSlot3 = [
    {
        start: new moment("2017-06-30 12:00"),
        end: new moment("2017-06-30 15:00"),
    },
    {
        start: new moment("2017-06-30 15:00"),
        end: new moment("2017-06-30 20:00"),
    }
];


let listeSalle1 = [
    {
        id: 0,
        idEtage: 0,
        nom: "salle 1",
        state: false,
        slot: listeSlot1,
    },
    {
        id: 1,
        idEtage: 0,
        nom: "salle 2",
        state: true,
        slot: listeSlot2,
    },
    {
        id: 2,
        idEtage: 0,
        nom: "salle 3",
        state: false,
        slot: listeSlot3,
    },
];
let listeSalle2 = [
    {
        id: 0,
        idEtage: 1,
        nom: "salle 1",
        state: false,
        slot: listeSlot3,
    },
    {
        id: 1,
        idEtage: 1,
        nom: "salle 2",
        state: true,
        slot: listeSlot2,
    },
];

let listeSalle3 = [
    {
        id: 0,
        idEtage: 2,
        nom: "salle 1",
        state: false,
        slot: listeSlot1,
    },
];

let listeSalle4 = [
    {
        id: 0,
        idEtage: 3,
        nom: "salle 1",
        state: false,
        slot: listeSlot3,
    },
    {
        id: 1,
        idEtage: 3,
        nom: "salle 2",
        state: false,
        slot: listeSlot1,
    },
];

let data = [
    {
        id: 0,
        name: 'Etage 1',
        salles: listeSalle1
    },
    {
        id: 1,
        name: 'Etage 2',
        salles: listeSalle2
    },
    {
        id: 2,
        name: 'Etage 3',
        salles: listeSalle3
    },
    {
        id: 3,
        name: 'Etage 4',
        salles: listeSalle4
    },
];

export { data }