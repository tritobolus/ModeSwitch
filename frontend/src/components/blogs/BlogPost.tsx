import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";

const blogs = import.meta.glob("./blogcontent/*.md", {
  as: "raw",
});

export default function BlogPost() {
  const { slug } = useParams();
  const [content, setContent] = useState("");

  useEffect(() => {
    const path = `./blogcontent/${slug}.md`;

    const loader = blogs[path];

    if (!loader) {
      setContent("# Blog not found 😢");
      return;
    }

    loader().then((text: string) => {
      setContent(text);
    });
  }, [slug]);

  return (
    <div className="p-6 max-w-3xl mx-auto prose prose-invert">
      <ReactMarkdown>{content}</ReactMarkdown>
    </div>
  );
}
