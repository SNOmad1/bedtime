import { h } from 'preact'

import styles from './Toast.module.css'

export const Toast = ({
  children,
  text,
  containerClassName,
}) => {
  return (
    <div className={styles.container}>
      {text}
    </div>
  )
}

export default Toast
