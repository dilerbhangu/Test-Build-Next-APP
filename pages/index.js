export default function Home({ d }) {
  console.log("d" + d);
  return <div>Hello Worlddd {d.name}</div>;
}

export async function getStaticProps() {
  const res = await fetch("http://localhost:3000/api/hello");
  const d = await res.json();
  console.log("in get" + d);
  return {
    props: {
      d,
    },
  };
}
