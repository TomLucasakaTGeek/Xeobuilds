import * as fs from 'node:fs/promises'
import { projectName, dbchoice } from './index.js'
import path from 'node:path'


// get currenct directory
const cwd = process.cwd()


//create db.js file 

// add path of templates
const dbTemplatePath = path.join(cwd, 'Templates', 'db-sql.js')
// creating and writing content in db.js
export const writeFiles = async () => {
    const content = await fs.readFile(templatePath, 'utf-8')
    const filepath = 'db.js'
    try {
        await fs.writeFile(filepath, content)
        console.log('File Created Successfully')
    } catch (error) {
        console.log(error)
    }
}


