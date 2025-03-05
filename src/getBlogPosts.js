import fm from "front-matter";

export const getBlogPosts = () => {
  //gets every markdown file in blog posts folder and pulls raw content eagerly
  const modules = import.meta.glob("../_posts/blog/*.md", {
    query: "?raw",
    eager: true,
  });
  const blogPosts = []; //hold each blog post

  for (const path in modules) {
    //pull the frontmatter attributes and the body and adds slug to blog before adding to array
    const markdown = modules[path].default;
    const { attributes: data, body: content } = fm(markdown);
    const slug = createSlug(data.title);
    blogPosts.push({ ...data, content, slug });
  }

  return blogPosts;
};

//cleans up title and uses it to make a url slug
const createSlug = (title) => {
  // MARK --> Make this cleaner? learn more about regex expressions and make sure every possible unsafe
  //character is removed for urls
  //ALSO -- make slug unique...add unchanging id??
  return title
    .toString()
    .toLowerCase()
    .replace(/\s+/g, "-") // Replace spaces with -
    .replace(/[^\w\-]+/g, "") // Remove all non-word chars
    .replace(/\-\-+/g, "-") // Replace multiple - with single -
    .replace(/^-+/, "") // Trim - from start of text
    .replace(/-+$/, ""); // Trim - from end of text
};
