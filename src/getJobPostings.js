//utility function to get job postings from markdown files
import matter from "gray-matter";
import fm from "front-matter";
import Markdown from "react-markdown";

export const getJobPostings = () => {
  const modules = import.meta.glob("/src/jobPostings/*.md", {
    query: "?raw",
    eager: true,
  }); // import all markdown files in the jobPostings directory

  const jobPostings = []; // array to store job postings
  for (const path in modules) {
    // iterate over each markdown file
    const markdown = modules[path].default; // get the content of the markdown file as plain text
    const { attributes: data, body: content } = fm(markdown); // parse the markdown file,

    jobPostings.push({ ...data, content }); // add the parsed data to the jobPostings array
  }

  return jobPostings;
};

/* **note** modules[path].default: 
Accesses the actual content of the Markdown file as a string. 
When you import a file with Vite, the 'default' export contains the full text of the file.
*/
