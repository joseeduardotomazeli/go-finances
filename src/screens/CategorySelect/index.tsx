import React from 'react';

import Button from '../../components/Form/Button';

import categories from '../../categories';

import {
  Container,
  Header,
  Title,
  CategoriesList,
  Category,
  Icon,
  Name,
  Separator,
  Footer,
} from './styles';

export interface Category {
  key: string;
  icon: string;
  name: string;
}

interface CategorySelectProps {
  category: Category;
  setCategory: (category: Category) => void;
  onClose: () => void;
}

function CategorySelect(props: CategorySelectProps) {
  const { category, setCategory, onClose } = props;

  function handleSelectCategory(category: Category) {
    setCategory(category);
  }

  return (
    <Container>
      <Header>
        <Title>Categoria</Title>
      </Header>

      <CategoriesList
        data={categories}
        keyExtractor={(category) => category.key}
        renderItem={(data) => (
          <Category
            isActive={data.item.key === category.key}
            onPress={() => handleSelectCategory(data.item)}
          >
            <Icon name={data.item.icon} />
            <Name>{data.item.name}</Name>
          </Category>
        )}
        ItemSeparatorComponent={() => <Separator />}
      />

      <Footer>
        <Button title="Selecionar" onPress={onClose} />
      </Footer>
    </Container>
  );
}

export default CategorySelect;
