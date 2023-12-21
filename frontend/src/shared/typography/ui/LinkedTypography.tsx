import React from "react";
import { useTheme } from '@mui/material/styles';

import {Link} from "@mui/material";

import {VariantType} from "../types";

interface ILinkedTypography {
    variant?: VariantType;
    children?: React.ReactNode;
    href: string;
    disabled?: boolean;
    sx?: {[x: string]: string};
    [x: string]: any;
}

export const LinkedTypography = ({variant, href, sx, disabled = false, children, ...props}: ILinkedTypography) => {
    const {palette} = useTheme()

    return (
        <Link
            href={disabled ? '#' : href}
            variant={variant}
            underline={disabled ? 'none' : 'hover'}
            sx={{
                color: disabled ? palette.grey[500] : palette.primary.main,
                cursor: disabled ? 'default' : 'hover',
                ...sx
            }}
            {...props}
        >
            {children}
        </Link>
    );
}