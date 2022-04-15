import { Button } from '.'
import { ComponentStory, ComponentMeta } from '@storybook/react'

export default {
  title: 'Component/Button',
  component: Button,
} as ComponentMeta<typeof Button>
const Template: ComponentStory<typeof Button> = arguments_ => (
  <Button {...arguments_} />
)

export const Default = Template.bind({})

Default.args = {
  children: 'Button',
  variant: 'contained',
}
