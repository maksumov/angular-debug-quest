import {
  addProjectConfiguration,
  formatFiles,
  generateFiles,
  Tree,
} from '@nx/devkit';
import * as path from 'path';
import { AppGeneratorGeneratorSchema } from './schema';
import {
  applicationGenerator,
  E2eTestRunner,
  UnitTestRunner,
} from '@nx/angular/generators';
import { Linter } from '@nx/eslint';
import { applicationGenerator as nestApplicationGenerator } from '@nx/nest';

function generateRandomString(length = 8): string {
  const characters = 'abcdefghijklmnopqrstuvwxyz';
  let result = '';
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return result;
}

export async function appGeneratorGenerator(
  tree: Tree,
  options: AppGeneratorGeneratorSchema
) {
  const name = `${generateRandomString()}`;

  await applicationGenerator(tree, {
    name,
    directory: `apps/${name}`,
    linter: Linter.EsLint,
    unitTestRunner: UnitTestRunner.Jest,
    e2eTestRunner: E2eTestRunner.Playwright,
    addTailwind: false,
    style: 'css',
    inlineStyle: true,
    skipTests: true,
  });

  generateFiles(tree, path.join(__dirname, 'files/front'), `apps/${name}`, {
    name,
  });
  await formatFiles(tree);

  tree.delete(`apps/${name}/src/app/nx-welcome.component.ts`);
  tree.delete(`apps/${name}/src/app/app.component.css`);
  tree.delete(`apps/${name}/src/app/app.component.spec.ts`);

  if (options.generateApi) {
    await nestApplicationGenerator(tree, {
      name: `${name}-api`,
      directory: `apps/${name}-api`,
      linter: Linter.EsLint,
      unitTestRunner: UnitTestRunner.Jest,
      frontendProject: name,
      strict: true,
      e2eTestRunner: 'none',
    });

    generateFiles(
      tree,
      path.join(__dirname, 'files/back'),
      `apps/${name}-api`,
      {
        name,
      }
    );
  }
}

export default appGeneratorGenerator;
