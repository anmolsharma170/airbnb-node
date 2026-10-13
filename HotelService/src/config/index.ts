// this file cantains all the basic configuration logic for the app server to work
import dotenv from 'dotenv'

type serverConfig = {
    PORT:number
}

type DBConfig = {
    DB_HOST: string,
    DB_USER: string,
    DB_PASSWORD: string,
    DB_NAME: string
}
export function loadEnv(){
    dotenv.config();
}
loadEnv();

export const serverConfig = {
    PORT: Number(process.env.PORT) || 3001
}

export const dbConfig: DBConfig = {
    DB_HOST: process.env.DB_HOST || 'localhost',
    DB_USER: process.env.DB_USER || 'root',
    DB_PASSWORD: process.env.DB_PASSWORD || 'root',
    DB_NAME: process.env.DB_NAME || 'test_db'
};
