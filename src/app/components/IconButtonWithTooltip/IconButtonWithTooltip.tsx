import { IconButton, Tooltip } from "@mui/material"

interface Props {
    icon: React.ReactElement,
    label: string,
}
export const IconButtonWithTooltip = ({ icon, label }: Props) => {
    return(
        <Tooltip title={label} placement="top">
            <IconButton className="text-icon hover:text-primary hover:bg-iconButtonHover">
                {icon}
            </IconButton>
        </Tooltip>
    )
}
