interface IconProps{
    size?: number;
    className?: string;
}
export const FigmaIcon: React.FC<IconProps> = ({ size = 24, className = ""}) => {
    return(
        <svg 
            width={size} 
            height={size} 
            viewBox="0 0 24 24" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
            className={className}
        >
            <path 
                fillRule="evenodd"
                clipRule="evenodd"
                d="M7 5.91875C7 4.86253 7.86091 4 8.92696 4H10.8539V7.8375H8.92696C7.86091 7.8375 7 6.97497 7 5.91875ZM8.92696 2H10.8539H11.8539H11.8539H12.8539H14.7809C16.9462 2 18.7078 3.75267 18.7078 5.91875C18.7078 7.07883 18.2025 8.12033 17.4005 8.83752C18.2025 9.55471 18.7078 10.5962 18.7078 11.7563C18.7078 13.9224 16.9462 15.675 14.7809 15.675C14.0811 15.675 13.4235 15.492 12.8539 15.1711V15.675V17.5936C12.8539 19.7597 11.0923 21.5123 8.92696 21.5123C6.76164 21.5123 5 19.7597 5 17.5936C5 16.4336 5.50524 15.3921 6.30714 14.6749C5.50524 13.9577 5 12.9163 5 11.7563C5 10.5962 5.50529 9.5547 6.30727 8.83752C5.50529 8.12033 5 7.07883 5 5.91875C5 3.75267 6.76164 2 8.92696 2ZM10.8539 11.7469C10.8539 11.75 10.8539 11.7532 10.8539 11.7563C10.8539 11.7594 10.8539 11.7625 10.8539 11.7656V13.6748H8.92696L8.90383 13.6749C7.84849 13.6625 7 12.8048 7 11.7563C7 10.7001 7.86091 9.83753 8.92696 9.83753H10.8539V11.7469ZM12.8539 11.7628C12.8575 12.816 13.717 13.675 14.7809 13.675C15.8469 13.675 16.7078 12.8125 16.7078 11.7563C16.7078 10.7001 15.8469 9.83753 14.7809 9.83753C13.717 9.83753 12.8575 10.6965 12.8539 11.7498V11.7628ZM14.7809 4H12.8539V7.8375H14.7809C15.8469 7.8375 16.7078 6.97497 16.7078 5.91875C16.7078 4.86253 15.8469 4 14.7809 4ZM7 17.5936C7 16.545 7.84849 15.6873 8.90383 15.675L8.92696 15.675H10.8539V17.5936C10.8539 18.6498 9.993 19.5123 8.92696 19.5123C7.86091 19.5123 7 18.6498 7 17.5936Z"
                fill="currentColor"
            />
        </svg>
    )
}