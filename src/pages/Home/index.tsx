/* eslint-disable no-lone-blocks */
import React, { useContext } from 'react';
import { AutoSizer } from 'react-virtualized';
import Header from '../../components/Header';
import Content from '../../components/Content';
import { GlobalContext } from '../../data/contexts/GlobalContext';
import homeConst from '../../mocks/home_const.json';
import { TextArea } from "./styles";

type texts = {
  subtitle: string,
  text: string,
}
interface IData {
  title: string,
  paragraphs: Array<texts>,
}

function App() {
  const { context, setContext } = useContext(GlobalContext);
  const data = homeConst as IData;
  return (
    <AutoSizer>
      {({height, width}) => {
        { if((width <= 775 && context.isMobile === false) || (width > 775 && context.isMobile === true))
          {setContext({...context, isMobile: !context.isMobile})}}
        return (
          <div className="App" style={{ height, width }}>
              <Header />
              <Content width={0.8*width} height={height-100} marginTop={70}>
                <h1>{ data.title }</h1>
                { data.paragraphs.map(area => {
                  return (
                  <TextArea>
                    <h2>{area.subtitle}</h2>
                    <p>{area.text}</p>
                  </TextArea>
                  )}) }
              </Content>
            </div>
      )}} 
    </AutoSizer>
  );
}

export default App;
