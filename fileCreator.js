import * as fs from 'node:fs/promises'
import { projectName, dbchoice } from './index.js'
import path from 'node:path'


// get currenct directory
const cwd = process.cwd()


//create db.js file 

// add path of templates
const dbfile = ( dbchoice === 'MySQL' ) ? 'db-sql.js' : 'db-mongo.js' ;
const dbTemplatePath = path.join(cwd, 'Templates', dbfile)

// creating and writing content in db.js
export const writeDbFiles = async () => {
    const content = await fs.readFile(dbTemplatePath, 'utf-8')
    const filepath = 'db.js'
    try {
        await fs.writeFile(filepath, content)
        console.log('File Created Successfully')
    } catch (error) {
        console.log(error)
    }
}


//create express.js file 

// add path of templates
const serverTemplatePath = path.join(cwd, 'Templates', 'express.js')

// creating and writing content in db.js
export const writeServerFiles = async () => {
    const content = await fs.readFile(serverTemplatePath, 'utf-8')
    const filepath = 'app.js'
    try {
        await fs.writeFile(filepath, content)
        console.log('File Created Successfully')
    } catch (error) {
        console.log(error)
    }
}


