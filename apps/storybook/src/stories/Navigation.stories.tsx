import {
  Button,
  NavigationAside,
  NavigationBar,
  navigationBarCss,
  NavigationItem,
  NavigationLogo,
  NavigationMenu,
} from '@repo/ui';
import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'UI/Navigation',
  component: NavigationBar,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    children: {
      control: false,
    },

    color: {
      control: 'select',
    },

    size: {
      control: 'select',
      options: Object.keys(navigationBarCss.navigationBar.classNames.variants.size),
    },
  },
  args: {},
} satisfies Meta<typeof NavigationBar>;

export default meta;

type Story = StoryObj<typeof meta>;

export const NavigationStory: Story = {
  args: {
    children: (
      <>
        <NavigationLogo>asd</NavigationLogo>
        <NavigationMenu>
          <NavigationItem>
            <Button color="secondary">메뉴1</Button>
          </NavigationItem>
          <NavigationItem>
            <Button color="secondary">메뉴2</Button>
          </NavigationItem>
        </NavigationMenu>
        <NavigationAside>
          <NavigationItem>
            <Button>로그인</Button>
          </NavigationItem>
          <NavigationItem>
            <Button color="secondary">회원가입</Button>
          </NavigationItem>
        </NavigationAside>
      </>
    ),
  },
  name: 'Navigation',
};
