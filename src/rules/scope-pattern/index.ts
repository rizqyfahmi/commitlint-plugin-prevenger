import type { Rule } from '@commitlint/types';
import type { Commit } from 'conventional-commits-parser';

const rule: Rule = (
    parsed: Commit,
    when: 'always' | 'never' = 'always',
    value: [string, string?] = ['']
) => {
    const [pattern, message] = value;

    if (!parsed.scope) return [true, ''];

    const regex = new RegExp(pattern);
    const isMatch = regex.test(parsed.scope);
    const isNegated = when === 'never';
    const pass = isNegated ? !isMatch : isMatch;

    return [
        pass,
        pass ? '' : (message || `scope must ${isNegated ? 'not ' : ''}match pattern: ${pattern}`)
    ];
};

export default rule
