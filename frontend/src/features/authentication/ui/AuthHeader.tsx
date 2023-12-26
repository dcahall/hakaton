import {Grid, Typography} from "@mui/material";
import {LinkedTypography} from "../../../shared/typography";

interface IAuthenticationHeader {
    topic: string;
    linkTopic: string;
    href: string;
    disabled?: boolean
    withoutHref?: boolean
}

export const AuthHeader = ({topic, linkTopic, href, disabled = false, withoutHref = false}: IAuthenticationHeader) => {
    return (
        <Grid container justifyContent='space-between' alignItems='center' mb='30px'>
            <Grid item>
                <Typography variant='h4' sx={{fontWeight: 600}}>
                    {topic}
                </Typography>
            </Grid>
            {
                !withoutHref &&
                <Grid item>
                    <LinkedTypography href={href} disabled={disabled}>
                        {linkTopic}
                    </LinkedTypography>
                </Grid>
            }
        </Grid>
    )
}
