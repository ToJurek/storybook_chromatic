import {SimpleForm} from "./index";

export default {
    title: 'Simple Form',
    component: SimpleForm,
    argTypes: {


    handleClick: {
        action: 'clicked',
    }
}
}
export const Basic = () => (
   <SimpleForm  />
)