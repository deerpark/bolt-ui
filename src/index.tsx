import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import { Button } from './components/Button'
import { Nav, NavRoutes } from './components/Nav'
import { Notice as NoticeIcon, News as NewsIcon } from './components/Icon'
import reportWebVitals from './reportWebVitals'

const routes: NavRoutes[] = [
  {
    title: '홈',
    display: true,
    children: [
      {
        pathname: '/',
        title: '메뉴 1',
        display: true,
        desc: '',
      },
      {
        pathname: '/',
        title: '메뉴 2',
        display: true,
        desc: '설명',
      },
    ],
  },
  {
    title: '블로그',
    display: true,
    children: [
      {
        pathname: '/notices',
        title: '공지사항',
        id: '116676845',
        display: true,
        desc: '알려드립니다.',
        Icon: NoticeIcon,
      },
      {
        pathname: '/news',
        title: '새소식',
        id: '116679079',
        display: false,
        desc: '새로운 소식',
        Icon: NewsIcon,
      },
    ],
  },
  {
    title: '숨겨진 메뉴',
    display: false,
    children: [
      {
        pathname: '/',
        title: '테스트',
        display: true,
        desc: '',
      },
    ],
  },
]

ReactDOM.render(
  <React.StrictMode>
    <>
      <Button size='small'>Button</Button>
      <Button size='default'>Button</Button>
      <Button size='large'>Button</Button>
    </>
    <div style={{ maxWidth: 300 }}>
      <Nav {...{ routes }} pathname='/notices' />
    </div>
  </React.StrictMode>,
  document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
