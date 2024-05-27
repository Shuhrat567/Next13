import { Icon, useColorModeValue } from '@chakra-ui/react';
import { IconProp } from './icons.props';

const OnlineCourse = ({ ...props }: IconProp) => {
    return (
        <Icon
            width='50'
            height='50'
            viewBox='0 0 50 50'
            fill={useColorModeValue('gray.700', 'gray.200')}
            {...props}
            xmlns='http://www.w3.org/2000/svg'
        >
            <g clipPath='url(#clip0_200_7212)'>
                <path d='M48.5348 6.61884H40.6819L25.4633 1.54587C25.1555 1.44331 24.8223 1.44575 24.516 1.5529L10.0421 6.61884H1.46519C0.656013 6.61884 0 7.27485 0 8.08402V41.1806C0 41.9898 0.656013 42.6458 1.46519 42.6458H14.7092V45.599H10.2907C9.48152 45.599 8.82551 46.255 8.82551 47.0642C8.82551 47.8733 9.48152 48.5293 10.2907 48.5293H39.7093C40.5185 48.5293 41.1745 47.8733 41.1745 47.0642C41.1745 46.255 40.5185 45.599 39.7093 45.599H35.2908V42.6457H48.5348C49.344 42.6457 50 41.9897 50 41.1806V8.08402C50 7.27475 49.3441 6.61884 48.5348 6.61884ZM16.9044 11.9512C24.7527 14.7045 24.644 14.6976 25 14.6976C25.3392 14.6976 25.2307 14.7045 33.0957 12.0783V15.9034L25 19.0174L16.9044 15.9034V11.9512ZM25.0115 4.48416L35.8114 8.08412L25.0115 11.6841L14.7259 8.08412L25.0115 4.48416ZM32.3603 45.599H17.6396V42.6457H32.3604V45.599H32.3603ZM47.0696 39.7154C40.612 39.7154 12.6863 39.7154 2.93037 39.7154V9.54921H10.0411L13.974 10.9257V16.9097C13.974 17.5159 14.3473 18.0596 14.9132 18.2772C24.6904 22.0472 24.6111 22.0525 25 22.0525C25.3887 22.0525 25.3138 22.0555 35.0868 18.2772C35.6527 18.0596 36.026 17.5159 36.026 16.9097V11.1015L38.9798 10.1169V18.3808C38.9798 19.1899 39.6359 19.846 40.445 19.846C41.2542 19.846 41.9102 19.1899 41.9102 18.3808V9.54921H47.0696V39.7154Z' />
                <path d='M13.2317 26.4768H7.348C6.53883 26.4768 5.88281 27.1328 5.88281 27.942V33.8257C5.88281 34.6349 6.53883 35.2909 7.348 35.2909H13.2317C14.0409 35.2909 14.6969 34.6349 14.6969 33.8257V27.942C14.6969 27.1328 14.0409 26.4768 13.2317 26.4768ZM11.7665 32.3605H8.81319V29.4072H11.7665V32.3605Z' />
                <path d='M19.1156 26.4768C18.3064 26.4768 17.6504 27.1328 17.6504 27.942C17.6504 28.7512 18.3064 29.4072 19.1156 29.4072H42.6505C43.4597 29.4072 44.1157 28.7512 44.1157 27.942C44.1157 27.1328 43.4597 26.4768 42.6505 26.4768H19.1156Z' />
                <path d='M42.6505 32.3604H19.1156C18.3064 32.3604 17.6504 33.0164 17.6504 33.8255C17.6504 34.6347 18.3064 35.2907 19.1156 35.2907H42.6505C43.4597 35.2907 44.1157 34.6347 44.1157 33.8255C44.1157 33.0164 43.4597 32.3604 42.6505 32.3604Z' />
            </g>
            <defs>
                <clipPath id='clip0_200_7212'>
                    <rect width='50' height='50' fill='white' />
                </clipPath>
            </defs>
        </Icon>
    );
};

export default OnlineCourse;