import React, { useContext } from 'react';
import { PostContext } from "../Contexts/PostContext";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { BLOCKS, MARKS, INLINES } from "@contentful/rich-text-types";

const Posts = () => {
    const {post} = useContext(PostContext)
    console.log(post)
    
  return (
    <div>
      {post.map((p, index) => {
        let time = new Date(p.sys.createdAt);
        let month = time.toLocaleString("en-EN", { month: "long" });
        let day = time.getDate();
        let year = time.getFullYear();
        // console.log(day);
        // console.log(p.metadata.tags);
        // console.log(`Hello I am a ${p.fields.postImage.description}`)
        // console.log(p.sys.id)
        return (
          <article key={p.sys.id}>
            <h4>{p.fields.teaser}</h4>
            <h1>{p.fields.title}</h1>
            <p>
              {month} {day}, {year}
            </p>
            <img
              key={index}
              src={p.fields.postImage.fields.file.url}
              alt="here"
              width="400"
            />
            <span><a href={p.fields.postImage.fields.description} target="_blank" rel="noreferrer">©{p.fields.postImage.fields.title}</a></span>
            {documentToReactComponents(p.fields.postTextcontent, {
              renderNode: {
                [BLOCKS.PARAGRAPH]: (node, children) => {
                  return <p>{children}</p>;
                },
                [BLOCKS.HEADING_3]: (node, children) => {
                  return <h3>{children}</h3>;
                },
                [BLOCKS.UL_LIST]: (node, children) => {
                  return <ul>{children}</ul>;
                },
                [INLINES.HYPERLINK]: (node, children) => {
                  // console.log(node);
                  return (
                    <a
                      className="link"
                      target="_blank"
                      rel="noreferrer"
                      href={node.data.uri}
                    >
                      {children}
                    </a>
                  );
                }
              },
              renderMark: {
                [MARKS.CODE]: (text) => <code className="red">{text}</code>
              },
              renderText: (text) => {
                return text
                  .split("\n")
                  .map((i) => [i, <br />])
                  .flat();
              }
            })}
            <p>
              <em>
                {p.metadata.tags.map((t) => (
                  <span className="tags">{t.sys.id}</span>
                ))}
              </em>
            </p>
          </article>
        );
      })}
  </div>
  );
};

export default Posts;
