import React, { Component } from 'react';
import styled from 'styled-components';

import { rhythm } from '../../utils/typography';

import IntroductionItem from './IntroductionItem';

const Wrapper = styled.section`
  display: flex;
  height: 650px;
  justify-content: center;
`;

const Container = styled.div`
  display: flex;
  width: calc(1024px + ${rhythm(0.5)});
  height: 100%;
  flex-wrap: wrap;
  align-content: center;
  justify-content: center;
`;

const Row = styled.div`
  display: flex;
  width: 100%;
  margin: ${rhythm(0.5)} 0;
`;

class TitleSection extends Component {
  render() {
    return (
      <Wrapper>
        <Container>
          <Row>
            <IntroductionItem
              title="Flexible"
              subTitle="Build encapsulated handlers that manage your business logic, then compose them to make complex Bots. Handlers are just JavaScript function which can achieve whatever you want."
            />
            <IntroductionItem
              title="Modern"
              subTitle="Bottender is written with ES6/ES7 up syntax and full async await support. Now we can deal with complex async logic without lost the readability and maintainability of code."
            />
          </Row>
          <Row>
            <IntroductionItem
              title="Modular"
              subTitle="There are a set of interface that define the core modules provided by the Bottender. You can use your own implement of session store, your http server framework or even connect your bot to any platform."
            />
            <IntroductionItem
              title="Learn Once, Write Anywhere"
              subTitle="We don’t make assumptions about the rest of your technology stack, so you can develop new features in Bottender without rewriting existing code."
            />
          </Row>
        </Container>
      </Wrapper>
    );
  }
}

export default TitleSection;
