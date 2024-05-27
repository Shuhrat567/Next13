import {
    Box,
    Button,
    Flex,
    HStack, Icon,
    IconButton,
    Menu,
    MenuButton,
    MenuItem,
    MenuList,
    useColorMode, useColorModeValue
} from "@chakra-ui/react";
import {EngIcons, LightLogo, RusIcons, UzbIcons} from "@/icons";
import {BsMoonStarsFill} from "react-icons/bs";
import {RiSunFill} from "react-icons/ri";
import {FaUserGraduate} from "react-icons/fa";
import {IoLanguage} from "react-icons/io5";
import {MdOutlineLiveHelp} from "react-icons/md";
import { TiThMenu } from "react-icons/ti";

import {HeaderProps} from "@/layouts/header/header.props";


function Header({onToggle}: HeaderProps) {
    const {toggleColorMode, colorMode} = useColorMode();

    return (
        <Box w={'full'}
             zIndex={99}
             bg={useColorModeValue('gray.50', 'gray.900')}
             color={useColorModeValue('gray.700', 'gray.200')}
             h={'10vh'}
             px={10}
             borderBottom={'1px'}
             borderBottomColor={useColorModeValue("#A2CDFF", "#A2CDFF")}
             pos={'fixed'}
             top={0}
             right={0}
             left={0}
        >
            <Flex h={'full'} justify={'space-between'} align={'center'}>
                <HStack>
                    <Icon as={TiThMenu} fontWeight={'bold'}  onClick={onToggle} w={6} h={6} cursor={"pointer"}></Icon>
                    <LightLogo/>
                </HStack>
                <HStack>
                    <IconButton aria-label={'support'} icon={<MdOutlineLiveHelp/>
                    } colorScheme={'messenger'} variant={'ghost'} fontSize={'2xl'}/>
                    <Menu>
                        <MenuButton as={IconButton} icon={<IoLanguage/>} colorScheme={'messenger'} variant={'ghost'}/>
                        <MenuList>
                            <MenuItem icon={<UzbIcons/>}>Uzb</MenuItem>
                            <MenuItem icon={<EngIcons/>}>Eng</MenuItem>
                            <MenuItem icon={<RusIcons/>}>Rus</MenuItem>
                        </MenuList>
                    </Menu>
                    <IconButton aria-label={'color-mode'}
                                fontSize={'2xl'}
                                icon={colorMode == 'light' ? <BsMoonStarsFill/> : <RiSunFill/>}
                                colorScheme={'messenger'}
                                variant={'ghost'}
                                onClick={toggleColorMode}
                    />
                    <Button rightIcon={<FaUserGraduate/>} fontSize={'18px'} colorScheme={'messenger'} variant={'ghost'}>
                        Login
                    </Button>
                </HStack>
            </Flex>
        </Box>
    );
}

export default Header;
