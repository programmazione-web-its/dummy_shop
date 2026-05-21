import classNames from 'classnames'
import { Link } from 'react-router-dom'

export default function Button({ type = 'primary', children, ...rest }) {
  const Tag = rest.to ? Link : 'button'

  return (
    <Tag
      className={classNames(
        ' text-center uppercase font-md cursor-pointer transition-colors',
        {
          'bg-terra text-warm-white hover:bg-terra-light': type === 'primary',
          'bg-forest text-wram-white hover:bg-forest-light': type === 'accent',
          'border border-terra text-terra hover:bg-terra hover:text-warm-white':
            type === 'outlined',
          'w-full': rest.fullWidth,
          'flex items-center justify-center p-0': type === 'icon',
          'px-3 py-1': type !== 'icon',
        },
        rest.classes,
      )}
      {...rest}
    >
      {children}
    </Tag>
  )
}
