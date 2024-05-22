import type { GetStaticProps, NextPage } from "next";
import { Layout } from "../components/layouts/Layout/Layout";
import { Card } from "../components/ui/Card/Card";
import { Fragment } from "react";
import { Grid } from "../components/ui/Grid/Grid";
import { Welcome } from "../components/ui/Card";
import { baseUrl } from "../api/contentApi";

interface Props {
  data: Welcome[];
}

const HomePage: NextPage<Props> = ({ data }) => {
  return (
    <Layout title="Content Feed App">
      <Grid>
        {data.map((item: Welcome, index) => {
          return (
            <Fragment key={index}>
              <Card {...item} />
            </Fragment>
          );
        })}
      </Grid>
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async (ctx) => {
  const res = await fetch(baseUrl);

  const data = await res.json();

  return {
    props: {
      data: data.contentCards,
    },
  };
};

export default HomePage;
