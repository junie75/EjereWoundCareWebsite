import fm from "front-matter";

export const getBlogPosts = () => {
  const modules = import.meta.glob("../_posts/blog/*.md", {
    query: "?raw",
    eager: true,
  });
  console.log(modules);
  const blogPosts = [];

  for (const path in modules) {
    const markdown = modules[path].default;
    console.log("markdown is: ", markdown);
    const { attributes: data, body: content } = fm(markdown);
    console.log("data is", data);
    console.log("content is", content);
    blogPosts.push({ ...data, content });
  }

  return blogPosts;
};
