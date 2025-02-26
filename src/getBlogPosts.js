import fm from "front-matter";

export const getBlogPosts = () => {
  const modules = import.meta.glob("../_posts/blog/*.md", {
    query: "?raw",
    eager: true,
  });
  const blogPosts = [];

  for (const path in modules) {
    const markdown = modules[path].default;
    const { attributes: data, body: content } = fm(markdown);
    blogPosts.push({ ...data, content });
  }

  return blogPosts;
};
