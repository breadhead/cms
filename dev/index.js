const { cms } = require('../dist')

cms([])
  .use('fake plugin')
  .use('another fake plugin', 'fake fake plugin =)')
  .run(3434)
