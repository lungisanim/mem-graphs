import { readFileSync } from 'fs';
import { join } from 'path';

export async function GET() {
    const filePath = join(process.cwd(), 'src/app/data/memhistory/mermaid-history.json');
    const data = readFileSync(filePath, 'utf8');
    return Response.json(JSON.parse(data));
} 