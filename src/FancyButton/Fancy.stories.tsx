
import {FancyButton} from "./FancyButton";
import {actions} from "@storybook/addon-actions";
export default {
    title: 'Fancy Button',
    component: FancyButton,
    argTypes: {


    handleClick: {
        action: 'clicked',
    }
}
}
export const Basic = () => (
   <FancyButton text="Hover Me" handleClick={() => console.log("Yeah")}  />
)
 const Template = ({text}: {text: string}) => (
    <FancyButton text={text} handleClick={() => console.log("Yeah")} />
)
export const Second = Template.bind({})

// @ts-ignore
Second.args = {
    text: "example"
}