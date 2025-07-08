#!/usr/bin/env node

import chalk from 'chalk'
import chalkAnimation from 'chalk-animation'
import inquirer from 'inquirer'
import { installer } from './installer.js';
import { writeDbFiles, writeServerFiles } from './fileCreator.js';
import { createFolder } from './folderCreater.js';


// global responses
export let projectName;
let dbchoice;
export let langchoice;

// timeout
export const sleep = ( ms = 1000 ) => new Promise( ( r ) => setTimeout(r, ms) )

// welcome function 
async function welcome() {
    const rainbowTitle = chalkAnimation.rainbow("\n Welcome to XeoBuilds \n")

    await sleep()
    rainbowTitle.stop()
}

// project name
async function askName() {
    const res = await inquirer.prompt({
        name: 'admin_name',
        type: 'input',
        message: `${chalk.magentaBright('Project name ?')}`,
        default() {
            return 'my-app'
        },
    })
    
    projectName = chalk.redBright(res.admin_name)
}

// database selection
async function askDb() {
    const res = await inquirer.prompt({
        name: 'db_name',
        type: 'list',
        message: `${chalk.yellowBright('Select your Database ...')}`,
        choices: [
            { name: chalk.greenBright('MongoDB'), value: 'MongoDB'},
            {name: chalk.whiteBright('MySQL'), value: 'MySQL'},
        ],
    })

    dbchoice = res.db_name
}

// language selection
async function askLang() {
    const res = await inquirer.prompt({
        name: 'lang_name',
        type: 'list',
        message: `${chalk.green('Select your Language...')}`,
        choices: [
            `${chalk.cyanBright('Typescript')}`,
            `${chalk.yellowBright('Javascript')}`,
        ],
    })

    langchoice = res.lang_name
}


// fnc calls
await welcome()
await askName()
await askDb()
await askLang()

console.log("\n")

console.log(chalk.whiteBright("Setting up your Project ... "))
installer(dbchoice)
createFolder('model')
await writeDbFiles(dbchoice)
writeServerFiles()


//exit function 
export async function exit(str) {
    const rainbowTitle = chalkAnimation.rainbow(str)

    await sleep()
    rainbowTitle.stop()
}

