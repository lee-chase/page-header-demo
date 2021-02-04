import React, { useRef } from 'react';
import { ActionBarItem, PageActionItem, PageHeader } from "@carbon/ibm-cloud-cognitive-experimental";
import { BreadcrumbItem, Tabs, Tab, Tag, Grid, Row, Column } from 'carbon-components-react';
import { Lightning16, Bee24 } from '@carbon/icons-react';

import './_sample-page.scss';

const actionBarItems = (
  <>
    <ActionBarItem renderIcon={Lightning16} iconDescription="Action 1" />
    <ActionBarItem renderIcon={Lightning16} iconDescription="Action 2" />
    <ActionBarItem renderIcon={Lightning16} iconDescription="Action 3" />
    <ActionBarItem renderIcon={Lightning16} iconDescription="Action 4" />
  </>
);

const breadcrumbItems = (
  <>
    <BreadcrumbItem href="#">Breadcrumb 1</BreadcrumbItem>
    <BreadcrumbItem href="#">Breadcrumb 2</BreadcrumbItem>
    <BreadcrumbItem href="#">Breadcrumb 3</BreadcrumbItem>
    <BreadcrumbItem href="#">Breadcrumb 4</BreadcrumbItem>
    <BreadcrumbItem href="#">Breadcrumb 5</BreadcrumbItem>
  </>
);

const pageActions = (
  <>
    <PageActionItem kind="secondary">Secondary button</PageActionItem>
    <PageActionItem kind="primary">Primary button</PageActionItem>
  </>
);

const tabs = (
  <Tabs>
    <Tab label="Tab 1" />
    <Tab label="Tab 2" />
    <Tab label="Tab 3" />
    <Tab label="Tab 4" />
  </Tabs>
);

const tags = [
  <Tag type="blue" key="blue">
    Blue
  </Tag>,
  <Tag type="green" key="green">
    Green
  </Tag>,
  <Tag type="warm-gray" key="warm-gray">
    Warm gray
  </Tag>,
  <Tag type="purple" key="purple">
    Purple
  </Tag>,
  <Tag type="red" key="red">
    Red
  </Tag>,
  <Tag type="teal" key="teal">
    Teal
  </Tag>,
  <Tag type="red" key="long-one">
    Longer ThanAPieceOfString
  </Tag>,
  <Tag type="high-contrast" key="high-contrast">
    High contrast
  </Tag>,
  <Tag type="magenta" key="magenta">
    Magenta
  </Tag>,
  <Tag type="purple" key="purple2">
    Purple
  </Tag>,
  <Tag type="red" key="red2">
    Red
  </Tag>,
  <Tag type="teal" key="teal2">
    Teal
  </Tag>,
  <Tag type="red" key="long-one2">
    Longer ThanAPieceOfString
  </Tag>,
  <Tag type="high-contrast" key="high-contrast2">
    High contrast
  </Tag>,
  <Tag type="magenta" key="magenta2">
    Magenta
  </Tag>,
];

const dummyPageContent = (
  <Grid className="sample-page__dummy-content" narrow={true}>
    <Row>
      <Column
        sm={1}
        md={2}
        lg={4}
        className="sample-page__dummy-content-block">
        <div className="sample-page__dummy-content-text">Column #1</div>
      </Column>
      <Column
        sm={1}
        md={2}
        lg={4}
        className="sample-page__dummy-content-block">
        <div className="sample-page__dummy-content-text">Column #2</div>
      </Column>
      <Column
        sm={2}
        md={4}
        lg={8}
        className="sample-page__dummy-content-block">
        <div className="sample-page__dummy-content-text">Column #3</div>
      </Column>
    </Row>
  </Grid>
);

const availableSpace = (
  <div style={{ display: 'flex' }}>
    <p style={{ marginRight: '50px', maxWidth: '400px' }}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor <strong>incididunt ut labore</strong> et dolore magna aliqua. Ut
      enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
      aliquip ex ea commodo consequat.
    </p>
    <p>
      Property: Value
      <br />
      Property: Value
      <br />
      Property: Value
    </p>
  </div>
);

export const SamplePage = (props) => {
  const refMain = useRef(null);
  return (
    <>
      <PageHeader
        availableSpace={availableSpace}
        background
        breadcrumbItems={breadcrumbItems}
        actionBarItems={actionBarItems}
        title="Page title"
        pageActions={pageActions}
        subtitle="Page sub-title"
        navigation={tabs}
        scrollTarget={refMain}
        tags={tags}
         />
      <main class="sample-page__main" ref={refMain}>
        {dummyPageContent}
      </main>
    </>
  )
};
