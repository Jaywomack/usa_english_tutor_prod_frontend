import Head from "next/head";
const Meta = (props) => (
  <Head>
    <title>USA English Tutor | {props.title}</title>
    <meta name="description" content={props.desc} />
    <meta property="og:type" content="website" />
    <meta
      name="og:title"
      property="og:title"
      content="USA English Tutor is an English education website that offers free lessons and videos to help ESL students and English learners accelerate their English learning. We teach English with a neutral American accent to beginner, intermediate and advanced learners. We offer paid tutoring services in addition to the free content that we produce."
    />
    <meta
      name="og:description"
      property="og:description"
      content={props.desc}
    />
    <meta property="og:site_name" content="USA English Tutor" />
    <meta property="og:url" content="https://www.usaenglishtutor.com" />
    <meta
      name="twitter:card"
      content="USA English Tutor is an English education website that offers free lessons and videos to help ESL students and English learners accelerate their English learning. We teach English with a neutral American accent to beginner, intermediate and advanced learners. We offer paid tutoring services in addition to the free content that we produce."
    />
    <meta
      name="og:image:alt"
      content="USA English Tutor logo for usaenglishtutor.com American English education and tutoring services."
    />
    <meta property="og:image" content="/static/images/hero_flag.png" />
    <meta name="twitter:title" content="USA English Tutor LLC" />
    <meta name="twitter:description" content={props.desc} />
    <meta name="twitter:site" content="" />
    <meta name="twitter:creator" content="@USA_English_tutor" />

    <meta name="twitter:image" content="/static/images/hero_flag.png" />
    <link rel="canonical" href="https://www.usaenglishtutor.com" />
    <meta name="robots" content="index" follow="true" />
    {/* Raleway fonts.google */}
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link
      rel="preconnect"
      href="https://fonts.gstatic.com"
      crossOrigin="true"
    />

    <link rel="icon" type="image/x-icon" href="/static/images/favicon.ico" />
    <link
      rel="apple-touch-icon"
      type="image/png"
      href="/static/images/apple-touch-icon.png"
    />
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css"
      integrity="sha512-1ycn6IcaQQ40/MKBW2W4Rhis/DbILU74C1vSrLJxCq57o941Ym01SwNsOMqvEBFlcgUa6xLiPY/NS5R+E6ztJQ=="
      crossOrigin="anonymous"
      referrerPolicy="no-referrer"
    />
  </Head>
);
export default Meta;
