/* ------------------------------------------------------------------
   EDIT THIS FILE: it holds every word shown on the site.
   Replace each [PLACEHOLDER] with your own details and save.
------------------------------------------------------------------- */
const CONTENT = {
  name: '[YOUR NAME]',
  initials: '[YN]',
  role: 'Full-stack engineer',
  city: '[CITY]',
  year: '[YEAR]',
  email: 'you@example.com',
  photo: '', // e.g. 'images/me.jpg' (put your picture in the images folder)
  status: 'Open to work',

  ticker: ['[SPECIALTY ONE]', '[SPECIALTY TWO]', '[SPECIALTY THREE]', '[SPECIALTY FOUR]', '[SPECIALTY FIVE]'],

  about: {
    lead: '[What you are, in a few words.]',
    bio: '[Two or three sentences: who you are, what kind of problems you solve, and how you like to work.]'
  },
  facts: [
    ['Based in', '[City, Country]'], ['Role', 'Full-stack engineer'],
    ['Experience', '[N] years'], ['Focus', '[Your focus areas]'],
    ['Languages', '[Spoken languages]'], ['Education', '[Degree, school]'],
    ['Availability', '[Full-time / freelance]'], ['Email', 'you@example.com']
  ],
  offstage: ['[A hobby or interest]', '[A fun fact about you]', '[What you’re learning now]'],

  does: [
    { title: 'Build products end to end', text: '[Model the data, write the rules, build the screens and put it online.]' },
    { title: 'Design the details', text: '[How you think about UX, accessibility and interface polish.]' },
    { title: 'Ship and maintain', text: '[Deployment, monitoring and how you keep systems healthy.]' },
    { title: 'Work with [AI or tools you love]', text: '[How you use them to build faster or solve harder problems.]' }
  ],

  projects: [
    { name: '[Project one]', tag: '[Category] · Live', blurb: '[What it is and who it’s for, in two sentences.]',
      problem: '[What was broken or missing, and who felt it.]', approach: '[Key decisions across frontend, backend and data.]',
      result: '[A measurable outcome you can stand behind.]', stack: ['[Frontend]', '[Backend]', '[Database]', '[Infra]'],
      role: '[Your role]', timeline: '[Dates]', link: '#', image: '' },
    { name: '[Project two]', tag: '[Category] · Live', blurb: '[What it is and who it’s for, in two sentences.]',
      problem: '[What was broken or missing, and who felt it.]', approach: '[Key decisions across frontend, backend and data.]',
      result: '[A measurable outcome you can stand behind.]', stack: ['[Frontend]', '[Backend]', '[Database]', '[Infra]'],
      role: '[Your role]', timeline: '[Dates]', link: '#', image: '' }
  ],

  beyond: {
    p1: '[How your hobbies and side projects connect to how you build software.]',
    p2: '[What curiosity, craft or care you bring to each of them.]'
  },
  interests: [
    { label: '[Interest one]', image: '' }, { label: '[Interest two]', image: '' }, { label: '[Interest three]', image: '' },
    { label: '[Interest four]', image: '' }, { label: '[Interest five]', image: '' }, { label: '[Interest six]', image: '' }
  ],

  skills: [
    { group: 'Frontend', items: ['[Tool]', '[Tool]', '[Tool]'] },
    { group: 'Backend', items: ['[Tool]', '[Tool]', '[Tool]'] },
    { group: 'Data and infra', items: ['[Tool]', '[Tool]', '[Tool]'] }
  ],
  steps: [
    { title: 'Understand', text: '[How you start a project.]' },
    { title: 'Model the rules', text: '[How you design data and logic.]' },
    { title: 'Build in steps', text: '[How you ship and iterate.]' },
    { title: 'Launch and improve', text: '[How you deploy and learn.]' }
  ],

  contactLine: '[One line on the roles or projects you’re open to.]',
  links: [{ label: 'GitHub', href: '#' }, { label: 'LinkedIn', href: '#' }, { label: 'Résumé', href: '#' }]
};
