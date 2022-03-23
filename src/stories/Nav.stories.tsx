import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Nav } from '../components/Nav';
import { Notice as NoticeIcon, News as NewsIcon } from '../components/Icon'
import '../../dist/index.css'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Example/Nav',
  component: Nav,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    /* routes: { control: '메뉴' }, */
  },
} as ComponentMeta<typeof Nav>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Nav> = (args) => <Nav {...args} />;

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
  pathname: '/notices',
  routes: [
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
          display: true,
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
};
