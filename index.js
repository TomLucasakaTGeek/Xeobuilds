#!/usr/bin/env node

import chalk from 'chalk'
import chalkAnimation from 'chalk-animation'
import inquirer from 'inquirer'
import { inst } from './installer.js';


//global responses
export let projectName;
export let dbchoice;
export let langchoice;

//timeout
export const sleep = ( ms = 1000 ) => new Promise( ( r ) => setTimeout(r, ms) )

//welcome function 
async function welcome() {
    const rainbowTitle = chalkAnimation.rainbow("\n Welcome to scaff \n")

    await sleep()
    rainbowTitle.stop()
}

//project name
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
        message: `${chalk.yellowBright('Select your Database...')}`,
        choices: [
            `${chalk.greenBright('MongoDB')}`,
            `${chalk.whiteBright('MySQL')}`,
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
inst()


//exit function 
export async function exit(str) {
    const rainbowTitle = chalkAnimation.rainbow(str)

    await sleep()
    rainbowTitle.stop()
}

