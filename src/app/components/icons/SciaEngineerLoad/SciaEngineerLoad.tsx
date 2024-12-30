interface IconProps{
    size?: number,
    className?: string;
}
export const SciaEngineerLoadIcon: React.FC<IconProps> = ({ size = 24, className = ""}) => {
    return(
        <svg 
            width={size} 
            height={size}  
            viewBox={`0 0 ${size} ${size}`}
            fill="none" 
            xmlns="http://www.w3.org/2000/svg" 
            className={className}
        >
            <path d="M11.6616 5.95035L10.5604 1.84065L9.31669 3.08436L7.23233 1L6.71124 1.52109L8.7956 3.60545L7.55189 4.84916L11.6616 5.95035Z" fill="currentColor"/>
            <path fillRule="evenodd" clipRule="evenodd" d="M6.2614 11.946L11.7874 6.48478V6.41902H22.8414V17.2827L22.867 17.3079L22.8414 17.3339V17.473H22.7045L17.34 22.927L17.3144 22.9018V23H6.26042V11.946H7.36582L6.2614 11.946ZM17.3144 17.473H21.154L17.3144 21.3766V17.473ZM21.736 7.52442H21.7104L17.2888 11.946L16.209 11.946H17.3144V16.3676H21.736V7.52442ZM16.209 17.473V21.8946H8.22262L12.5717 17.473H16.209ZM11.7874 16.694L7.36582 21.1893V13.0514H11.7874V16.694ZM12.8928 16.3676V13.0514H16.209V16.3676H12.8928Z" fill="currentColor"/>
            <path d="M21.4302 1.84065L22.5313 5.95035L18.4216 4.84916L19.6654 3.60545L17.581 1.52109L18.1021 1L20.1864 3.08436L21.4302 1.84065Z" fill="currentColor"/>
            <path d="M5.95035 11.2931L4.84916 7.18337L3.60545 8.42709L1.52109 6.34273L1 6.86382L3.08436 8.94817L1.84065 10.1919L5.95035 11.2931Z" fill="currentColor"/>
        </svg>
    )
}