interface IconProps{
    size?: number,
    className?: string;
}
export const SciaEngineerStructureIcon: React.FC<IconProps> = ({ size = 24, className = ""}) => {
    return(
        <svg 
            width={size} 
            height={size}  
            viewBox={`0 0 ${size} ${size}`}
            fill="none" 
            xmlns="http://www.w3.org/2000/svg" 
            className={className}
        >
           <path fillRule="evenodd" clipRule="evenodd" d="M1 8.44697L1.03388 8.41253V8.35022H1.09517L8.32489 1L8.35877 1.03333V1.02532H23.0086V2.23813L23.0424 2.27146L23.0086 2.30591V15.4229L23.0424 15.4563L23.0086 15.4907V15.6751H22.8272L15.7176 22.9032L15.6837 22.8699V23H1.03388V8.4803L1 8.44697ZM3.15005 8.35022L8.35877 3.05468V8.35022H3.15005ZM15.6837 20.8486L20.7723 15.6751H15.6837V20.8486ZM9.82375 2.4903H20.7723L15.0085 8.35022H9.82375V2.4903ZM15.6837 9.68511L15.7176 9.71844L21.5436 3.79531V14.2101H15.6837V9.68511ZM14.2187 15.6751V21.535H3.63437L9.39822 15.6751H14.2187ZM8.35877 14.6428L2.49886 20.6003V9.81519H8.35877V14.6428ZM14.2187 14.2101H9.82375V9.81519H14.2187V14.2101Z" fill="currentColor"/>
        </svg>
    )
}