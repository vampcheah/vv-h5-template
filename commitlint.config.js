module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'type-enum': [
      2,
      'always',
      [
        'version', // 版本变更通知
        'feat', // 新功能（feature）
        'fix', // 修补bug
        'lang', // 语言包变更
        'docs', // 文档（documentation）
        'test', // 测试过程
        'wip', // 移除文件/清理代码
        'style', // 格式（不影响代码运行的变动）
        'refactor', // 重构或提升性能
        'revert', // 回滚
        'config', // 构建过程或辅助工具的变动
        'chore' // 依赖库或工具
      ]
    ],
    'subject-full-stop': [0, 'never'],
    'subject-case': [0, 'never']
  }
}
