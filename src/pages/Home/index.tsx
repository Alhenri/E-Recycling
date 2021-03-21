/* eslint-disable no-lone-blocks */
import React, { useContext } from 'react';

import Header from '../../components/Header';
import Content from '../../components/Content';
import PageDefault from '../../components/PageDefault';
import homeConst from '../../mocks/home_const.json';
import { TextArea } from './styles';

import { GlobalContext } from '../../data/contexts/GlobalContext';
import { IData } from './interfaces';

const Home: React.FC = () => {
  const data = homeConst as IData;

  const { context } = useContext(GlobalContext);

  return (
    <PageDefault>
      <Header toButtonLeft="/search-point" toButtonRight="/create-point" />
      <Content
        width={0.8 * context.width}
        height={context.height - 100}
        marginTop={70}
      >
        <h1>{data.title}</h1>
        {data.paragraphs.map((area) => {
          return (
            <TextArea>
              <h2>{area.subtitle}</h2>
              <p>{area.text}</p>
            </TextArea>
          );
        })}
      </Content>
    </PageDefault>
  );
};

export default Home;
