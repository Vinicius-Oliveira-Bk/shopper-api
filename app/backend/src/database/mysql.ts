import mysql from 'mysql2/promise';

export const MySQLClient = {
  client: undefined as unknown as mysql.Connection,

  async connect(): Promise<void> {
    const host = process.env.MYSQL_HOST || 'localhost';
    const user = process.env.MYSQL_USER;
    const password = process.env.MYSQL_PASSWORD;

    const connection = await mysql.createConnection({
      host,
      user,
      password,
    });

    this.client = connection;

    console.log('Connected to MySQL!');
  },

  async close(): Promise<void> {
    if (this.client) {
      await this.client.end();
      console.log('Disconnected from MySQL.');
    }
  },
};
