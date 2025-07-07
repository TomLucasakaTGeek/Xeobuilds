import * as fs from 'node:fs/promises'
import path from 'node:path'


// get currenct directory
const cwd = process.cwd()


//create db.js file 

// creating and writing content in db.js
export const writeDbFiles = async (dbchoice) => {
    // add path of templates
    const dbfile = ( dbchoice === 'MySQL' ) ? 'db-sql.js' : 'db-mongo.js' 
    console.log(dbfile)
    const dbTemplatePath = path.join(cwd, 'Templates', dbfile)

    const content = await fs.readFile(dbTemplatePath, 'utf-8')
    const filepath = 'db.js'
    console.log('Creating Database Files...')
    try {
        await fs.writeFile(filepath, content)
        console.log('File Created Successfully')
    } catch (error) {
        console.log(error)
    }
}


//create express.js file 

// creating and writing content in index.js
export const writeServerFiles = async () => {
    // add path of templates
    const serverTemplatePath = path.join(cwd, 'Templates', 'express.js')

    const content = await fs.readFile(serverTemplatePath, 'utf-8')
    const filepath = 'app.js'
    console.log('Creating Server File...')
    try {
        await fs.writeFile(filepath, content)
        console.log('File Created Successfully')
    } catch (error) {
        console.log(error)
    }
}


