import { Pool } from 'pg';

const connectionString = 'postgres://xgaztvbf:0ncBT86iC0KcfOLXPgIvzLmRKuSnLMR5@kesavan.db.elephantsql.com/xgaztvbf';
const db = new Pool({ connectionString })

export default db;