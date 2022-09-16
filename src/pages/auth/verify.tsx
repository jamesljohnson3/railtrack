import type { GetServerSideProps, NextPage } from 'next';

import { AuthWrapper } from '@/components/auth/AuthWrapper';
import { protectedAuthWithLocales } from '@/utils/protectedLocales';

const Verify: NextPage = () => {
  return (
    <AuthWrapper type="verify">
      Check your email and click the link in the message to activate your account.
    </AuthWrapper>
  );
};

export const getServerSideProps: GetServerSideProps = (ctx) => {
  return protectedAuthWithLocales(ctx);
};

export default Verify;