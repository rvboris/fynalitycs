export default {
  'global.error.technical': 'Something went wrong, sorry',

  'auth.login.title': 'Login',
  'auth.login.email.placeholder': 'example@domain.com',
  'auth.login.email.label': 'Enter your email',
  'auth.login.password.placeholder': 'strong password',
  'auth.login.password.label': 'Enter your password',
  'auth.login.button': 'Login',
  'auth.login.processButton': 'Please wait...',
  'auth.login.registerButton': 'Registration',
  'auth.login.error.email.invalid': 'Invalid email',
  'auth.login.error.email.required': 'Email is required',
  'auth.login.error.password.required': 'Password is required',
  'auth.login.error.password.short': 'Password must be larger than 8 chars',
  'auth.login.error.password.invalid': 'Wrong email or password',

  'auth.register.title': 'Registration',
  'auth.register.email.placeholder': 'example@domain.com',
  'auth.register.email.label': 'Enter your email',
  'auth.register.password.placeholder': 'strong password',
  'auth.register.password.label': 'Enter your password',
  'auth.register.repeatPassword.placeholder': 'repeat password',
  'auth.register.repeatPassword.label': 'Enter your password again',
  'auth.register.button': 'Register',
  'auth.register.processButton': 'Please wait...',
  'auth.register.error.email.invalid': 'Invalid email',
  'auth.register.error.email.unique': 'That email is already registered',
  'auth.register.error.email.required': 'Email is required',
  'auth.register.error.password.required': 'Password is required',
  'auth.register.error.repeatPassword.required': 'Password is required',
  'auth.register.error.password.identical': 'Passwords must be identical',
  'auth.register.error.password.short': 'Password must be larger than 8 chars',

  'category.update.error._id.required': 'Category id is required',
  'category.update.error._id.notFound': 'Category not found',
  'category.update.error.name.required': 'Category name is required',
  'category.update.error.isSystem': 'Changing the service categories is prohibited',

  'category.add.error.params.required': 'Category params is required',
  'category.add.error._id.required': 'Category id is required',
  'category.add.error._id.notFound': 'Category not found',
  'category.add.error.name.required': 'Category name is required',
  'category.add.error.type.required': 'Category type is required',
  'category.add.error.type.invalid': 'Invalid category type',
  'category.add.error.type.parentInvalid': 'Type of parent category does not correspond to the new',

  'category.delete.error._id.required': 'To remove the category id is required',
  'category.delete.error._id.notFound': 'Category not found',
  'category.delete.error.isSystem': 'Removing the service categories is prohibited',

  'category.move.error._id.required': 'Requires id moved category',
  'category.move.error.to.required': 'Requires a parent category id',
  'category.move.error._id.notFound': 'Category to move could not be found',
  'category.move.error.isSystem': 'Moving service categories prohibited',
  'category.move.error.to.notFound': 'Parent category not found',
  'category.move.error.type.parentInvalid': 'Type of parent category does not match moved',

  'account.update.error._id.required': 'Account id is required',
  'account.update.error._id.invalid': 'Invalid account id',
  'account.update.error._id.notFound': 'Account not found with that id',
  'account.update.error.startBalance.invalid': 'Invalid start balance',
  'account.update.error.startBalance.positive': 'The start balance can only be negative',
  'account.update.error.startBalance.negative': 'The start balance can only be positive',
  'account.update.error.name.exist': 'Account with the same name already exists',

  'account.add.error.name.required': 'Account name is required',
  'account.add.error.startBalance.required': 'Start balance is required',
  'account.add.error.type.required': 'Account type is required',
  'account.add.error.currency.required': 'Account currency is required',
  'account.add.error.order.invalid': 'Account order is invalid',
  'account.add.error.startBalance.invalid': 'Invalid start balance',
  'account.add.error.currency.invalid': 'Invalid currency',
  'account.add.error.currency.notFound': 'Currency not found',
  'account.add.error.startBalance.positive': 'The start balance can only be negative',
  'account.add.error.startBalance.negative': 'The start balance can only be positive',
  'account.add.error.name.exist': 'Account with the same name already exists',

  'account.delete.error._id.required': 'Account id is required',
  'account.delete.error._id.invalid': 'Invalid account id',
  'account.delete.error._id.notFound': 'Account not found with that id',

  'operation.add.error.created.required': 'Creation date is required',
  'operation.add.error.created.invalid': 'Invalid creation date',
  'operation.add.error.account.required': 'Account is required',
  'operation.add.error.account.invalid': 'Account is invalid',
  'operation.add.error.category.required': 'Category is required',
  'operation.add.error.category.invalid': 'Invalid category',
  'operation.add.error.amount.required': 'Amount is required',
  'operation.add.error.amount.invalid': 'Invalid amount',
  'operation.add.error.account.notFound': 'Account not found',
  'operation.add.error.category.notFound': 'Category not found',

  'operation.delete.error._id.required': 'Operation id is required',
  'operation.delete.error._id.invalid': 'Invalid operation id',
  'operation.delete.error._id.notFound': 'Operation not found with that id',

  'operation.update.error._id.required': 'Operation id is required',
  'operation.update.error._id.invalid': 'Invalid operation id',
  'operation.update.error._id.notFound': 'Operation not found with that id',
  'operation.update.error.created.invalid': 'Invalid creation date',
  'operation.update.error.account.invalid': 'Invalid account',
  'operation.update.error.account.notFound': 'Account not found with that id',
  'operation.update.error.amount.invalid': 'Invalid amount',
  'operation.update.error.category.invalidType': 'Invalid type of category',
  'operation.update.error.category.notFound': 'Category not found',
  'operation.update.error.category.invalid': 'Invalid category',

  'operation.addTransfer.error.created.required': 'Creation date is required',
  'operation.addTransfer.error.created.invalid': 'Invalid creation date',
  'operation.addTransfer.error.accountFrom.required': 'Source account is required',
  'operation.addTransfer.error.accountFrom.invalid': 'Source account invalid',
  'operation.addTransfer.error.accountFrom.notFound': 'Source account not found',
  'operation.addTransfer.error.accountTo.required': 'Destination account is required',
  'operation.addTransfer.error.accountTo.invalid': 'Invalid destination account',
  'operation.addTransfer.error.accountTo.equal':
    'Source and destination accounts must not be equal',
  'operation.addTransfer.error.accountTo.notFound': 'Destination account not found',
  'operation.addTransfer.error.amountFrom.required': 'Source amount is required',
  'operation.addTransfer.error.amountFrom.invalid': 'Invalid source amount',
  'operation.addTransfer.error.amountFrom.positive': 'Source amount must be bigger than 0',
  'operation.addTransfer.error.amountTo.required': 'Destination amount is required',
  'operation.addTransfer.error.amountTo.invalid': 'Invalid destination amount',
  'operation.addTransfer.error.amountTo.positive': 'Destination amount must be bigger than 0',

  'operation.updateTransfer.error._id.required': 'Operation id is required',
  'operation.updateTransfer.error._id.invalid': 'Invalid operation id',
  'operation.updateTransfer.error._id.notFound': 'Operation not found',
  'operation.updateTransfer.error.created.invalid': 'Invalid date',
  'operation.updateTransfer.error.accountFrom.invalid': 'Invalid source account',
  'operation.updateTransfer.error.accountFrom.notFound': 'Source account not found',
  'operation.updateTransfer.error.accountTo.invalid': 'Invalid destination account',
  'operation.updateTransfer.error.accountTo.equal':
    'Source and destination accounts must not be equal',
  'operation.updateTransfer.error.accountTo.notFound': 'Destination account not found',
  'operation.updateTransfer.error.amountFrom.invalid': 'Invalid source amount',
  'operation.updateTransfer.error.amountFrom.positive': 'Source amount must be bigger than 0',
  'operation.updateTransfer.error.amountTo.invalid': 'Invalid destination amount',
  'operation.updateTransfer.error.amountTo.positive': 'Destination amount must be bigger than 0',

  'operation.list.error.account.invalid': 'Invalid account',
  'operation.list.error.type.invalid': 'Invalid type of operation',
  'operation.list.error.category.invalid': 'Invalid category',
  'operation.list.error.amountFrom.invalid': 'Invalid start amount',
  'operation.list.error.amountTo.invalid': 'Invalid end amount',
  'operation.list.error.dateFrom.invalid': 'Invalid start date',
  'operation.list.error.dateTo.invalid': 'Invalid end date',
  'operation.list.error.skip.invalid': 'Invalid paging params',
  'operation.list.error.limit.invalid': 'Invalid paging params',

  'component.appBar.operations': 'Operations',
  'component.appBar.budget': 'Budget',
  'component.appBar.reports': 'Reports',
  'component.appBar.profile': 'Profile',
  'component.appBar.exit': 'Logout',
  'component.appBar.manageAccounts': 'Accounts',
  'component.appBar.manageCategories': 'Categories',
  'component.appBar.more': 'More',

  'component.accountList.accounts': 'Accounts',
  'component.accountList.noAccounts': 'You have no accounts',

  'component.selectInput.notFound': 'Not found',

  'component.accountEditForm.infoAlert': 'Select or create a new account',
  'component.accountEditForm.name.label': 'Name of account',
  'component.accountEditForm.name.placeholder': 'Enter account name',
  'component.accountEditForm.currencyId.label': 'Select the account currency',
  'component.accountEditForm.startBalance.label': 'Start balance',
  'component.accountEditForm.startBalance.placeholder': '0.00',
  'component.accountEditForm.type.label': 'This is a debt or a loan?',
  'component.accountEditForm.saveProcessButton': 'Saving...',
  'component.accountEditForm.createButton': 'Create',
  'component.accountEditForm.saveButton': 'Save',
  'component.accountEditForm.deleteProcessButton': 'Deleting...',
  'component.accountEditForm.deleteButton': 'Delete',
  'component.accountEditForm.deleteModalTitle': 'Delete account',
  'component.accountEditForm.deleteModalConfirm': 'Are you sure want to delete your account {name}?',
  'component.accountEditForm.deleteModalWarning': 'All your operations for this account will be removed.',
  'component.accountEditForm.deleteModalNotice': 'You can also close the account so as not to see it in the list.',
  'component.accountEditForm.deleteModalError': 'When you delete an account error occurred',
  'component.accountEditForm.cancelButton': 'Cancel',

  'component.categoryEditForm.infoAlert': 'Select an category to edit or create a new one',
  'component.categoryEditForm.isSystemAlert': 'This system category, it can not be edited or deleted',
  'component.categoryEditForm.name.label': 'Name of category',
  'component.categoryEditForm.name.placeholder': 'Name of category',
  'component.categoryEditForm.type.label': 'Type of category',
  'component.categoryEditForm.parent.label': 'Parent of category',
  'component.categoryEditForm.saveProcessButton': 'Saving...',
  'component.categoryEditForm.createButton': 'Create',
  'component.categoryEditForm.saveButton': 'Save',
  'component.categoryEditForm.deleteProcessButton': 'Deleting...',
  'component.categoryEditForm.deleteButton': 'Delete',
  'component.categoryEditForm.deleteModalTitle': 'Delete category',
  'component.categoryEditForm.deleteModalConfirm': 'Are you sure want to delete your category {name}?',
  'component.categoryEditForm.deleteModalWarning': 'All your operations for this category will be moved in "no category"',
  'component.categoryEditForm.deleteModalError': 'When you delete an category error occurred',
  'component.categoryEditForm.cancelButton': 'Cancel',
  'component.categoryEditForm.expense': 'Expense',
  'component.categoryEditForm.income': 'Income',
  'component.categoryEditForm.any': 'Any',

  'component.operationEditForm.expense': 'Expense',
  'component.operationEditForm.transfer': 'Transfer',
  'component.operationEditForm.income': 'Income',
  'component.operationEditForm.saveProcessButton': 'Saving...',
  'component.operationEditForm.createButton': 'Add',
  'component.operationEditForm.saveButton': 'Save',
  'component.operationEditForm.addOperationHeader': 'Add new operation',
  'component.operationEditForm.editOperationHeader': 'Edit operation',
  'component.operationEditForm.category.placeholder': 'Select category',
  'component.operationEditForm.category.label': 'Category',
  'component.operationEditForm.account.placeholder': 'Select account',
  'component.operationEditForm.account.label': 'Account',
  'component.operationEditForm.amount.label': 'Amount',
  'component.operationEditForm.amountFrom.label': 'Writeoff amount',
  'component.operationEditForm.amountTo.label': 'Receipt amount',
  'component.operationEditForm.accountFrom.label': 'Account of write-off',
  'component.operationEditForm.accountFrom.placeholder': 'Select account',
  'component.operationEditForm.accountTo.label': 'Account of receipt',
  'component.operationEditForm.accountTo.placeholder': 'Select account',
  'component.operationEditForm.operationDate.label': 'Date of operation',

  'component.operationListItem.loading': 'Loading...',
  'component.operationListItem.remove': 'Remove',
  'component.operationListItem.edit': 'Edit',

  'component.categoriesTree.expense': 'expense',
  'component.categoriesTree.income': 'income',
  'component.categoriesTree.any': 'any',

  'container.accounts.manageAccounts': 'Account management',
  'container.accounts.createAccount': 'Create new account',

  'container.logout.done': 'Exit successfully completed',
  'container.logout.process': 'Logout...',

  'container.dashboard.loading': 'Loading, please wait...',

  'component.linkedAccountList.noAccounts': 'You have no accounts',

  'container.categories.manageCategories': 'Categories management',
  'container.categories.createCategory': 'Create new category',

  'container.operations.noAccounts': 'To add operations, you must create an account',
};
