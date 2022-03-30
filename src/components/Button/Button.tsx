import { ReactElement } from 'react'

type ButtonProps = {
  icon?: ReactElement | Element | string,
  href?: string,
  children?: ReactElement | ReactElement[] | Element | Element[] | string,
  size?: 'small' | 'default' | 'large',
  type?: 'submit' | 'button',
  onClick?: () => void,
  block?: boolean,
  isActive?: boolean,
  className?: string,
}

type ButtonGroupProps = {
  children: ReactElement | ReactElement[] | string,
  className?: string,
}

type Classes = {
  small: string,
  default: string,
  large: string,
  block: string,
}

const classes: Classes = {
  small: 'bx-button-small',
  default: '',
  large: 'bx-button-large',
  block: 'bx-button-block',
}

export default function Button({
  type = 'button',
  size = 'default',
  href,
  onClick,
  icon,
  block = false,
  children,
  className,
  isActive,
}: ButtonProps) {
  return href ? (
    <a key={href} href={href}>
      <button
        type={type}
        className={`bx-button ${className} ${classes[size]} ${block ? classes.block : ''} ${
          isActive ? 'bx-button-active' : ''
        }`}
      >
        <span className={`bx-button-label`}>
          {icon && <span className='bx-button-icon'>{icon}</span>}
          {children && <span className='bx-button-text'>{children}</span>}
        </span>
        <span className='bx-button-background' />
      </button>
    </a>
  ) : onClick ? (
    <button
      type={type}
      className={`bx-button ${className} ${classes[size]} ${block ? classes.block : ''} ${
        isActive ? 'bx-button-active' : ''
      }`}
      onClick={onClick}
    >
      <span className={`bx-button-label`}>
        {icon && <span className='bx-button-icon'>{icon}</span>}
        {children && <span className='bx-button-text'>{children}</span>}
      </span>
      <span className='bx-button-background' />
    </button>
  ) : (
    <button
      type={type}
      className={`bx-button ${className} ${classes[size]} ${block ? classes.block : ''} ${
        isActive ? 'bx-button-active' : ''
      }`}
    >
      <span className={`bx-button-label`}>
        {icon && <span className='bx-button-icon'>{icon}</span>}
        {children && <span className='bx-button-text'>{children}</span>}
      </span>
      <span className='bx-button-background' />
    </button>
  )
}

export function ButtonGroup({ children, className }: ButtonGroupProps) {
  return (
    <div className={`bx-button-group ${className}`}>
      {children}
      <span className='bx-button-background' />
    </div>
  )
}
