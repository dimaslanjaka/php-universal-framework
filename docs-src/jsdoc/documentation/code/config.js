exports.fileTree = [
  { name: 'Icon', path: '/Icon', fullPath: './documentation/code/Icon' },
  { name: 'class-constructor', path: '/class-constructor', fullPath: './documentation/code/class-constructor' },
  {
    name: 'components',
    children: [
      {
        name: 'sub',
        children: [
          { name: 'sub-test', path: '/sub-test', fullPath: 'components/sub/sub-test' },
          { name: 'sub-vue-md', path: '/sub-vue-md', fullPath: 'components/sub/sub-vue-md' }
        ]
      },
      { name: 'test', path: '/test', fullPath: 'components/test' },
      { name: 'vue-md', path: '/vue-md', fullPath: 'components/vue-md' }
    ]
  },
  {
    name: 'lib',
    children: [
      { name: 'dmd-options', path: '/dmd-options', fullPath: 'lib/dmd-options' },
      { name: 'jsdoc-to-markdown', path: '/jsdoc-to-markdown', fullPath: 'lib/jsdoc-to-markdown' }
    ]
  },
  { name: 'methods', path: '/methods', fullPath: './documentation/code/methods' },
  { name: 'objects', path: '/objects', fullPath: './documentation/code/objects' },
  {
    name: 'subfolder',
    children: [
      {
        name: 'subfolder.1',
        children: [{ name: 'variables', path: '/variables', fullPath: 'subfolder/subfolder.1/variables' }]
      },
      { name: 'variables', path: '/variables', fullPath: 'subfolder/variables' }
    ]
  },
  { name: 'test', path: '/test', fullPath: './documentation/code/test' },
  { name: 'tests', children: [{ name: 'class', path: '/class', fullPath: 'tests/class' }] },
  { name: 'vue-md', path: '/vue-md', fullPath: './documentation/code/vue-md' }
];
exports.sidebarTree = (title = 'Mainpage') => ({
  '/code/': [
    {
      title: 'API',
      collapsable: false,
      children: [['', '' + title + ''], 'Icon', 'class-constructor', 'methods', 'objects', 'test', 'vue-md']
    },
    {
      title: 'components',
      collapsable: false,
      children: ['components/sub/sub-test', 'components/sub/sub-vue-md', 'components/test', 'components/vue-md']
    },
    { title: 'lib', collapsable: false, children: ['lib/dmd-options', 'lib/jsdoc-to-markdown'] },
    { title: 'subfolder', collapsable: false, children: ['subfolder/subfolder.1/variables', 'subfolder/variables'] },
    { title: 'tests', collapsable: false, children: ['tests/class'] }
  ]
});