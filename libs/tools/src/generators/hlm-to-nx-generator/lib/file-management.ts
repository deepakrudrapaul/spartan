import { generateFiles, Tree } from '@nx/devkit';
import { HlmToNxGeneratorGeneratorSchema } from '../schema';
import * as path from 'path';

export const copyFilesFromHlmLibToGenerator = (
  tree: Tree,
  srcPath: string,
  filesPath: string,
  options: HlmToNxGeneratorGeneratorSchema
) => {
  generateFiles(tree, srcPath, filesPath, options);
  tree.delete(path.join(filesPath, 'test-setup.ts'));
  recursivelyRenameToTemplate(tree, filesPath);
};

export const createSharedGeneratorFiles = (
  tree: Tree,
  projectRoot: string,
  options: HlmToNxGeneratorGeneratorSchema
) => {
  generateFiles(tree, path.join(__dirname, '..', 'files'), projectRoot, options);
};

export const recursivelyRenameToTemplate = (tree: Tree, filePath: string) => {
  tree.children(filePath).forEach((child) => {
    const childPath = path.join(filePath, child);
    if (tree.isFile(childPath)) {
      tree.rename(childPath, childPath + '.template');
    } else {
      recursivelyRenameToTemplate(tree, childPath);
    }
  });
};

export const recursivelyDelete = (tree: Tree, filePath: string) => {
  tree.children(filePath).forEach((child) => {
    const childPath = path.join(filePath, child);
    if (tree.isFile(childPath)) {
      tree.delete(childPath);
    } else {
      recursivelyDelete(tree, childPath);
    }
  });
};
