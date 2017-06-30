import moment from 'moment'

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
        slot: new Date(),
    },
    {
        id: 2,
        idEtage: 0,
        nom: "salle 3",
        state: false,
        slot: new Date(),
    },
];
let listeSalle2 = [
    {
        id: 0,
        idEtage: 1,
        nom: "salle 1",
        state: false,
        slot: new Date(),
    },
    {
        id: 1,
        idEtage: 1,
        nom: "salle 2",
        state: true,
        slot: new Date(),
    },
];

let listeSalle3 = [
    {
        id: 0,
        idEtage: 2,
        nom: "salle 1",
        state: false,
        slot: new Date(),
    },
];

let listeSalle4 = [
    {
        id: 0,
        idEtage: 3,
        nom: "salle 1",
        state: false,
        slot: new Date(),
    },
    {
        id: 1,
        idEtage: 3,
        nom: "salle 2",
        state: false,
        slot: new Date(''),
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