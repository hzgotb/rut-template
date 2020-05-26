declare module '*.css';
declare module '*.less';
declare module '*.scss';
declare module '*.png';
declare module '*.svg' {
  export function ReactComponent(props: React.SVGProps<SVGSVGElement>): React.ReactElement
  const url: string;
  export default url;
}
// declare module '*.module.css' {
//   const classes: { [key: string]: string };
//   export default classes;
// }

// declare module '*.module.scss' {
//   const classes: { [key: string]: string };
//   export default classes;
// }

// declare module '*.module.sass' {
//   const classes: { [key: string]: string };
//   export default classes;
// }

// declare module '*.module.less' {
//   const classes: { [key: string]: string };
//   export default classes;
// }

declare type PromiseThenArg<T> = T extends PromiseLike<infer U> ? U : any;
declare type AsyncFunctionTheArg<T extends () => unknown> = PromiseThenArg<ReturnType<T>>;
