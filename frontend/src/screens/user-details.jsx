import React, { useEffect } from "react";
import { useParams, useHistory, Link } from "react-router-dom";
import { Box, MenuItem } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import Spinner from "../components/spinner.js";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { useGetUserByIdQuery } from "../redux/users/users.api.js";
import DocumentList from "../components/documentList.jsx";
import RegisterUser from "./RegisterUser/RegisterUser.js";

const UserDetails = () => {
    const { id } = useParams();
    const dispatch = useDispatch();
    const { data: user, isLoading } = useGetUserByIdQuery(id);
    const org = user?.org;
    const docs = org?.org_document;

    if (isLoading) return <Spinner />;
    console.log(org);
    return (
        <Box>
            <Typography variant="h4" align="center"></Typography>
            <Box display={"grid"} gridTemplateColumns="repeat(12, 1fr)">
                <Box
                    gridColumn={"span 12"}
                    display={"grid"}
                    gridTemplateColumns="repeat(12, 1fr)"
                >
                    <Box gridColumn={"span 4"}>
                        <RegisterUser
                            type={"patch"}
                            id={org._id}
                            title={"Данные пользователя"}
                            {...org}
                        />
                    </Box>
                    <Box gridColumn={"span 8"} style={{paddingTop: '70px'}}>
                        <Button
                            type="submit"
                            // fullWidth
                            variant="contained"
                            color="primary"
                            // justifyContent="center"
                            component={Link}
                            to="/admin"
                        >
                            назад
                        </Button>
                        <DocumentList docs={docs} />
                    </Box>
                </Box>
            </Box>
        </Box>
    );
};

export default UserDetails;
