echo ":: Rebuilding astro-i18next from source..."

cd ./node_modules/astro-i18next
bun install
bun run prepack

echo ":: astro-i18next $(bunx astro-i18next --version)"

cd ../../