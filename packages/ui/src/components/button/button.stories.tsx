import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Button } from './button'

export default {
  title: 'Component/Button',
  component: Button,
} as ComponentMeta<typeof Button>

const Template: ComponentStory<typeof Button> = args => <Button {...args} />

export const Default = Template.bind({})

Default.args = {
  children: 'Button',
  variant: 'contained',
}
