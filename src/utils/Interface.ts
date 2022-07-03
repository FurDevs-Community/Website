import { ReactElement } from "react"

export interface SectionProps {
  header?: string
  children: ReactElement | ReactElement[]
  className?: string
  style?: React.CSSProperties
}