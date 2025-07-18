import { type Plugin } from '@commitlint/types';
import { default as scopePattern } from "./rules/scope-pattern";

export const rules: Plugin['rules'] = {
    'commitlint-plugin-prevenger/scope-pattern': scopePattern,
};

export default {
    rules,
};