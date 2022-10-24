import Header from "../components/header"
import FormTodos from "../components/form";
import WillProcces from "../components/todoProcces";

export default function Index () {
    return (
        <>
            <Header name="React To do List"/>
            <FormTodos/>
            <WillProcces/>
        </>
    )
}