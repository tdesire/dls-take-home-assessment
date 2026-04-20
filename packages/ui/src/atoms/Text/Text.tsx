import type { TextProps } from './Text.types'

export const Text = ({ as = "span", children, ...props }: TextProps) => {
  const Component = as;
  return <Component {...props}>{children}</Component>
}