const teammates = [
    {
        id: 1,
        name: 'Lucas',
        role: 'Frontend',
        email: 'lucas@example.com',
        joinedDate: '2026-09-28',
        tasksCompleted: 7,
        active: true
    },
    {
        id: 2,
        name: 'Bailey',
        role: 'Backend',
        email: 'bailey@example.com',
        joinedDate: '2026-09-24',
        tasksCompleted: 12,
        active: true
    },
    {
        id: 3,
        name: 'Corson',
        role: 'Testing',
        email: 'corson@example.com',
        joinedDate: '2026-10-05',
        tasksCompleted: 9,
        active: false
    }
];

const PORT = 3000;

async function main() {
    try {
        const asc = await fetch(`http://localhost:${PORT}/sortObjects`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                items: teammates,
                sortBy: 'tasksCompleted',
                order: 'asc'
            })
        });

        console.log('ASC:', await asc.json());
    } 
    catch (err) {
        console.error('Test call failed:', err.message);
    }
}

main();