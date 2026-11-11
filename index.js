const express = require('express')

const app = express();
const PORT = 3000;

app.use(express.json());

/**
 * This is for sorting an Object list by Priority.
 * It's expected of the client to calcuate the priority of each object.
 * 
 * {Object, priority}
 * Sory by int, priority is expected to be an int or dec
 */
app.post('/priority', (req, res) => {
    return res.status(404).json({
        error: `Route not implemented yet`
    });
});

/**
 * This is for sorting a plain list.
 */
app.post('/sort', (req, res) => {
    return res.status(404).json({
        error: `Route not implemented yet`
    });
});

/**
 * This is for sorting Object lists by one of the Objects fields.
 */
app.post('/sortObjects', (req, res) => {
    const {items, sortBy, order = 'asc'} = req.body;

    // Item list must be an array only
    if (!Array.isArray(items) || items.length == 0) {
        return res.status(400).json({
            error: 'items must be an Array with Objects.'
        });
    }

    // Check if sortBy is a valid, String. This is the field we are checking for in an Object.
    if (sortBy == undefined || (typeof sortBy !== 'string') || sortBy.trim() === '') {
        return res.status(400).json({
            error: 'sortBy is not a valid String'
        });
    }

    // Make sure atleast one of the objects contains the field
    if (typeof items[0][sortBy] === 'undefined') {
        return res.status(400).json({
            error: `Object list does not contain the field ${sortBy}`
        });
    }

    // Sort function, comparing a to b
    // This can be made into a reusuable sorting function, and I recommend it.
    const sorted = [...items].sort((a, b) => {
        // a and b are objects, get their fields.
        const a_Field = a[sortBy];
        const b_Field = b[sortBy];

        let result = undefined;

        // For now only support Numbers, Dates, Strings
        if (typeof x === 'number') {
            result = a_Field - b_Field;
        }
        else if (!isNaN(Date.parse(a_Field))) {
            result = new Date(a_Field) - new Date(b_Field);
        }
        else {
            result = String(a_Field).localeCompare(String(b_Field))
        }

        // If desc return result as smaller to order it in desc.
        return order === 'desc' ? -result : result;
    });

    res.json({ order, items: sorted })
});

    
app.listen(PORT, () => {
    console.log(`Server on http://localhost:${PORT}`)
});