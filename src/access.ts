import { InitialState } from './app';
/**
 *
 * https://umijs.org/zh-CN/plugins/plugin-access
 */
export default function access(initialState: InitialState) {
  const { userId, role } = initialState;

  return {
    canReadFoo: true,
    canUpdateFoo: role === 'admin',
    canDeleteFoo: (foo: any) => {
      return foo.ownerId === userId;
    },
  };
}
