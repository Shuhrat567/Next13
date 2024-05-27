import {Box, Button, Container, HStack, Icon, Text, useColorModeValue} from "@chakra-ui/react";
import {navigation} from "@/config/constants";
import Link from "next/link";
import {useRouter} from "next/router";
import {SidebarProps} from "@/layouts/sidebar/sidebar.props";

function Sidebar({toggle}:SidebarProps):JSX.Element {
    const router = useRouter();

    return (
        <Box w={{base:'full', lg:'300px'}}
             zIndex={99}
             h={'90vh'}
             bg={useColorModeValue('gray.50', 'gray.900')}
             color={useColorModeValue('gray.700', 'gray.200')}
             borderRight={'2px'}
             borderRightColor={useColorModeValue("#A2CDFF", "#A2CDFF")}
             pos={'fixed'}
             left={{base:toggle ? 0: '-100%' ,lg:'0'}}
             top={'10vh'}
             overflowY={'scroll'}
             css={{
                 '&::-webkit-scrollbar': { width: '1px' },
                 '&::-webkit-scrollbar-track': { width: '1px' },
                 '&::-webkit-scrollbar-thumb': { background: 'transparent' },
             }}
             transition={"all 0.4s ease"}
        >
            <Container maxW={'container.xl'}>
                {navigation.map((item,idx) => (
                    <Box key={idx} mt={10}>
                        <Text>{item.title}</Text>
                        {item.links.map((nav,idx) =>{
                            const active = router.asPath == nav.route;
                            return(
                                <Link href={`/${nav.route}`} key={idx}>
                                    <Button colorScheme={'messenger'} variant={active ? 'solid' : 'outline'} w={'full'} justifyContent={'flex-start'} h={14} mt={2}>
                                        <HStack>
                                            <Icon as={nav.icon}/>
                                            <Text>{nav.label}</Text>
                                        </HStack>
                                    </Button>
                                </Link>
                            );
                        })}
                    </Box>
                ))}
            </Container>
        </Box>
    );
}

export default Sidebar;


