import { defineConfig } from 'vite'
import { parse } from 'dotenv';
import { readFileSync } from "fs";
import react from '@vitejs/plugin-react';
import { join } from 'path';

const envPath = join(__dirname, ".env");
let env = {};

try {
    env = parse(
        readFileSync(envPath).toString()
    );
}
catch {
    env = process.env;
}


// https://vite.dev/config/
export default defineConfig({
    plugins: [react()],
    define: {
        "env": env
    }
})
