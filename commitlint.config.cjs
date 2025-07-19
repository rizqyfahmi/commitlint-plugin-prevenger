const commitlintConfig = {
    extends: ["@commitlint/config-conventional"],
    rules: {
        "type-enum": [
            2,
            "always",
            ["feat", "fix", "build", "chore", "ci", "docs", "style", "refactor", "perf", "test"],
        ],
        "scope-empty": [2, "never"],
        "subject-case": [2, "always", ["sentence-case"]],
    },
}

module.exports = commitlintConfig
