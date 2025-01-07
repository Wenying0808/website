import { IconButton, Tooltip } from "@mui/material"

interface Props {
    icon: React.ReactElement,
    label?: string,
    onClick?: () => void,
}
export const IconButtonWithTooltip = ({ icon, label, onClick }: Props) => {
    return(
        <Tooltip title={label} placement="top">
            <IconButton className="text-icon-light dark:text-icon-dark hover:text-primary-light dark:hover:text-icon-dark hover:bg-iconButtonHover-light dark:hover:bg-iconButtonHover-dark" onClick={onClick}>
                {icon}
            </IconButton>
        </Tooltip>
    )
}
