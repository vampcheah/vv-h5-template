// module.exports = file => require('@/views/pages/' + file).default
module.exports = file => () => import('@/views/pages/' + file)
