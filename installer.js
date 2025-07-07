import { createSpinner } from 'nanospinner'
import { execSync } from 'child_process'
import chalk from 'chalk'
import { exit } from './index.js'


// base command
const baseCmd = 'npm i ';

//installer function 
export function installer(dbchoice) {

    let dependencies;

    const spinner = createSpinner(chalk.whiteBright('Installing Dependencies...')).start()

    try {
        //try block
        if(dbchoice === 'MongoDB') {
            dependencies = baseCmd + 'mongoose '
        } else {
            dependencies = baseCmd + 'mysql2 '
        }

        // execute command to install dependencies    
        execSync(dependencies, { stdio: 'inherit'})
    
        console.log('\n')

        spinner.success({ text: `${chalk.greenBright('Dependencies Installed Successfully!\n')}`})
    
    exit("Get Started !!!\n")

    } catch(err) {
        //catch block
        spinner.error({ text: `${chalk.redBright('Failed to Install Dependencies')}`});
        exit("Try Again !!!")
    }

}

