import { Icon, useColorModeValue } from '@chakra-ui/react';
import { IconProp } from './icons.props';

const RightLine = ({ ...props }: IconProp) => {
    return (
        <Icon
            width='142'
            height='21'
            viewBox='0 0 142 21'
            fill={useColorModeValue('gray.700', 'gray.200')}
            {...props}
            xmlns='http://www.w3.org/2000/svg'
        >
            {' '}
            <path d='M141.426 16.4065C141.926 16.1712 142.14 15.5753 141.905 15.0757L138.069 6.93391C137.834 6.43429 137.238 6.22007 136.738 6.45543C136.239 6.6908 136.025 7.28662 136.26 7.78624L139.669 15.0234L132.432 18.4327C131.932 18.6681 131.718 19.2639 131.954 19.7635C132.189 20.2632 132.785 20.4774 133.284 20.242L141.426 16.4065ZM1.32875 16.4463C1.80655 16.28 2.28247 16.1151 2.75656 15.9517L2.10479 14.0609C1.62876 14.225 1.15092 14.3905 0.671246 14.5575L1.32875 16.4463ZM5.57929 14.9886C6.53305 14.6666 7.47939 14.3506 8.41857 14.0407L7.79185 12.1414C6.8482 12.4528 5.89751 12.7702 4.93954 13.0937L5.57929 14.9886ZM11.2433 13.12C12.204 12.8108 13.1571 12.5081 14.1032 12.2119L13.5056 10.3033C12.5544 10.6011 11.5961 10.9054 10.6306 11.2161L11.2433 13.12ZM16.9439 11.3357C17.9067 11.0432 18.8622 10.7576 19.8107 10.479L19.247 8.56011C18.2925 8.84049 17.3312 9.12778 16.3626 9.42199L16.9439 11.3357ZM22.6773 9.65211C23.639 9.37988 24.5936 9.11497 25.5414 8.85738L25.0168 6.92739C24.0621 7.18686 23.1008 7.45364 22.1326 7.72773L22.6773 9.65211ZM28.4345 8.08847C29.4027 7.83706 30.3641 7.59349 31.319 7.35777L30.8396 5.41606C29.8768 5.65375 28.9077 5.89929 27.9318 6.15267L28.4345 8.08847ZM34.2147 6.66236C35.192 6.43437 36.1626 6.2148 37.1271 6.00363L36.6994 4.04991C35.7258 4.26306 34.7462 4.48465 33.7603 4.71467L34.2147 6.66236ZM40.0362 5.38852C41.0155 5.18889 41.9888 4.99814 42.9565 4.81625L42.5871 2.85066C41.6091 3.03448 40.6258 3.22719 39.6367 3.42882L40.0362 5.38852ZM45.8919 4.28882C46.8755 4.12036 47.8536 3.96126 48.8269 3.81148L48.5227 1.83475C47.5381 1.98627 46.5488 2.1472 45.5543 2.31752L45.8919 4.28882ZM51.7656 3.38564C52.7557 3.25117 53.7412 3.12652 54.7226 3.01168L54.4902 1.02523C53.4963 1.14153 52.4986 1.26773 51.4964 1.40384L51.7656 3.38564ZM57.6797 2.69419C58.6694 2.59757 59.6555 2.51106 60.6386 2.43464L60.4836 0.440655C59.4873 0.518103 58.488 0.605768 57.4854 0.703656L57.6797 2.69419ZM63.6042 2.23424C64.5967 2.17731 65.5868 2.13077 66.5749 2.0946L66.5018 0.0959389C65.4997 0.132616 64.4959 0.179806 63.4897 0.237519L63.6042 2.23424ZM69.5452 2.01702C70.5365 2.00156 71.5266 1.99659 72.5161 2.00209L72.5272 0.00211763C71.5236 -0.00346196 70.5194 0.00158417 69.514 0.0172675L69.5452 2.01702ZM75.4878 2.05013C76.4773 2.07662 77.4668 2.11359 78.4569 2.16103L78.5526 0.163319C77.5484 0.115211 76.5449 0.0777159 75.5413 0.0508469L75.4878 2.05013ZM81.4232 2.33428C82.4099 2.40223 83.3978 2.48053 84.3877 2.56917L84.5661 0.57714C83.5627 0.487288 82.5611 0.407905 81.5606 0.339004L81.4232 2.33428ZM87.346 2.86418C88.3265 2.97187 89.3095 3.08962 90.2955 3.21742L90.5526 1.23401C89.5538 1.10456 88.5579 0.985264 87.5643 0.876132L87.346 2.86418ZM93.2411 3.62766C94.2186 3.77316 95.1996 3.92839 96.1846 4.09336L96.515 2.12083C95.5182 1.95389 94.5252 1.79676 93.5356 1.64946L93.2411 3.62766ZM99.1105 4.60969C100.079 4.7892 101.052 4.97796 102.03 5.17596L102.427 3.21575C101.438 3.0156 100.455 2.82474 99.475 2.64318L99.1105 4.60969ZM104.947 5.79093C105.91 6.00174 106.878 6.22133 107.852 6.4497L108.309 4.50254C107.326 4.27196 106.348 4.05018 105.375 3.8372L104.947 5.79093ZM110.742 7.14894C111.699 7.38773 112.663 7.6348 113.633 7.89016L114.142 5.9561C113.164 5.69856 112.192 5.4493 111.225 5.20834L110.742 7.14894ZM116.512 8.66748C117.459 8.92957 118.413 9.19937 119.374 9.47687L119.929 7.55546C118.961 7.27589 118 7.00401 117.045 6.73983L116.512 8.66748ZM122.243 10.3226C123.185 10.606 124.134 10.8966 125.09 11.1944L125.685 9.28487C124.723 8.98516 123.768 8.69264 122.818 8.40732L122.243 10.3226ZM127.932 12.0941C128.875 12.3976 129.825 12.7078 130.782 13.0249L131.411 11.1263C130.449 10.8075 129.493 10.4954 128.544 10.1902L127.932 12.0941ZM133.597 13.9698C134.534 14.2884 135.478 14.6133 136.429 14.9446L137.087 13.0559C136.132 12.723 135.183 12.3965 134.241 12.0763L133.597 13.9698ZM139.24 15.9344C139.712 16.1024 140.186 16.2719 140.662 16.4429L141.338 14.5609C140.861 14.3891 140.385 14.2189 139.911 14.0502L139.24 15.9344Z' />{' '}
        </Icon>
    );
};
export default RightLine;