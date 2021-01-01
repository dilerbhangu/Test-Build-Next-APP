import axios from "axios";
export default function Home({ data }) {
  return <div>Hello Worlddd {data[0].name}</div>;
}

export async function getStaticProps() {
  const res = await fetch(process.env.API_PATH + "/api/hello");
  const data = await res.json();
  return {
    props: {
      data,
    },
  };
}
