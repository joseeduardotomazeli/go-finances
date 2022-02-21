import React, { useState } from 'react';
import { TouchableWithoutFeedback, Keyboard, Modal, Alert } from 'react-native';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';

import CategorySelect from '../CategorySelect';

import InputForm from '../../components/Form/InputForm';
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

interface FormData {
  [name: string]: any;
}

const schema = Yup.object().shape({
  name: Yup.string().required('Campo obrigatório.'),
  amount: Yup.number()
    .typeError('Campo numérico.')
    .positive('Campo positivo.')
    .required('Campo obrigatório.'),
});

function Register() {
  const { control, handleSubmit, formState } = useForm({
    resolver: yupResolver(schema),
  });

  const [transactionType, setTransactionType] = useState('');

  const [category, setCategory] = useState({
    key: 'category',
    icon: '',
    name: 'Categoria',
  });

  const [isCategoryModalVisible, setIsCategoryModalVisible] = useState(false);

  const { errors } = formState;

  function handleClickTransactionType(type: 'up' | 'down') {
    setTransactionType(type);
  }

  function handleOpenCategoryModal() {
    setIsCategoryModalVisible(true);
  }

  function handleCloseCategoryModal() {
    setIsCategoryModalVisible(false);
  }

  function handleRegister(values: FormData) {
    const { name, amount } = values;

    if (!transactionType) return Alert.alert('Tipo da transação obrigatório.');

    if (category.key === 'category')
      return Alert.alert('Categoria obrigatória.');

    const data = {
      name,
      amount,
      transactionType,
      category: category.key,
    };

    console.log(data);
  }

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <Container>
        <Header>
          <Title>Cadastro</Title>
        </Header>

        <Form>
          <Fields>
            <InputForm
              name="name"
              control={control}
              placeholder="Nome"
              autoCapitalize="sentences"
              autoCorrect={false}
              error={errors.name && errors.name.message}
            />

            <InputForm
              name="amount"
              control={control}
              placeholder="Preço"
              keyboardType="numeric"
              error={errors.amount && errors.amount.message}
            />

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

          <Button title="Enviar" onPress={handleSubmit(handleRegister)} />
        </Form>

        <Modal visible={isCategoryModalVisible}>
          <CategorySelect
            category={category}
            setCategory={setCategory}
            onClose={handleCloseCategoryModal}
          />
        </Modal>
      </Container>
    </TouchableWithoutFeedback>
  );
}

export default Register;
