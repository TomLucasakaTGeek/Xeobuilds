import fs from 'node:fs'
import { execSync } from 'node:child_process'
import { projectName, dbchoice } from '.'


//creating project 
fs.mkdir(`/${projectName}`, () => {
    
})

//create files 
// package.json(npm init -y) , 

// Controller/index.js ,

// Middleware/handler.js ,

// Models/db.js ,

//  schema.js(with Zod) ,

//  schema.js(without Zod) ,

// Config/.env ,

// Routes/fields.js ,