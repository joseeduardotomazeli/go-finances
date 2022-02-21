import React, { useState } from 'react';
import { Modal } from 'react-native';

import CategorySelect from '../CategorySelect';

import Input from '../../components/Form/Input';
import SelectButton from '../../components/Form/SelectButton';
import TransactionTypeButton from '../../components/Form/TransactionTypeButton';
import Button from '../../components/Form/Button';

import {
  Container,
  Header,
  Title,
  Form,
  Fields,
  TransactionTypes,
} from './styles';

function Register() {
  const [transactionType, setTransactionType] = useState('');

  const [category, setCategory] = useState({
    key: 'category',
    icon: '',
    name: 'Categoria',
  });

  const [isCategoryModalVisible, setIsCategoryModalVisible] = useState(false);

  function handleClickTransactionType(type: 'up' | 'down') {
    setTransactionType(type);
  }

  function handleOpenCategoryModal() {
    setIsCategoryModalVisible(true);
  }

  function handleCloseCategoryModal() {
    setIsCategoryModalVisible(false);
  }

  return (
    <Container>
      <Header>
        <Title>Cadastro</Title>
      </Header>

      <Form>
        <Fields>
          <Input placeholder="Nome" />
          <Input placeholder="Preço" />

          <TransactionTypes>
            <TransactionTypeButton
              type="up"
              title="Income"
              isActive={transactionType === 'up'}
              onPress={() => handleClickTransactionType('up')}
            />

            <TransactionTypeButton
              type="down"
              title="Outcome"
              isActive={transactionType === 'down'}
              onPress={() => handleClickTransactionType('down')}
            />
          </TransactionTypes>

          <SelectButton
            title={category.name}
            onPress={handleOpenCategoryModal}
          />
        </Fields>

        <Button title="Enviar" />
      </Form>

      <Modal visible={isCategoryModalVisible}>
        <CategorySelect
          category={category}
          setCategory={setCategory}
          onClose={handleCloseCategoryModal}
        />
      </Modal>
    </Container>
  );
}

export default Register;
