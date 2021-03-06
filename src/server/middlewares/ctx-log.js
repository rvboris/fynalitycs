import uuid from 'uuid';
import { createLogger } from '../../shared/log';

export default (appInstance) => async (ctx, next) => {
  if (!ctx.session.uuid) {
    ctx.session.uuid = uuid.v4();
  }

  ctx.log = createLogger(`${appInstance}:${ctx.session.uuid}`);

  await next();
};
