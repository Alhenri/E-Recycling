import React, { useContext, useState } from 'react';
import { HomeOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import { PointerEvent } from 'react-map-gl';

import { GlobalContext } from '../../data/contexts';
import PageDefault from '../../components/PageDefault';
import Content from '../../components/ContentDefault';
import Map from '../../components/Map';
import {
  Container,
  FormContainer,
  MapContainer,
  Input,
  SubmitButton,
} from './styles';
import { FormType } from './interfaces';
import postData from './api';

const AddCollectPoint: React.FC = () => {
  const {
    context: { height, width },
  } = useContext(GlobalContext);

  const [form, setForm] = useState<FormType>({});

  const onMapClick = (evnt: PointerEvent) => {
    const { lngLat } = evnt;
    setForm({ ...form, lng: lngLat[0], lat: lngLat[1] });
  };

  return (
    <PageDefault>
      <Link to="/">
        <HomeOutlined
          style={{
            position: 'absolute',
            top: 20,
            fontSize: 25,
            color: 'green',
          }}
        />
      </Link>
      <Content height={0.8 * height} width={0.8 * width} marginTop={0}>
        <Container>
          <MapContainer className="map-area">
            <Map
              latitude={0}
              longitude={0}
              zoom={4}
              mapClick={onMapClick}
              newPointer={{ lat: form.lat, lng: form.lng }}
            />
          </MapContainer>
          <div className="form-area">
            <h2>Dados no novo ponto de coleta</h2>
            <FormContainer>
              <Input
                required
                value={form.name}
                type="string"
                className="name"
                placeholder="Nome do local"
                onChange={({ target: { value } }) => {
                  setForm({ ...form, name: value });
                }}
              />
              <Input
                required
                type="url"
                value={form.image}
                className="url-image"
                placeholder="Url da imagem"
                onChange={({ target: { value } }) => {
                  setForm({ ...form, image: value });
                }}
              />
              <Input
                required
                type="string"
                value={form.time}
                className="time"
                placeholder="Data e hora"
                onChange={({ target: { value } }) => {
                  setForm({ ...form, time: value });
                }}
              />
            </FormContainer>
            <SubmitButton
              onClick={() => {
                if (
                  form &&
                  form.image &&
                  form.lat &&
                  form.lng &&
                  form.name &&
                  form.time
                ) {
                  postData(form);
                  setForm({});
                } else {
                  window.alert('Formulário incorreto');
                }
              }}
            >
              Criar
            </SubmitButton>
          </div>
        </Container>
      </Content>
    </PageDefault>
  );
};

export default AddCollectPoint;
