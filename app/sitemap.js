export default function sitemap() {
  return [
    {
      url: "https://www.lupleg.website/features",
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 2,
    },
    {
      url: "https://www.lupleg.website/podcasts",
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 1.9,
    },
    {
      url: "https://www.lupleg.website/academy",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: "https://www.lupleg.website/pricing",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.7,
    },
    {
      url: "https://www.lupleg.website/affiliates",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.6,
    },
    {
      url: "https://www.lupleg.website/sponsor",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.5,
    },
    {
      url: "https://www.lupleg.website/contacts",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.4,
    },
  ];
}
