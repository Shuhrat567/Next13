import {LayoutProps} from "@/layouts/layout.props";
import {Box, Container} from "@chakra-ui/react";
import Header from "@/layouts/header/header";
import {FunctionComponent, useState} from "react";
import Sidebar from "@/layouts/sidebar/sidebar";

function Layout({children}: LayoutProps): JSX.Element {
    const [toggle, setToggle] = useState<boolean>(false);
    const onToggle = () => setToggle(prev => !prev);
    return (
        <Box maxW={'full'} overflow={'hidden'}>
            <Header onToggle={onToggle}/>
            <Sidebar toggle={toggle}/>
            <Box mt={'11vh'} pl={{base: 0, lg:'320px'}} transition={"all .4s ease"}>
                <Container maxW={'container.lg'}>
                    {children}
                </Container>
            </Box>
        </Box>
    );
}

export default Layout;

export const withLayout = <T extends Record<string, unknown>>(Component: FunctionComponent<T>) => {
    return function withLayoutComponent(props: T): JSX.Element {
        return (
            <Layout>
                <Component {...props}/>
            </Layout>
        );
    };
};


