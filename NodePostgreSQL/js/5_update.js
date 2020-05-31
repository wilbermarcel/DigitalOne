const db = require('./_database');

async function updateData(nome, id) {
    const queryUpdateParticipante =
        'UPDATE participante SET nome = ($1) WHERE ID = ($2)';
    await db.query(queryUpdateParticipante, [nome, id]);
    console.log('Registro Alterado');
}

async function deleteData(idEvento, idParticipante) {
    const queryDeleteEventoParticipante =
        'DELETE FROM evento_participante WHERE evento_id = ($1) and participante_id = ($2)';
    await db.query(queryDeleteEventoParticipante, [idEvento, idParticipante]);
    console.log('Registro Excluído');
}

async function start() {
    await db.connect();
    await updateData('Carlos Augusto', 1);
    await deleteData(1, 1);
    await db.end();
}

start();

// import { connect, query, end } from './_database.mjs';

// async function updateData(nome, id) {
//     await connect();
//     const queryUpdateParticipante =
//         'UPDATE participante SET nome = ($1) WHERE ID = ($2)';
//     await query(queryUpdateParticipante, [nome, id]);
//     await end();
//     console.log('Registro Alterado');
// }

// async function deleteData(idEvento, idParticipante) {
//     await connect();
//     const queryDeleteEventoParticipante =
//         'DELETE FROM evento_participante WHERE evento_id = ($1) and participante_id = ($2)';
//     await query(queryDeleteEventoParticipante, [idEvento, idParticipante]);
//     await end();
//     console.log('Registro Excluído');
// }

// updateData('Carlos Augusto', 1);
// deleteData(1, 1);
