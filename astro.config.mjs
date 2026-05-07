import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://tylerfoundationpro.com',
  integrations: [
    tailwind(),
    sitemap({
      customPages: [
        'https://tylerfoundationpro.com/',
        'https://tylerfoundationpro.com/slab-foundation-repair/',
        'https://tylerfoundationpro.com/pier-beam-repair/',
        'https://tylerfoundationpro.com/house-leveling/',
        'https://tylerfoundationpro.com/commercial-foundation-repair/',
        'https://tylerfoundationpro.com/lindale-tx/',
        'https://tylerfoundationpro.com/whitehouse-tx/',
        'https://tylerfoundationpro.com/bullard-tx/',
        'https://tylerfoundationpro.com/flint-tx/',
        'https://tylerfoundationpro.com/hideaway-tx/',
        'https://tylerfoundationpro.com/chandler-tx/',
      ],
    }),
  ],
});
