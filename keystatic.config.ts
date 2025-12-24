import { config, fields, collection } from '@keystatic/core';
// 👇 STEP A: Master File ko import karo
import { teamMembers } from './team.mjs';

export default config({
  storage: {
    kind: 'github',
    repo: 'USERNAME/REPO_NAME', 
  },
  
  collections: {
    posts: collection({
      label: 'Job Posts',
      slugField: 'title',
      path: 'src/data/posts/*',
      format: { contentField: 'content' },
      schema: {
        title: fields.slug({ name: { label: 'Title' } }),
        date: fields.date({ label: 'Post Date' }),
        
        // 👇 STEP B: Options mein wo variable daal do
        author: fields.select({
          label: 'Written By',
          description: 'Payment hisaab ke liye apna naam chunein',
          
          // Yahan humne hardcoded list hata kar variable laga diya
          options: teamMembers, 
          
          defaultValue: 'admin',
        }),

        content: fields.document({
          label: 'Content',
          formatting: true,
          dividers: true,
          links: true,
          images: true,
        }),
      },
    }),
  },
});
