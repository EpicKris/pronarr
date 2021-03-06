import fs from 'fs';
import path from 'path';

/**
 * Load Package JSON
 * @returns Package JSON
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function loadPackageJson(): any {
    const packageJSONPath = path.join(__dirname, '../package.json');
    return JSON.parse(fs.readFileSync(packageJSONPath, {
        encoding: 'utf8'
    }));
}

/**
 * Get Version
 * @returns Version
 */
export default function getVersion(): string {
    return loadPackageJson().version;
}

/**
 * Get Required Node Version
 * @returns Required Node Version
 */
export function getRequiredNodeVersion(): string {
    return loadPackageJson().engines.node;
}