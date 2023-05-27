declare module '*.css'
declare module '*.scss'
declare module '*.png'
declare module '*.gif'
declare module '*.jpg'
declare module '*.jpeg'
declare module '*.svg' {
  import { ReactElement, SVGProps } from 'react'
  const content: (props: SVGProps<SVGElement>) => ReactElement
  export default content
}
