const {commitWithinRange} = require("comitter")
const path = require("path")

async function main() {
  await commitWithinRange({
    rootDir: path.join(__dirname),
    fileDirectory: path.join(__dirname, "files"),
    minCommitsPerDay: 3,
    maxCommitsPerDay: 20,
    extensions: ["ts", "js", "py", "cpp", "md", "php", "go", "rs", "c", "cs", "tsx", "jsx"]
  })
}

main();
