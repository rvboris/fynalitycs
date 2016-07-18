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
  'auth.register.email.placeholder': 'your@email.com',
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

  'auth.logout.done': 'The logout is complete, return to the main page...',

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
};
