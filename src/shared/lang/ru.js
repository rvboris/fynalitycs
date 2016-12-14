export default {
  'global.error.technical': 'Что-то сломалось, извините',

  'auth.login.title': 'Вход',
  'auth.login.email.placeholder': 'example@domain.com',
  'auth.login.email.label': 'Введите свой email адрес',
  'auth.login.password.placeholder': 'сложный пароль',
  'auth.login.password.label': 'Введите свой пароль',
  'auth.login.button': 'Войти',
  'auth.login.processButton': 'Входим...',
  'auth.login.registerButton': 'Регистрация',
  'auth.login.error.email.invalid': 'Не верный email адрес',
  'auth.login.error.email.required': 'Email обязателен для заполнения',
  'auth.login.error.password.required': 'Пароль обязателен для заполнения',
  'auth.login.error.password.short': 'Пароль должен быть не менее 8 символов',
  'auth.login.error.password.invalid': 'Не верный email или пароль',

  'auth.register.title': 'Регистрация',
  'auth.register.email.placeholder': 'example@domain.com',
  'auth.register.email.label': 'Введите свой email адрес',
  'auth.register.password.placeholder': 'сложный пароль',
  'auth.register.password.label': 'Введите свой пароль',
  'auth.register.repeatPassword.placeholder': 'повторите пароль',
  'auth.register.repeatPassword.label': 'Введите пароль снова',
  'auth.register.button': 'Зарегистрироваться',
  'auth.register.processButton': 'Регистрируемся...',
  'auth.register.error.email.invalid': 'Не верный email адрес',
  'auth.register.error.email.unique': 'Такой email адрес уже зарегистрирован',
  'auth.register.error.email.required': 'Email обязателен для заполнения',
  'auth.register.error.password.required': 'Пароль обязателен для заполнения',
  'auth.register.error.repeatPassword.required': 'Пароль обязателен для заполнения',
  'auth.register.error.password.identical': 'Пароли должны совпадать',
  'auth.register.error.password.short': 'Пароль должен быть не менее 8 символов',

  'category.update.error._id.required': 'Не указан id категории',
  'category.update.error._id.notFound': 'Категория не найдена',
  'category.update.error.name.required': 'Не указано новое имя категории',
  'category.update.error.isSystem': 'Изменение службеных категорий запрещено',

  'category.add.error.params.required': 'Свойства новой категории не заданы',
  'category.add.error._id.required': 'Не указан id категории',
  'category.add.error._id.notFound': 'Категория не найдена',
  'category.add.error.name.required': 'Не указано новое имя категории',
  'category.add.error.type.required': 'Не указан тип категории',
  'category.add.error.type.invalid': 'Недопустимый тип категории',
  'category.add.error.type.parentInvalid': 'Тип родительской категории не соответствует новой',

  'category.delete.error._id.required': 'Для удаления категории id обязателен',
  'category.delete.error._id.notFound': 'Категория не найдена',
  'category.delete.error.isSystem': 'Удаление службеных категорий запрещено',

  'category.move.error._id.required': 'Требуется id перемещаемой категории',
  'category.move.error.to.required': 'Требуется id родительской категории',
  'category.move.error._id.notFound': 'Категория для перемещения не найдена',
  'category.move.error.isSystem': 'Перемещение службеных категорий запрещено',
  'category.move.error.to.notFound': 'Родительская категория не найдена',
  'category.move.error.type.parentInvalid':
    'Тип родительской категории не соответствует перемещаемой',

  'account.update.error._id.required': 'Не указан id счета',
  'account.update.error._id.invalid': 'Недопустимый id счета',
  'account.update.error._id.notFound': 'Счет с таким id не найден',
  'account.update.error.startBalance.invalid': 'Недопустимый начальный баланс',
  'account.update.error.startBalance.positive': 'Начальный баланс может быть только отрицательным',
  'account.update.error.startBalance.negative': 'Начальный баланс может быть только положительным',
  'account.update.error.name.exist': 'Счет с таким именем уже существует',

  'account.add.error.name.required': 'Не указано имя нового счета',
  'account.add.error.startBalance.required': 'Не указан начальный баланс нового счета',
  'account.add.error.type.required': 'Не указан тип нового счета',
  'account.add.error.currency.required': 'Не указана валюта новго счета',
  'account.add.error.order.invalid': 'Сортировка счета указана неверно',
  'account.add.error.startBalance.invalid': 'Недопустимый начальный баланс',
  'account.add.error.currency.invalid': 'Недопустимая валюта счета',
  'account.add.error.currency.notFound': 'Указанная валюта не найдена',
  'account.add.error.startBalance.positive': 'Начальный баланс может быть только отрицательным',
  'account.add.error.startBalance.negative': 'Начальный баланс может быть только положительным',
  'account.add.error.name.exist': 'Счет с таким именем уже существует',

  'account.delete.error._id.required': 'Не указан id счета',
  'account.delete.error._id.invalid': 'Недопустимый id счета',
  'account.delete.error._id.notFound': 'Счет с таким id не найден',

  'operation.add.error.created.required': 'Не указана дата создания',
  'operation.add.error.created.invalid': 'Недопустимая дата создания',
  'operation.add.error.account.required': 'Не указан счет операции',
  'operation.add.error.account.invalid': 'Недопустимый счет',
  'operation.add.error.category.required': 'Не указана категория',
  'operation.add.error.category.invalid': 'Недопустимая категория',
  'operation.add.error.amount.required': 'Не указана сумма',
  'operation.add.error.amount.invalid': 'Недопустимая сумма',
  'operation.add.error.account.notFound': 'Счет не найден',
  'operation.add.error.category.notFound': 'Категория не найдена',

  'operation.delete.error._id.required': 'Не указан id операции',
  'operation.delete.error._id.invalid': 'Недопустимый id операции',
  'operation.delete.error._id.notFound': 'Операция с таким id не найден',

  'operation.update.error._id.required': 'Не указан id операции',
  'operation.update.error._id.invalid': 'Недопустимый id операции',
  'operation.update.error._id.notFound': 'Операция с таким id не найдена',
  'operation.update.error.created.invalid': 'Недопустимая дата создания',
  'operation.update.error.account.invalid': 'Недопустый счет',
  'operation.update.error.account.notFound': 'Счет с таким id не найден',
  'operation.update.error.amount.invalid': 'Недопустимая сумма',
  'operation.update.error.category.invalidType': 'Недопустимый тип категории',
  'operation.update.error.category.notFound': 'Категория не найдена',
  'operation.update.error.category.invalid': 'Недопустимая категория',

  'operation.addTransfer.error.created.required': 'Не указана дата операции',
  'operation.addTransfer.error.created.invalid': 'Недопустимая дата',
  'operation.addTransfer.error.accountFrom.required': 'Не указан начальный счет',
  'operation.addTransfer.error.accountFrom.invalid': 'Недопустимый начальный счет',
  'operation.addTransfer.error.accountFrom.notFound': 'Начальный счет не найден',
  'operation.addTransfer.error.accountTo.required': 'Не указан конечный счет',
  'operation.addTransfer.error.accountTo.invalid': 'Недопустимый конечный счет',
  'operation.addTransfer.error.accountTo.equal': 'Начальный и конечный счет не должны совпадать',
  'operation.addTransfer.error.accountTo.notFound': 'Конечный счет не найден',
  'operation.addTransfer.error.amountFrom.required': 'Не указана начальная сумма',
  'operation.addTransfer.error.amountFrom.invalid': 'Недопустимая начальная сумма',
  'operation.addTransfer.error.amountFrom.positive': 'Начальная сумма должна быть больше 0',
  'operation.addTransfer.error.amountTo.required': 'Не указана конечная сумма',
  'operation.addTransfer.error.amountTo.invalid': 'Недопустимая конечная сумма',
  'operation.addTransfer.error.amountTo.positive': 'Конечная сумма должна быть больше 0',

  'operation.updateTransfer.error._id.required': 'Не указан id операции',
  'operation.updateTransfer.error._id.invalid': 'Недопустимый id операции',
  'operation.updateTransfer.error._id.notFound': 'Операция не найдена',
  'operation.updateTransfer.error.created.invalid': 'Недопустимая дата',
  'operation.updateTransfer.error.accountFrom.invalid': 'Недопустимый начальный счет',
  'operation.updateTransfer.error.accountFrom.notFound': 'Начальный счет не найден',
  'operation.updateTransfer.error.accountTo.invalid': 'Недопустимый конечный счет',
  'operation.updateTransfer.error.accountTo.equal': 'Начальный и конечный счет не должны совпадать',
  'operation.updateTransfer.error.accountTo.notFound': 'Конечный счет не найден',
  'operation.updateTransfer.error.amountFrom.invalid': 'Недопустимая начальная сумма',
  'operation.updateTransfer.error.amountFrom.positive': 'Начальная сумма должна быть больше 0',
  'operation.updateTransfer.error.amountTo.invalid': 'Недопустимая конечная сумма',
  'operation.updateTransfer.error.amountTo.positive': 'Конечная сумма должна быть больше 0',

  'operation.list.error.account.invalid': 'Недопустимый аккаунт',
  'operation.list.error.type.invalid': 'Недопустимый тип операции',
  'operation.list.error.category.invalid': 'Недопустимая категория',
  'operation.list.error.amountFrom.invalid': 'Недопустимая начальная сумма',
  'operation.list.error.amountTo.invalid': 'Недопустимая конечная сумма',
  'operation.list.error.dateFrom.invalid': 'Недопустимая начальная дата',
  'operation.list.error.dateTo.invalid': 'Недопустимая конечная дата',
  'operation.list.error.skip.invalid': 'Недопустимые параметры постраничной навигации',
  'operation.list.error.limit.invalid': 'Недопустимые параметры постраничной навигации',

  'component.appBar.operations': 'Операции',
  'component.appBar.budget': 'Бюджет',
  'component.appBar.reports': 'Отчеты',
  'component.appBar.profile': 'Профиль',
  'component.appBar.exit': 'Выход',
  'component.appBar.manageAccounts': 'Счета',
  'component.appBar.manageCategories': 'Категории',
  'component.appBar.more': 'Еще',

  'component.accountList.accounts': 'Счета',
  'component.accountList.noAccounts': 'У вас пока нет счетов',

  'component.selectInput.notFound': 'Ничего не найдено',

  'component.accountEditForm.infoAlert': 'Выберите счет или создайте новый',
  'component.accountEditForm.name.label': 'Имя счета',
  'component.accountEditForm.name.placeholder': 'Введите имя счета',
  'component.accountEditForm.currencyId.label': 'Выберите валюту счета',
  'component.accountEditForm.startBalance.label': 'Начальный баланс',
  'component.accountEditForm.startBalance.placeholder': '0.00',
  'component.accountEditForm.type.label': 'Это долг или кредит?',
  'component.accountEditForm.processButton': 'Сохранение...',
  'component.accountEditForm.createButton': 'Создать',
  'component.accountEditForm.saveButton': 'Сохранить',
  'component.accountEditForm.deleteProcessButton': 'Удаление...',
  'component.accountEditForm.deleteButton': 'Удалить',
  'component.accountEditForm.deleteModalTitle': 'Удалить счет',
  'component.accountEditForm.deleteModalConfirm': 'Вы уверены что хотите удалить счет {name}?',
  'component.accountEditForm.deleteModalWarning': 'При удалении счета все связанные с ним операции также будут удалены.',
  'component.accountEditForm.deleteModalNotice': 'Вы также можете закрыть счет чтобы скрыть его из списка',
  'component.accountEditForm.deleteModalError': 'При удалении счета произошла ошибка',
  'component.accountEditForm.cancelButton': 'Отмена',

  'component.categoryEditForm.infoAlert': 'Выберите категорию или создайте новую',
  'component.categoryEditForm.isSystemAlert': 'Это системная категория, ее нельзя редактировать или удалять',
  'component.categoryEditForm.name.label': 'Имя категории',
  'component.categoryEditForm.name.placeholder': 'Имя категории',
  'component.categoryEditForm.type.label': 'Тип категории',
  'component.categoryEditForm.parent.label': 'Родительская категория',
  'component.categoryEditForm.saveProcessButton': 'Сохранение...',
  'component.categoryEditForm.createButton': 'Создать',
  'component.categoryEditForm.saveButton': 'Сохранить',
  'component.categoryEditForm.deleteProcessButton': 'Удаление...',
  'component.categoryEditForm.deleteButton': 'Удалить',
  'component.categoryEditForm.deleteModalTitle': 'Удалить категорию',
  'component.categoryEditForm.deleteModalConfirm': 'Вы уверены что хотите удалить категорию {name}?',
  'component.categoryEditForm.deleteModalWarning': 'При удалении категории все операции связанные с ней будут перемещены в "Без категории"',
  'component.categoryEditForm.deleteModalError': 'При удалении категории произошла ошибка',
  'component.categoryEditForm.cancelButton': 'Отмена',
  'component.categoryEditForm.expense': 'Расход',
  'component.categoryEditForm.income': 'Доход',
  'component.categoryEditForm.any': 'Любая',

  'component.operationEditForm.expense': 'Расход',
  'component.operationEditForm.transfer': 'Перевод',
  'component.operationEditForm.income': 'Доход',
  'component.operationEditForm.saveProcessButton': 'Сохранение...',
  'component.operationEditForm.createButton': 'Добавить',
  'component.operationEditForm.saveButton': 'Сохранить',
  'component.operationEditForm.addOperationHeader': 'Добавить новую операцию',
  'component.operationEditForm.editOperationHeader': 'Редактировать операцию',
  'component.operationEditForm.category.placeholder': 'Выбрать категорию',
  'component.operationEditForm.category.label': 'Категория',
  'component.operationEditForm.account.placeholder': 'Выбрать счет',
  'component.operationEditForm.account.label': 'Счет',
  'component.operationEditForm.amount.label': 'Сумма',
  'component.operationEditForm.amountFrom.label': 'Сумма списания',
  'component.operationEditForm.amountTo.label': 'Сумма поступления',
  'component.operationEditForm.accountFrom.label': 'Счет списания',
  'component.operationEditForm.accountFrom.placeholder': 'Выбрать счет',
  'component.operationEditForm.accountTo.label': 'Счет поступления',
  'component.operationEditForm.accountTo.placeholder': 'Выбрать счет',
  'component.operationEditForm.deleteButton': 'Удалить',
  'component.operationEditForm.cancelButton': 'Отмена',
  'component.operationEditForm.todayButton': 'Сегодня',

  'components.operationList.noOperations': 'Вы еще не добавили ни одной операции',

  'component.operationListItem.loading': 'Загрузка...',
  'component.operationListItem.remove': 'Удалить',
  'component.operationListItem.edit': 'Редактировать',

  'component.categoriesTree.expense': 'расход',
  'component.categoriesTree.income': 'доход',
  'component.categoriesTree.any': 'любая',

  'container.accounts.manageAccounts': 'Управление счетами',
  'container.accounts.createAccount': 'Создать новый счет',

  'container.logout.done': 'Выход успешно выполнен',
  'container.logout.process': 'Выход...',

  'container.dashboard.loading': 'Загрузка, подождите еще не много...',

  'component.linkedAccountList.noAccounts': 'У вас пока нет счетов',

  'container.categories.manageCategories': 'Управление категориями',
  'container.categories.createCategory': 'Создать категорию',

  'container.operations.noAccounts': 'Для добавление операций необходимо создать счет',
  'container.operations.removeOperationModalTitle': 'Удаление операции',
  'container.operations.removeOperationModalInfo': 'Вы уверены что хотите удалить операцию?',
  'container.operations.removeOperationModalError': 'Ошибка при удалении операции',
  'container.operations.removeOperationModalCancelButton': 'Отмена',
  'container.operations.removeOperationModalConfirmButton': 'Удалить',
  'container.operations.removeOperationModalProcessButton': 'Удаление...',
};
