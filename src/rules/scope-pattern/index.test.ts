import type { Commit } from 'conventional-commits-parser';
import type { Rule } from '@commitlint/types';
import rule from "."

describe('scope-pattern', () => {
    const ruleFn = rule as Rule<[string, string?]>
    const createCommit = (scope?: string): Commit => {
        return {
            type: 'feat',
            scope: scope,
            header: `feat(${scope}): some message`,
            body: null,
            footer: null,
            merge: null,
            revert: null,
            mentions: [] as string[],
            notes: [] as Commit.Note[],
            references: [] as Commit.Reference[]
        } as Commit
    };

    it('passes when scope matches pattern and "always" is used', async () => {
        const result = await ruleFn(createCommit('core'), 'always', ['^core$']);
        expect(result).toEqual([true, '']);
    });

    it('fails when scope does not match pattern and "always" is used', async () => {
        const result = await ruleFn(createCommit('utils'), 'always', ['^core$']);
        expect(result).toEqual([false, 'scope must match pattern: ^core$']);
    });

    it('passes when scope does not match pattern and "never" is used', async () => {
        const result = await ruleFn(createCommit('utils'), 'never', ['^core$']);
        expect(result).toEqual([true, '']);
    });

    it('fails when scope matches pattern and "never" is used', async () => {
        const result = await ruleFn(createCommit('core'), 'never', ['^core$']);
        expect(result).toEqual([false, 'scope must not match pattern: ^core$']);
    });

    it('passes when scope is undefined', async () => {
        const result = await ruleFn(createCommit(undefined), 'always', ['^core$']);
        expect(result).toEqual([true, '']);
    });

    it('uses default "when" and "value" when not provided', async () => {
        const result = await ruleFn(createCommit('anyscope'));
        expect(result).toEqual([true, '']);
    });

    it('uses default "value" when only "when" is provided', async () => {
        const result = await ruleFn(createCommit('anyscope'), 'always');
        expect(result).toEqual([true, '']);
    });

    it('uses custom message when provided and fails', async () => {
        const result = await ruleFn(createCommit('utils'), 'always', ['^core$', 'Custom message']);
        expect(result).toEqual([false, 'Custom message']);
    });
});
