import { Icon, useColorModeValue } from '@chakra-ui/react';
import { IconProp } from './icons.props';

const PersonIcons = ({ ...props }: IconProp): JSX.Element => {
    return (
        <Icon width='45' height='46' viewBox='0 0 45 46' fill='#020288' xmlns='http://www.w3.org/2000/svg' {...props}>
            <g clip-path='url(#clip0_200_7182)'>
                <path
                    fill-rule='evenodd'
                    clip-rule='evenodd'
                    d='M9.36523 33.8444C9.75125 40.3795 35.2901 40.3715 35.6665 33.8442C35.6665 31.4858 31.3022 29.5117 25.4535 29.0084L25.1526 32.6193C25.0724 33.5827 24.3615 34.3771 23.3948 34.3771H21.637C20.6703 34.3771 19.9594 33.5829 19.8792 32.6193C19.7789 31.4157 19.6785 30.212 19.5782 29.0083C13.7296 29.5116 9.36523 31.4857 9.36523 33.8444Z'
                    fill='#B2F0FB'
                />
                <path d='M39.4539 27.5429C36.1768 25.8057 31.6771 24.6207 26.7368 24.1888L26.8508 22.8209C27.9047 22.4754 28.6679 21.4825 28.6679 20.3146V13.2834C28.6679 10.9202 27.3286 8.86392 25.3691 7.83376C28.4423 5.23222 26.5922 0.100063 22.5156 0.0999756C18.439 0.100151 16.5889 5.23292 19.6622 7.83385C17.7028 8.86401 16.3633 10.9202 16.3633 13.2835V20.3147C16.3633 21.4825 17.1266 22.4755 18.1805 22.821L18.2944 24.1889C11.2274 24.8468 0.481354 27.5027 0.015625 34.5528C0.616792 42.6785 14.5315 45.1177 22.5155 45.0999C28.4118 45.0998 33.9687 44.0669 38.1628 42.1915C46.5368 38.6244 47.4755 31.702 39.4539 27.5429ZM19.879 4.49447C19.879 3.0406 21.0618 1.85777 22.5157 1.85777C26.0088 1.99031 26.0079 6.99916 22.5157 7.13117C21.0618 7.13117 19.879 5.94835 19.879 4.49447ZM18.1211 20.3147V13.2835C18.3413 7.46375 26.6893 7.4612 26.9102 13.2836C26.9102 13.2835 26.9102 20.3147 26.9102 20.3147C26.9102 20.7994 26.5159 21.1936 26.0313 21.1936C25.5742 21.1936 25.1934 21.5441 25.1555 21.9995L24.2766 32.5463C24.2371 33.0193 23.9216 33.4981 23.3946 33.4981H21.6368C21.1099 33.4981 20.7943 33.0192 20.7548 32.5462L19.8759 21.9994C19.838 21.5439 19.4571 21.1936 19.0001 21.1936C18.5154 21.1936 18.1211 20.7993 18.1211 20.3147ZM37.4452 40.5869C29.662 44.2331 15.3691 44.2332 7.58611 40.5867C3.89219 38.9351 1.7736 36.7358 1.7736 34.553C2.25761 28.8493 12.4702 26.4567 18.4404 25.9407L19.0031 32.6923C19.1248 34.1538 20.2571 35.2559 21.6367 35.2559H23.3945C24.7742 35.2559 25.9064 34.1537 26.0281 32.6923L26.5908 25.9407C31.298 26.3526 35.5578 27.4672 38.6305 29.0961C45.3964 32.6306 44.4244 37.5204 37.4452 40.5869Z' />
            </g>
            <defs>
                <clipPath id='clip0_200_7182'>
                    <rect width='45' height='45' fill='white' transform='translate(0 0.0999756)' />
                </clipPath>
            </defs>
        </Icon>
    );
};
export default PersonIcons;