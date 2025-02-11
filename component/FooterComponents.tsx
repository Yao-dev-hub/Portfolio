import React from 'react'
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import { Typography } from '@mui/material';

function FooterComponents() {
    return (
        <div className='container' id='footer'>
            <hr />
            <div className="row p-5 justify-content-center text-center align-items-center my-3">
                <div className="col-lg-6 d-flex text-center justify-content-center text-center align-items-center">
                    <Stack direction="column" spacing={2} alignItems="center" justifyContent="center" >
                        <Avatar alt="Remy Sharp" src="/images/me.jpg" sx={{ width: 70, height: 70 }} className='shadow' />
                        <Typography variant="body2" component="h2">
                            Yao Parfait Eric
                        </Typography>
                        <Typography variant="body2" component="h2">
                            © 2025 . Tous droits reservés .
                        </Typography>
                    </Stack>
                </div>
            </div>
        </div>
    )
}

export default FooterComponents