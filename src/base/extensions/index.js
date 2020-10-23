const locales = require.context('./plugins', true, /[A-Za-z0-9-_,\s]+\.js/i)
for (const key of locales.keys()) {
  const matched = key.match(/([A-Za-z0-9-_]+)\./i)
  if (matched && matched.length > 1) {
    require(`./plugins/${matched[1]}.js`)
  }
}
