async function createCmd(client, guildId){
    const data = [

        // ping commando
        {
            name: 'ping',
            description: `Stuur een ping commando.`
        },
        {
            name: 'echo',
            description: 'Stuur wat ik zeg.',
            options: [{
                name: 'text',
                type: 'STRING',
                description: 'Voer de tekst in die wordt terug gestuurd.',
                required: true
            }]
        },
        {
            name: 'ban',
            description: 'Verban een gebruiker uit je guild.',
            options: [{
                name: 'gebruiker',
                description: 'Vermeld de gebruiker die je wilt verbannen!',
                type: 'USER',
                required: true
            }]
        },
        {
            name: 'kick',
            description: 'Kick een gebruiker uit je guild.',
            options: [{
                name: 'gebruiker',
                description: 'Vermeld de gebruiker die je wilt kicken!',
                type: 'USER',
                required: true
            }]
        },
        {
            name: 'new',
            description: 'Maakt een ticket voor onze Discord Server!'
        },
        {
            name: 'close',
            description: 'Sluit een ticket!'
        },
        {
            name: 'add',
            description: 'Voeg een gebruiker toe aan een ticket!',
            options: [{
                name: 'gebruiker-of-rol',
                type: 'MENTIONABLE',
                required: true,
                description: 'Vermeld de rol of gebruiker die je wilt toevoegen!'
            }]
        },
        {
            name: 'remove',
            description: 'Verwijder een gebruiker uit een ticket!',
            options: [{
                name: 'gebruiker-of-rol',
                type: 'MENTIONABLE',
                required: true,
                description: 'Vermeld de rol of gebruiker die je wilt verwijderen!'
            }]
        },
        {
            name: 'rename',
            description: 'Geef een ticket een andere naam!',
            options: [{
                name: 'nieuwe-naam',
                type: 'STRING',
                required: true,
                description: 'Voer de nieuwe naam in van het ticket.'
            }]
        },
        {
            name: 'suggestie',
            description: 'Maak een suggestie voor onze Discord Server!',
            options: [{
                name: 'jouw-idee',
                type: 'STRING',
                required: true,
                description: 'Vul hier je suggestie in!'
            }]
        },
        {
            name: 'bug',
            description: 'Maak een bug voor onze Discord Server!',
            options: [{
                name: 'jouw-bug',
                type: 'STRING',
                required: true,
                description: 'Vul hier je bug in!'
            }]
        },
        {
            name: 'review',
            description: 'Stuur een review over onze Discord.',
            options: [{
                name: 'aantal-sterren',
                type: 'NUMBER',
                required: true,
                description: 'Voer hier het aantal sterren in! (Max 5)'
            },
            {
                name: 'jouw-review',
                description: 'Vul hier de tekst in!',
                required: true,
                type: 'STRING'
            }]
        },
        {
            name: 'clear',
            description: 'Verwijder berichten in je server!',
            options: [
                {
                    name: 'aantal-berichten',
                    type: 'NUMBER',
                    required: true,
                    description: 'Voer het aantal berichten in dat je wilt verwijderen.'
                }
            ]
        },
        {
            name: 'rr',
            description: 'Maak een reactie button.',
            options: [
                {
                    name: 'kanaal',
                    description: 'Vermeld het kanaal waar de reactie button moet komen.',
                    type: 'CHANNEL',
                    required: true
                },
                {
                    name: 'rol',
                    description: 'Vermeld de rol die mensen moeten ontvangen.',
                    type: 'ROLE',
                    required: true
                }
            ]
        },
        {
            name: 'help',
            description: 'Ontvang ons help commando.',
            options: [
                {
                    name: 'categorie',
                    type: 'STRING',
                    required: true,
                    description: 'Kies een categorie.',
                        choices: [
                            {
                                name: 'Ticket Commands',
                                description: 'Krijg een lijst met onze ticket commands',
                                value: 'tickets'
                            },
                            {
                                name: 'Moderatie Commands',
                                description: 'Krijg een lijst met onze moderatie commands',
                                value: 'moderatie'
                            },
                        ]
                },
                {
                    name: 'categorie-test',
                    type: 'STRING',
                    required: true,
                    description: 'Kies een categorie.',
                        choices: [
                            {
                                name: 'Ticket Commands',
                                description: 'Krijg een lijst met onze ticket commands',
                                value: 'tickets'
                            },
                            {
                                name: 'Moderatie Commands',
                                description: 'Krijg een lijst met onze moderatie commands',
                                value: 'moderatie'
                            },
                        ]
                },

            ]
        }

    ]

    await client.guilds.cache.get(guildId)?.commands.set(data);

}

module.exports = { createCmd }