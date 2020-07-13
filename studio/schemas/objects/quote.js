export default {
  name: 'quote',
  type: 'object',
  title: 'Quote',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Name',
      description: 'Who\'s gonna testify?'
    },
    {
      name: 'quote',
      type: 'text',
      title: 'Quote',
      description: 'What they said?'
    },
    {
      name: 'photo',
      type: 'figure',
      title: 'Photo of the person',
      description: 'What they face?'
    }
  ]
}
