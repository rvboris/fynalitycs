import React from 'react';
import { push } from 'react-router-redux';
import { get } from 'lodash';
import { connect } from 'react-redux';
import { Button } from 'react-bootstrap';
import { defineMessages, injectIntl, FormattedMessage } from 'react-intl';

import CategoriesTree from '../../components/CategoriesTree';
import CategoryEditForm from '../../components/CategoryEditForm';
import style from './style.css';

const messages = defineMessages({
  manageCategories: {
    id: 'container.categories.manageCategories',
    description: 'Page title',
    defaultMessage: 'Categories management',
  },
  createCategory: {
    id: 'container.categories.createCategory',
    description: 'Create category button',
    defaultMessage: 'Create new category',
  },
});

const Categories = (props) => {
  const selectedCategoryId = get(props, 'params.categoryId', null);

  return (
    <div>
      <h3><FormattedMessage {...messages.manageCategories} /></h3>
      <hr />
      <div className={style.categories}>
        <div className={style['categories-tree-container']}>
          <Button
            block
            bsStyle="primary"
            className={style['category-create']}
            onClick={props.newCategory}
          >
            <FormattedMessage {...messages.createCategory} />
          </Button>

          <CategoriesTree onSelect={props.selectCategory} selectedCategoryId={selectedCategoryId} />
        </div>
        <div className={style['category-details-container']}>
          <CategoryEditForm categoryId={selectedCategoryId} />
        </div>
      </div>
    </div>
  );
};

Categories.propTypes = {
  selectCategory: React.PropTypes.func.isRequired,
  newCategory: React.PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  selectCategory: (categoryId) => dispatch(push(`/dashboard/categories/${categoryId}`)),
  newCategory: () => dispatch(push('/dashboard/categories/new')),
});

export default injectIntl(connect(null, mapDispatchToProps)(Categories));