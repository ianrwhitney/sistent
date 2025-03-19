import { DEFAULT_HEIGHT, DEFAULT_WIDTH } from '../../constants/constants';
import { IconProps } from '../types';

export const KubernetesIcon = ({
  width = DEFAULT_WIDTH,
  height = DEFAULT_HEIGHT,
  ...props
}: IconProps): JSX.Element => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 26 25"
      {...props}
    >
      <path
        d="M12.9133 0.494304C12.6923 0.505324 12.4758 0.559563 12.2764 0.653838L3.58519 4.76432C3.36024 4.87066 3.16258 5.02538 3.0069 5.217C2.85122 5.40862 2.74152 5.63221 2.68594 5.87116L0.541755 15.1043C0.492243 15.3171 0.486702 15.5374 0.52546 15.7523C0.564218 15.9671 0.646488 16.1722 0.767401 16.3553C0.796719 16.4001 0.828251 16.4434 0.861883 16.4851L6.87761 23.8886C7.03332 24.0802 7.23099 24.2349 7.45595 24.3412C7.6809 24.4474 7.92736 24.5026 8.17701 24.5026L17.8242 24.5004C18.0737 24.5005 18.3201 24.4455 18.5451 24.3395C18.77 24.2334 18.9678 24.0789 19.1236 23.8875L25.1371 16.4829C25.2929 16.2913 25.4027 16.0676 25.4583 15.8285C25.5139 15.5895 25.5139 15.3412 25.4583 15.1021L23.3108 5.86896C23.2552 5.63 23.1455 5.40641 22.9898 5.2148C22.8342 5.02318 22.6365 4.86846 22.4116 4.76212L13.7192 0.653838C13.4684 0.535247 13.1913 0.480391 12.9133 0.494304Z"
        fill={props.fill || '#326CE5'}
      />
      <path
        d="M12.9992 3.63281C12.7119 3.63284 12.479 3.88898 12.479 4.20494C12.479 4.20978 12.48 4.21442 12.4801 4.21924C12.4797 4.26217 12.4776 4.31389 12.479 4.35127C12.4859 4.5335 12.526 4.67298 12.5502 4.84087C12.5939 5.20022 12.6306 5.4981 12.608 5.77497C12.586 5.87938 12.5083 5.97486 12.439 6.04123L12.4268 6.25908C12.1146 6.28468 11.8003 6.33156 11.4864 6.40211C10.1357 6.70567 8.97269 7.39436 8.08727 8.32422C8.02982 8.28542 7.92931 8.21405 7.89942 8.19219C7.80654 8.20461 7.71267 8.23297 7.59041 8.16249C7.35761 8.00737 7.14558 7.79327 6.88902 7.53535C6.77146 7.41198 6.68633 7.2945 6.54666 7.17557C6.51494 7.14857 6.46653 7.11204 6.43106 7.08425C6.32186 6.99808 6.19307 6.95314 6.06869 6.94892C5.90877 6.9435 5.75483 7.00539 5.65408 7.13046C5.47498 7.35281 5.53232 7.69266 5.78191 7.88963C5.78444 7.89162 5.78714 7.89317 5.78969 7.89513C5.82399 7.92265 5.86599 7.95791 5.89751 7.98095C6.04573 8.08926 6.18112 8.14471 6.32879 8.2307C6.63992 8.42088 6.89785 8.57858 7.10243 8.76871C7.18232 8.85301 7.19629 9.00154 7.20692 9.06578L7.37365 9.21321C6.48109 10.5428 6.068 12.1851 6.31212 13.8584L6.09426 13.9211C6.03684 13.9945 5.9557 14.11 5.87083 14.1445C5.60317 14.2279 5.30192 14.2586 4.93824 14.2963C4.7675 14.3104 4.62017 14.302 4.43915 14.3359C4.39931 14.3434 4.3438 14.3577 4.30021 14.3678C4.29869 14.3681 4.29728 14.3686 4.29576 14.3689C4.29339 14.3695 4.29027 14.3706 4.28798 14.3711C3.98137 14.4444 3.7844 14.7234 3.84781 14.9983C3.91123 15.2732 4.21073 15.4403 4.51919 15.3745C4.52141 15.374 4.52465 15.3739 4.52697 15.3734C4.53045 15.3726 4.53351 15.371 4.53697 15.3701C4.57997 15.3608 4.63385 15.3504 4.67147 15.3404C4.84944 15.2933 4.97833 15.224 5.13832 15.1633C5.48253 15.0411 5.76761 14.939 6.04535 14.8992C6.16135 14.8902 6.28356 14.9701 6.34436 15.0038L6.57111 14.9652C7.09293 16.5666 8.18648 17.8609 9.57119 18.673L9.47671 18.8975C9.51077 18.9846 9.54833 19.1026 9.52296 19.1886C9.42199 19.4478 9.24904 19.7214 9.0521 20.0263C8.95674 20.1672 8.85915 20.2766 8.7731 20.4378C8.75251 20.4764 8.72628 20.5357 8.70641 20.5765C8.5727 20.8596 8.67078 21.1857 8.9276 21.3081C9.18604 21.4313 9.50684 21.3014 9.64567 21.0176C9.64588 21.0172 9.64658 21.0169 9.64678 21.0165C9.64692 21.0162 9.64663 21.0158 9.64678 21.0154C9.66655 20.9752 9.69457 20.9223 9.71125 20.8845C9.78495 20.7174 9.80948 20.5742 9.86131 20.4125C9.99895 20.0703 10.0746 19.7112 10.264 19.4875C10.3159 19.4262 10.4005 19.4026 10.4882 19.3794L10.606 19.1682C11.8132 19.6268 13.1645 19.7499 14.5143 19.4465C14.8222 19.3773 15.1195 19.2877 15.4068 19.1803C15.44 19.2384 15.5015 19.3502 15.518 19.3783C15.6071 19.407 15.7044 19.4218 15.7837 19.5378C15.9254 19.7776 16.0224 20.0612 16.1405 20.4037C16.1923 20.5654 16.2179 20.7086 16.2916 20.8757C16.3084 20.9138 16.3363 20.9674 16.3561 21.0077C16.4946 21.2924 16.8165 21.4227 17.0753 21.2993C17.3321 21.1769 17.4303 20.8508 17.2965 20.5677C17.2766 20.5269 17.2493 20.4676 17.2287 20.429C17.1426 20.2678 17.045 20.1595 16.9497 20.0186C16.7527 19.7137 16.5894 19.4603 16.4884 19.2012C16.4462 19.0675 16.4955 18.9844 16.5284 18.8975C16.5087 18.8751 16.4666 18.7489 16.4417 18.6895C17.8808 17.8485 18.9422 16.5059 19.4407 14.9553C19.508 14.9658 19.625 14.9863 19.663 14.9939C19.7412 14.9428 19.8132 14.8761 19.9542 14.8871C20.2319 14.9269 20.517 15.029 20.8612 15.1512C21.0212 15.2119 21.1501 15.2823 21.3281 15.3294C21.3657 15.3394 21.4196 15.3487 21.4626 15.358C21.466 15.3589 21.4691 15.3605 21.4726 15.3613C21.4749 15.3618 21.4781 15.3619 21.4804 15.3624C21.7888 15.4282 22.0884 15.2611 22.1517 14.9862C22.2151 14.7113 22.0182 14.4323 21.7116 14.359C21.667 14.349 21.6037 14.3319 21.5604 14.3238C21.3794 14.2899 21.2321 14.2982 21.0613 14.2842C20.6976 14.2465 20.3964 14.2158 20.1287 14.1324C20.0196 14.0905 19.9419 13.9619 19.9042 13.909L19.6941 13.8485C19.803 13.0685 19.7737 12.2567 19.5852 11.4445C19.3949 10.6247 19.0587 9.87491 18.6103 9.21431C18.6642 9.16582 18.766 9.07662 18.7949 9.05038C18.8033 8.95799 18.796 8.86112 18.8927 8.75881C19.0972 8.56867 19.3552 8.411 19.6663 8.2208C19.814 8.1348 19.9505 8.07937 20.0987 7.97105C20.1322 7.94655 20.178 7.90776 20.2132 7.87973C20.4627 7.68269 20.5202 7.34287 20.341 7.12056C20.1619 6.89826 19.8147 6.87732 19.5652 7.07435C19.5296 7.1022 19.4814 7.13852 19.4496 7.16567C19.3099 7.2846 19.2236 7.40207 19.1061 7.52545C18.8495 7.78338 18.6375 7.99856 18.4047 8.15368C18.3038 8.21181 18.1561 8.1917 18.089 8.18779L17.8912 8.32752C16.7629 7.1565 15.2268 6.40781 13.5728 6.26238C13.5682 6.19377 13.5621 6.06975 13.5606 6.03243C13.4928 5.96829 13.411 5.91354 13.3905 5.77497C13.3679 5.4981 13.4056 5.20022 13.4494 4.84087C13.4736 4.67298 13.5137 4.5335 13.5205 4.35127C13.5221 4.30984 13.5196 4.24973 13.5194 4.20494C13.5194 3.88898 13.2865 3.63278 12.9992 3.63281H12.9992ZM12.3479 7.62667L12.1933 10.3277L12.1822 10.3333C12.1719 10.5749 11.971 10.7678 11.7243 10.7678C11.6232 10.7678 11.53 10.7357 11.4542 10.6809L11.4497 10.6831L9.21216 9.11309C9.89986 8.44375 10.7795 7.94911 11.7932 7.72129C11.9784 7.67967 12.1635 7.64879 12.3479 7.62667ZM13.6517 7.62667C14.8352 7.77075 15.9298 8.30121 16.7685 9.11419L14.5454 10.6743L14.5376 10.671C14.3403 10.8137 14.0623 10.7783 13.9085 10.5874C13.8455 10.5092 13.8124 10.4173 13.8084 10.3245L13.8062 10.3234L13.6517 7.62667ZM8.40073 10.122L10.4438 11.9308L10.4415 11.9418C10.6259 12.1005 10.6531 12.3758 10.4993 12.5667C10.4363 12.6449 10.352 12.6974 10.2615 12.7219L10.2592 12.7307L7.64043 13.4788C7.50714 12.2724 7.79439 11.0997 8.40073 10.122ZM17.5833 10.1231C17.8868 10.6101 18.1167 11.1541 18.2535 11.7438C18.3887 12.3264 18.4227 12.908 18.3669 13.47L15.7348 12.7197L15.7325 12.7087C15.4968 12.6449 15.352 12.4076 15.4068 12.1695C15.4293 12.072 15.4816 11.9895 15.5525 11.9286L15.5514 11.9231L17.5833 10.1231H17.5833ZM12.5802 12.0705H13.4172L13.9374 12.7142L13.7506 13.5173L12.9992 13.8749L12.2456 13.5162L12.0589 12.7131L12.5802 12.0705ZM15.2635 14.2732C15.299 14.2714 15.3344 14.2746 15.3691 14.2809L15.3735 14.2754L18.0824 14.7287C17.6859 15.8312 16.9273 16.7862 15.9137 17.4254L14.8622 14.9113L14.8655 14.9069C14.7689 14.6848 14.8656 14.4243 15.0878 14.3183C15.1447 14.2912 15.2042 14.2762 15.2635 14.2732H15.2635ZM10.7139 14.2842C10.9206 14.2871 11.106 14.4291 11.154 14.6374C11.1765 14.7349 11.1656 14.8315 11.1285 14.9168L11.1363 14.9267L10.0958 17.4155C9.12312 16.7976 8.34833 15.8725 7.93388 14.7375L10.6194 14.2864L10.6238 14.2919C10.6539 14.2864 10.6843 14.2838 10.7139 14.2842V14.2842ZM12.9826 15.3745C13.0546 15.3719 13.1276 15.3865 13.1971 15.4196C13.2881 15.463 13.3585 15.5314 13.4027 15.6133H13.4127L14.7366 17.981C14.5648 18.038 14.3881 18.0867 14.2075 18.1273C13.195 18.3549 12.1858 18.2859 11.2719 17.9777L12.5924 15.6144H12.5946C12.6739 15.4678 12.8241 15.3803 12.9826 15.3745Z"
        fill="white"
        stroke="white"
        strokeWidth="0.25"
      />
    </svg>
  );
};

export default KubernetesIcon;
