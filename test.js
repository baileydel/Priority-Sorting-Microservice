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

const pets = [
        {
            "item": {
                id: 1,
                name: "Pumpkin",
                type: "Cat"
            },
            "priority": 1,
        },
        {
            "item": {
                id: 2,
                name: "Rex",
                type: "Dog"
            },
            "priority": 2
        },
        {
            "item": {
                id: 3,
                name: "Slither",
                type: "Snake"
            },
            "priority": 3
        }
    ];
    
const numbers = [3,4,25,1,35,62,5]
const bad_list = [3,"a", 5, "hello"]

const PORT = 3000;

async function main() {
    console.log("Test 1: sortObjects by tasksCompleted ascending.")
    try {
        const test1 = await fetch(`http://localhost:${PORT}/sortObjects`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                items: teammates,
                sortBy: 'tasksCompleted',
                order: 'asc'
            })
        });

        console.log('ASC:', await test1.json());
    } 
    catch (err) {
        console.error('Test call failed:', err.message);
    }

    console.log("Test 2: sortObjects by non-existent field, error should be returned.")
    try {
        const test2 = await fetch(`http://localhost:${PORT}/sortObjects`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                items: teammates,
                sortBy: 'thisFieldDoesNotExist',
                order: 'desc'
            })
        });

        console.log(await test2.json());
    }
    catch (err) {
        console.error('Test call failed:', err.message);
    }
    console.log("Test 3: priority ascending")
    try{
        const test3 = await fetch(`http://localhost:${PORT}/priority`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                priorityItems: pets,
                order: 'asc'
            })
        });
        
        console.log(await test3.json());
    }
    catch (err) {
        console.error('Test call failed:', err.message)
    }
    console.log("Test 4: err list does not have priority field.")
    try{
        const test4 = await fetch(`http://localhost:${PORT}/priority`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                priorityItems: teammates,
                order: 'asc'
            })
        });
        
        console.log(await test4.json());
    }
    catch (err) {
        console.error('Test call failed:', err.message)
    }
    console.log("Test 5: sort list descending.")
    try{
        const test5 = await fetch(`http://localhost:${PORT}/sort`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                items: numbers,
                order: 'desc'
            })
        });
        
        console.log(await test5.json());
    }
    catch (err) {
        console.error('Test call failed:', err.message)
    }
    console.log("Test 6: err list must contain items of same type.")
    try{
        const test6 = await fetch(`http://localhost:${PORT}/sort`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                items: bad_list,
                order: 'asc'
            })
        });
        
        console.log(await test6.json());
    }
    catch (err) {
        console.error('Test call failed:', err.message)
    }
}
main();