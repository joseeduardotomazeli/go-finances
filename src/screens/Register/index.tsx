import React, { useState } from 'react';
import { TouchableWithoutFeedback, Keyboard, Modal, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import uuid from 'react-native-uuid';

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

interface NavigationProps {
  navigate: (screen: string) => void;
}

const schema = Yup.object().shape({
  name: Yup.string().required('Campo obrigatório.'),
  amount: Yup.number()
    .typeError('Campo numérico.')
    .positive('Campo positivo.')
    .required('Campo obrigatório.'),
});

function Register() {
  const navigation = useNavigation<NavigationProps>();

  const { control, handleSubmit, formState, reset } = useForm({
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

  function handleClickTransactionType(type: 'positive' | 'negative') {
    setTransactionType(type);
  }

  function handleOpenCategoryModal() {
    setIsCategoryModalVisible(true);
  }

  function handleCloseCategoryModal() {
    setIsCategoryModalVisible(false);
  }

  async function handleRegister(values: FormData) {
    const { name, amount } = values;

    if (!transactionType) return Alert.alert('Tipo da transação obrigatório.');

    if (category.key === 'category')
      return Alert.alert('Categoria obrigatória.');

    const newTransaction = {
      id: String(uuid.v4()),
      name,
      amount,
      type: transactionType,
      category: category.key,
      date: new Date(),
    };

    try {
      const key = '@go_finances:transactions';

      const oldTransactions = await AsyncStorage.getItem(key);
      const oldTransactionsFormatted = oldTransactions
        ? JSON.parse(oldTransactions)
        : [];

      const data = [...oldTransactionsFormatted, newTransaction];

      await AsyncStorage.setItem(key, JSON.stringify(data));

      reset();

      setTransactionType('');
      setCategory({ key: 'category', icon: '', name: 'Categoria' });

      navigation.navigate('Listagem');
    } catch {
      Alert.alert('Erro ao salvar.');
    }
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
                type="positive"
                title="Income"
                isActive={transactionType === 'positive'}
                onPress={() => handleClickTransactionType('positive')}
              />

              <TransactionTypeButton
                type="negative"
                title="Outcome"
                isActive={transactionType === 'negative'}
                onPress={() => handleClickTransactionType('negative')}
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
