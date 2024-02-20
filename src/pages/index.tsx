import React from 'react';
import tw, { styled } from 'twin.macro';

import Head from '@/components/layouts/Head';
import Layout from '@/components/layouts/Layout';

const Home = () => {
  return (
    <Layout>
      <Head></Head>
      <Container>hello world</Container>
    </Layout>
  );
};

export default Home;

const Container = styled.div`
  ${tw``};
`;
