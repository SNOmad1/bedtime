import { h } from 'preact'
import { useContext } from 'preact/hooks'
import IconShare from '../../assets/img/iconShare.svg'
import Button from './Button'

import { share } from '../../util/shareUtil'
import { ToastContext } from '../toast/ToastContext'
import styles from './ShareButton.module.css'

// TODO: Proptypes
// interface ShareButtonProps {
//   url: string
//   title: string
//   creator: string
// }

const messages = {
  toast: 'Link Copied To Clipboard'
}

const ShareButton = ({
  url,
  title,
  creator
}) => {

  const { toast } = useContext(ToastContext)

  const onShare = () => {
    // Only toast if not-mobile
    if (!navigator.share) {
      console.log('tryna toast')
      toast(messages.toast)
    }
    share(url, title, creator)
    console.log(url)
  }


  return (
    <Button
      icon={<IconShare/>}
      onClick={onShare}
      className={styles.container}
    />
  )
}

export default ShareButton
