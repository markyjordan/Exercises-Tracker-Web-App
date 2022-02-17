import dotenv from 'dotenv';

// Attempt to locate the .env file and load the environent variables.
dotenv.config();

// Store the environment variables as accessible properties.
export const configProps = {
    api: { prefix: '/api'},
    app: {
        port: parseInt(process.env.PORT, 10)
    },
    db: {
        host: process.env.DB_HOST,
        port: process.env.DB_PORT,
        name: process.env.DB_NAME,
    },
    port: process.env.PORT || 5000,
}

// Export the configProps object for use in other modules.
export default { configProps };
