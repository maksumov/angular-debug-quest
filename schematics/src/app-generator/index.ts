import {
  chain,
  externalSchematic,
  mergeWith,
  Rule,
  apply,
  move,
  url,
} from '@angular-devkit/schematics';
import { normalize } from '@angular-devkit/core';
import { Schema } from './schema.model';

function generateRandomString(length: number = 8): string {
  const characters = 'abcdefghijklmnopqrstuvwxyz';
  let result = '';
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return result;
}

export function appGenerator(options: Schema): Rule {
  return () => {
    const name = `${options.scope}-${generateRandomString()}`;
    return chain([
      externalSchematic('@schematics/angular', 'application', {
        name,
        style: 'css',
      }),

      mergeWith(apply(url('./files'), [move(normalize(`projects/${name}`))])),
    ]);
  };
}
