const matter = require("gray-matter");
import marked from "marked";
import { useState } from "react";

export const getStaticPaths = async () => {
  const res = await fetch(
    "https://usa-english-tutor-prod-glbns.ondigitalocean.app/lessons"
  );
  const data = await res.json();
  const paths = data.map((lesson) => {
    return {
      params: { id: lesson.id.toString() },
    };
  });
  return {
    paths: paths,
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const id = context.params.id;
  const res = await fetch(
    "https://usa-english-tutor-prod-glbns.ondigitalocean.app/lessons/" + id
  );
  const data = await res.json();

  const { data: frontmatter, content } = matter(data.lessonContent);

  return {
    props: {
      frontmatter,
      content,
    },
  };
};

export default function Lesson({ frontmatter, content }) {
  return (
    <div className="flex  w-full justify-center min-h-screen">
      <main className="min-h-screen w-full">
        <div className="post px-10  ">
          <div className="w-full ">
            <div className="relative overflow-hidden pb-2/3 rounded my-24">
              <h1 className="lg:text-7xl text-3xl text-center mt-4 mb-24 leading-normal ">
                {frontmatter.title}
              </h1>

              <img
                src={frontmatter.imageURL}
                alt=""
                className="absolute min-h-0 w-full object-cover"
              />
            </div>
            <p className="by-line font-semibold text-2xl mb-12">
              Author: {frontmatter.author}
            </p>

            <div
              dangerouslySetInnerHTML={{ __html: marked(content) }}
              className="prose prose-lg  xl:prose-xl max-w-none mb-36"
            ></div>
            {/* Render video component if there is an embedID in the frontmatter */}
            {frontmatter.embedID && (
              <div className="aspect-w-16 aspect-h-9 my-24">
                <iframe
                  className="rounded "
                  src={`https://www.youtube.com/embed/${frontmatter.embedID}`}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}
