import fm from "front-matter";
import { marked } from "marked";
import getVideoId from "get-video-id";

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
    const postDate = formattedDate(data.date);
    const formattedPath = formatPath(data.thumbnail);
    const readTime = calculateReadTime(content);
    const youtubeID = extractYoutubeID(data.youtubeLink); //get the id of the youtube video
    // const slug = defaultUrlTransform(data.title); //MARK --> makes safe but is it SEO friendly?
    blogPosts.push({
      ...data,
      content,
      slug,
      postDate,
      formattedPath,
      readTime,
      youtubeID,
    });
  }

  // console.log(blogPosts);
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

//format date to a human readable string
const formattedDate = (date) => {
  var newDate = new Date();
  newDate = date;

  return newDate.toDateString();
};

//format path of thumbnails bc in production the "/public" prefix is not needed
const formatPath = (path) => {
  return path.replace("/public", "");
};

const calculateReadTime = (content) => {
  // console.log(content);
  var htmlContent = marked.parse(content);
  const parsedContent = htmlContent.replace(/<(?!br[\x20/>])[^<>]+>/g, ""); //removes html tags
  const words = parsedContent
    .replaceAll("\n", " ")
    .split(" ")
    .filter((n) => n != " ");
  // console.log(words);
  //average reading speed is 200 words per minute so divide words by 200 to get num minutes
  const readTime = Math.ceil(words.length / 200); //round up so <1 minutes rounds up to 1.
  // console.log(readTime);

  return readTime;
};

const extractYoutubeID = (link) => {
  //assuming it is the youbuve shortened share link, The structure is https://youtu.be/VIDEO_ID.
  const { id } = getVideoId(link);
  return id;
};
