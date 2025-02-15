# 1. Remove existing shadcn installation
npm uninstall shadcn-ui

# 2. Clear npm cache
npm cache clean --force

# 3. Install shadcn CLI globally
npm install -g shadcn-ui

# 4. Remove `components.json` file from your project
rm ./components.json

# 5. Initialize shadcn in your project
npx shadcn@latest init

# 6. Now try adding a Shadcn component
npx shadcn@latest add avatar