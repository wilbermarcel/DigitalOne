const models = require('./models');

async function insert() {
    //Eventos
    const eventoNode = await models.evento.create({
        nome: 'Encontro de Nodejs',
        data: '01/04/2020',
    });
    const eventoPostgres = await models.evento.create({
        nome: 'Encontro de Postgresql',
        data: '01/03/2020',
    });

    //Participantes
    const carlos = await models.participante.create({ nome: 'Carlos' });
    const augusto = await models.participante.create({ nome: 'Augusto' });
    const janaina = await models.participante.create({ nome: 'Janaína' });
    const rafael = await models.participante.create({ nome: 'Rafael' });

    //Participantes em eventos
    await eventoNode.setParticipantes([carlos, augusto, janaina]);
    await eventoPostgres.setParticipantes([janaina, rafael]);

    await models.sequelize.close();

    console.log('Dados Inseridos');
}
insert();
