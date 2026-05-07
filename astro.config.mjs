import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://tylerfoundationpros.com',
  integrations: [
    tailwind(),
    sitemap({
      customPages: [
        'https://tylerfoundationpros.com/',
        'https://tylerfoundationpros.com/slab-foundation-repair/',
        'https://tylerfoundationpros.com/pier-beam-repair/',
        'https://tylerfoundationpros.com/house-leveling/',
        'https://tylerfoundationpros.com/commercial-foundation-repair/',
        'https://tylerfoundationpros.com/lindale-tx/',
        'https://tylerfoundationpros.com/whitehouse-tx/',
        'https://tylerfoundationpros.com/bullard-tx/',
        'https://tylerfoundationpros.com/flint-tx/',
        'https://tylerfoundationpros.com/hideaway-tx/',
        'https://tylerfoundationpros.com/chandler-tx/',
      ],
    }),
  ],
});
