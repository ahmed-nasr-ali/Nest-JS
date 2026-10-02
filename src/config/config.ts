export default {
  database: {
    connectionString: process.env.CONNECTION_STRING,
  },
  secrets: {
    jwtSecrets: '',
  },
  port: process.env.PORT,
};
