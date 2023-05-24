import { GetServerSideProps, GetServerSidePropsContext } from 'next';
import { ParsedUrlQuery } from 'querystring';
import Home, { HomeProps} from './page';

export const getServerSideProps: GetServerSideProps<HomeProps> = async (
  context: GetServerSidePropsContext<ParsedUrlQuery>
) => {
  const { req } = context;
  const ipAddress: string = Array.isArray(req.headers['x-forwarded-for'])
    ? req.headers['x-forwarded-for'][0]
    : req.headers['x-forwarded-for'] || req.socket.remoteAddress || '';

  return {
    props: {
      ipAddress,
    },
  };
};

export default Home;
