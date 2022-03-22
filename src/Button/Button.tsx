import { ReactElement } from 'react'

type ButtonProps = {
  icon?: ReactElement | Element | string,
  href?: string,
  children?: ReactElement | ReactElement[] | Element | Element[] | string,
  size?: 'small' | 'default' | 'large',
  type?: 'submit' | 'button',
  onClick?: () => void,
  block?: boolean,
}

type ButtonGroupProps = {
  children: ReactElement | ReactElement[] | string,
  className?: string,
}

type Size = {
  small: string,
  default: string,
  large: string,
}

type Sizes = {
  minWidth: Size,
  height: Size,
  iconSize: Size,
  fontSize: Size,
  gap: Size,
}

const sizes: Sizes = {
  minWidth: {
    small: 'min-w-[24px]',
    default: 'min-w-[32px]',
    large: 'min-w-[40px]',
  },
  height: {
    small: 'h-6',
    default: 'h-8',
    large: 'h-10',
  },
  iconSize: {
    small: 'w-3 h-3',
    default: 'w-4 h-4',
    large: 'w-6 h-6',
  },
  fontSize: {
    small: 'text-xs',
    default: 'text-sm',
    large: 'text-base',
  },
  gap: {
    small: 'gap-x-1',
    default: 'gap-x-2',
    large: 'gap-x-3',
  },
}

export default function Button({
  type = 'button',
  size = 'default',
  href,
  onClick,
  icon,
  block = false,
  children,
}: ButtonProps) {
  return href ? (
    <a key={href} href={href}>
      <button
        type={type}
        className={`bx-button ${sizes.height[size]} ${sizes.minWidth[size]}} ${block ? 'w-full' : ''}`}
      >
        <span className={`bx-button-label ${sizes.fontSize[size]} ${sizes.gap[size]} ${block ? 'w-full' : ''}`}>
          {icon && <span className={`bx-button-icon ${sizes.iconSize[size]}`}>{icon}</span>}
          {children && <span className='bx-button-text'>{children}</span>}
        </span>
        <span className='bx-button-background'></span>
      </button>
    </a>
  ) : onClick ? (
    <button
      type={type}
      className={`bx-button ${sizes.height[size]} ${sizes.minWidth[size]}} ${block ? 'w-full' : ''}`}
      onClick={onClick}
    >
      <span className={`bx-button-label ${sizes.fontSize[size]} ${sizes.gap[size]} ${block ? 'w-full' : ''}`}>
        {icon && <span className={`bx-button-icon ${sizes.iconSize[size]}`}>{icon}</span>}
        {children && <span className='bx-button-text'>{children}</span>}
      </span>
      <span className='bx-button-background'></span>
    </button>
  ) : (
    <button type={type} className={`bx-button ${sizes.height[size]} ${sizes.minWidth[size]}} ${block ? 'w-full' : ''}`}>
      <span className={`bx-button-label ${sizes.fontSize[size]} ${sizes.gap[size]} ${block ? 'w-full' : ''}`}>
        {icon && <span className={`bx-button-icon ${sizes.iconSize[size]}`}>{icon}</span>}
        {children && <span className='bx-button-text'>{children}</span>}
      </span>
      <span className='bx-button-background'></span>
    </button>
  )
}

export function ButtonGroup({ children, className }: ButtonGroupProps) {
  return (
    <div className={`bx-button-group ${className}`}>
      {children}
      <span className='bx-button-background'></span>
    </div>
  )
}
