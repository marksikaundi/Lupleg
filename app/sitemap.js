export default function sitemap() {
  return [
    {
      url: "https://www.lupleg.website/mentorships",
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 1,
    },
    {
      url: "https://www.lupleg.website/challenge",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1.5,
    },
    {
      url: "https://www.lupleg.website/podcasts",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 2,
    },
    {
      url: "https://www.lupleg.website/office-productivity-software",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 2.5,
    },
    {
      url: "https://www.lupleg.website/frontend-development",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 3,
    },
    {
      url: "https://www.lupleg.website/backend-development",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 3.5,
    },
  ];
}
