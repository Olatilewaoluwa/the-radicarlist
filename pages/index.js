export async function getServerSideProps() {
  return {
    redirect: {
      destination: "/project.html",
      permanent: false,
    },
  };
}

export default function Home() {
  return null;
}
