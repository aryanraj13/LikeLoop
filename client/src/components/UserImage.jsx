import {Box} from "@mui/material";
import baseUrl from "helper";

const UserImage = ({image,size="60px"})=>{
    return(
        <Box width = {size} height ={size}>
            <img
            style = {{objectFit:"cover",bordrRadius:"50%"}}
            width={size}
            height={size}
            alt="user"
            src={`${baseUrl}/assets/${image}`}
            />
        </Box>
    );
}

export default UserImage;