export default function sitemap() {
  return [
    {
      url: "https://www.lupleg.org",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: "https://www.lupleg.org/challenges/frontend",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1.5,
    },
    {
      url: "https://www.lupleg.org/programs",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 2,
    },
    {
      url: "https://www.lupleg.org/resources/machine-learning",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 2.5,
    },
    {
      url: "https://www.lupleg.org/blogs",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 3,
    },
    {
      url: "https://www.lupleg.org/affiliates",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 3.5,
    },
    {
      url: "https://www.lupleg.org/mentorships/mentoring",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 4,
    },
  ];
}
