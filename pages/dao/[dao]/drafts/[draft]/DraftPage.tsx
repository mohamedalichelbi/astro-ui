import Head from 'next/head';
import { NextPage } from 'next';
import { useRouter } from 'next/router';
import React, { useMemo } from 'react';

import { DAO } from 'types/dao';
import { DaoContext } from 'types/context';

import { ViewProposal } from 'astro_2.0/features/ViewProposal';
import { NestedDaoPageWrapper } from 'astro_2.0/features/pages/nestedDaoPagesContent/NestedDaoPageWrapper';
import { BackButton } from 'astro_2.0/features/ViewProposal/components/BackButton';
import { DRAFTS_PAGE_URL } from 'constants/routing';

import { useGetBreadcrumbsConfig } from 'hooks/useGetBreadcrumbsConfig';
import { DraftComments } from 'astro_2.0/features/DraftComments';

import { DraftProposal } from 'types/draftProposal';

import { DraftsDataProvider } from 'astro_2.0/features/Drafts/components/DraftsProvider/DraftsProvider';
import { DraftWrapper } from 'astro_2.0/features/Drafts/components/DraftWrapper/DraftWrapper';

import styles from './Draft.module.scss';

interface DraftPageProps {
  dao: DAO;
  draft: DraftProposal;
  daoContext: DaoContext;
}

const DraftPage: NextPage<DraftPageProps> = ({ dao, draft, daoContext }) => {
  const router = useRouter();

  const breadcrumbsConfig = useGetBreadcrumbsConfig(
    dao.id,
    dao.displayName,
    undefined,
    undefined,
    undefined,
    draft
  );
  const breadcrumbs = useMemo(() => {
    return [
      breadcrumbsConfig.ALL_DAOS_URL,
      breadcrumbsConfig.SINGLE_DAO_PAGE,
      breadcrumbsConfig.DRAFTS,
      breadcrumbsConfig.SINGLE_DRAFT_PAGE_URL,
    ];
  }, [breadcrumbsConfig]);

  return (
    <DraftsDataProvider>
      <NestedDaoPageWrapper daoContext={daoContext} breadcrumbs={breadcrumbs}>
        <DraftWrapper>
          {toggleCreateProposal => (
            <>
              <Head>
                <title>DAO Proposal</title>
                <meta property="og:url" content={router.asPath} />
                <meta property="og:type" content="website" />
                <meta property="og:title" content="Astro" />
                <meta property="og:description" content={draft?.description} />
                <meta
                  property="og:image"
                  content={dao?.flagCover || dao?.logo}
                />

                <meta name="twitter:card" content="summary_large_image" />
                <meta property="twitter:url" content={router.asPath} />
                <meta name="twitter:title" content="Astro" />
                <meta name="twitter:description" content={draft?.description} />
                <meta
                  name="twitter:image"
                  content={dao?.flagCover || dao?.logo}
                />
              </Head>
              <div className={styles.draftInfo}>
                <BackButton
                  name="Back to Draft Feed"
                  href={{
                    pathname: DRAFTS_PAGE_URL,
                    query: {
                      dao: dao.id,
                    },
                  }}
                />

                <ViewProposal
                  preventNavigate
                  isDraft
                  dao={dao}
                  proposal={draft}
                  showFlag={false}
                  userPermissions={daoContext.userPermissions}
                  toggleCreateProposal={toggleCreateProposal}
                />
                <DraftComments dao={dao} />
              </div>
            </>
          )}
        </DraftWrapper>
      </NestedDaoPageWrapper>
    </DraftsDataProvider>
  );
};

export default DraftPage;
