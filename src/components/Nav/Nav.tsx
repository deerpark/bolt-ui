import { ArrowRight as IconArrowRight } from '../Icon'

export type NavRoute = {
  pathname?: string,
  title: string,
  id?: string,
  display?: boolean,
  desc?: string,
  Icon?: JSX.Element | (() => JSX.Element),
}

export type NavRoutes = {
  title: string,
  display?: boolean,
  children: NavRoute[],
}

type NavProps = {
  routes?: NavRoutes[],
  pathname?: string,
}

export function Nav({ routes, pathname }: NavProps) {
  return (
    <ul className='bx-nav'>
      {routes ? (
        routes
          .filter((route: NavRoutes) => route.display)
          .map((routeItem: NavRoutes) => {
            return (
              <li key={routeItem.title}>
                <h3 className='bx-nav-category'>{routeItem.title}</h3>
                {routeItem?.children && (
                  <ul className='bx-nav-children'>
                    {routeItem.children
                      .filter(route => route.display)
                      .map(subItem => {
                        return (
                          <li key={subItem.title}>
                            {subItem.pathname ? (
                              <a
                                className={`bx-nav-item ${
                                  pathname &&
                                  pathname !== '/' &&
                                  subItem.pathname !== '/' &&
                                  pathname.indexOf(subItem.pathname) !== -1
                                    ? 'bx-nav-item-active'
                                    : ''
                                }`}
                                href={subItem.pathname}
                              >
                                {subItem?.Icon && (
                                  <span className='bx-nav-icon'>
                                    {typeof subItem.Icon === 'function' && <subItem.Icon />}
                                  </span>
                                )}
                                <span className='bx-nav-label'>
                                  <span className='bx-nav-name'>{subItem.title}</span>
                                  {subItem?.desc && <span className='bx-nav-desc'>{subItem.desc}</span>}
                                </span>
                                <span className='bx-nav-arrow'>
                                  <IconArrowRight />
                                </span>
                              </a>
                            ) : (
                              <span className='bx-nav-item'>
                                {subItem?.Icon && (
                                  <span className='bx-nav-icon'>
                                    {typeof subItem.Icon === 'function' && <subItem.Icon />}
                                  </span>
                                )}
                                <span className='bx-nav-label'>
                                  <span className='bx-nav-name'>{subItem.title}</span>
                                  {subItem?.desc && <span className='bx-nav-desc'>{subItem.desc}</span>}
                                </span>
                              </span>
                            )}
                          </li>
                        )
                      })}
                  </ul>
                )}
              </li>
            )
          })
      ) : (
        <li>등록된 라우트 목록이 존재하지 않습니다.</li>
      )}
    </ul>
  )
}
