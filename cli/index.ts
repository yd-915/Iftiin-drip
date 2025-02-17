#!/usr/bin/env node
import 'dotenv/config';
import { Command } from 'commander';
import { description, version } from './package.json';
import { drop } from 'actions/drop';
import { PayloadInputMode } from '@shared/types/common';
import { grab } from 'actions/grab';

const program = new Command();

program.name('deadrop-cli').description(description).version(version);

program
    .command('drop')
    .argument('[input]', 'secret to drop')
    .option('-i, --input [input]', 'secret to drop')
    .option(
        '-t, --type [dropType]',
        'type of secret being dropped',
        'text' as PayloadInputMode,
    )
    .action(drop);

program.command('grab').argument('<id>', 'drop session ID').action(grab);

program.parse();

const exitSignals: NodeJS.Signals[] = ['SIGINT', 'SIGTERM', 'SIGQUIT'];

for (const signal in exitSignals)
    process.on(signal, async (code) => {
        console.log('PROGRAM EXITING');
        process.exit(1);
    });
