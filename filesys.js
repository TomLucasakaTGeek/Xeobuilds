import fs from 'node:fs'
import { projectName, dbchoice } from '.'
import path from 'node:path'


//creating project 
const currDir = process.cwd()
const projPath = path.join(currDir, projectName);
const makeDir = fs.mkdir( projPath, { recursive : true }, ( err ) => {
    if(err) {
        return console.error(err)
    }
})

//create files 
// package.json(npm init -y) , 
fs.appendFile('package.json' , ' { ' )
// Controller/index.js ,

// Middleware/handler.js ,

// Models/db.js ,

//  schema.js(with Zod) ,

//  schema.js(without Zod) ,

// Config/.env ,

// Routes/fields.js ,