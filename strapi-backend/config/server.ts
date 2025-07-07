export default ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 6002),
  url: 'https://iddit.glitchweb.ru/cms',
  app: {
    keys: env.array('APP_KEYS'),
  },
});
