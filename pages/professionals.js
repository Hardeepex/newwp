import { gql, useQuery } from "@apollo/client";
import Layout from "../components/Layout";
import ProfessionalCard from "../components/ProfessionalCard";

const GET_PROFESSIONALS = gql`
  query GetProfessionals {
    professionals {
    nodes {
      id
      link
      title
      uri
      content(format: RENDERED)
      featuredImage {
        node {
          mediaItemUrl
        }
      }
      databaseId
      slug
    }
  }
}

`;

export default function Professionals() {
  const { loading, error, data } = useQuery(GET_PROFESSIONALS);

  if (loading) return 'Loading...';
  if (error) return `Error! ${error.message}`;

  return (
    <Layout>
    <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {data.professionals.nodes.map((professional) => (
        <li className="gallery-item" key={professional.databaseId}>
          <ProfessionalCard professional={professional} />
        </li>
      ))}
    </ul>
  </Layout>
  );
}
