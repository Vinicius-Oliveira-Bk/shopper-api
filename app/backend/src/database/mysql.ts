import { createPool, Pool } from 'mysql2/promise'

export async function MySQLClient(): Promise<Pool> {
    const connection = await createPool({
        host: process.env.MYSQL_HOST || 'localhost',
        user: process.env.MYSQL_USER || 'user',
        password: process.env.MYSQL_PASSWORD || 'password',
        database: 'db',
        connectionLimit: 10
    });

    console.log('Connected to MySQL!');

    return connection;
}
