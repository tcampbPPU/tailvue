declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  const component: DefineComponent<PropsOrPropOptions, RawBindings, any>
  export default component
}
