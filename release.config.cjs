module.exports = {
    branches: ["master"],
    plugins: [
        [
            "@semantic-release/commit-analyzer",
            {
                releaseRules: [
                    { type: "ci", release: "patch" }
                ]
            }
        ],
        "@semantic-release/release-notes-generator",
        [
            "@semantic-release/changelog",
            {
                changelogFile: "CHANGELOG.md"
            }
        ],
        "@semantic-release/npm",
        "@semantic-release/github",
        [
            "@semantic-release/git",
            {
                assets: ["package.json", "CHANGELOG.md"],
                message:
                    "chore(release): ${nextRelease.version} [skip ci]\n\n${nextRelease.notes}"
            }
        ]
    ]
}
