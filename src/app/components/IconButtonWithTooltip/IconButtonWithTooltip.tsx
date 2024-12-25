import { IconButton, Tooltip } from "@mui/material"

interface Props {
    icon: React.ReactElement,
    label: string,
}
export const IconButtonWithTooltip = ({ icon, label }: Props) => {
    return(
        <Tooltip title={label} placement="top">
            <IconButton className="text-icon-light dark:text-icon-dark hover:text-primary-light dark:hover:text-icon-dark hover:bg-iconButtonHover-light dark:hover:bg-iconButtonHover-dark">
                {icon}
            </IconButton>
        </Tooltip>
    )
}
