import React, { useEffect } from "react";
import { useParams, useHistory, Link } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import { Box, MenuItem } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Divider from "@material-ui/core/Divider";
import ListItemText from "@material-ui/core/ListItemText";
import { useDispatch, useSelector } from "react-redux";
import { userDetailsAction } from "../redux/actions/userAction.js";
import Spinner from "../components/spinner.js";
import Button from "@material-ui/core/Button";
import UploadInfo from "../components/upload_info.js";
import { userUploadInfoTwoAction } from "../redux/actions/userAction.js";
import Typography from "@material-ui/core/Typography";
import Manager from "../components/manager.js";
import CardContent from "@material-ui/core/CardContent";
import { useGetUserByIdQuery } from "../redux/users/users.api.js";
import UploadInfoTwo from "../components/upload_info_two.js";
import DocumentList from "../components/documentList.jsx";

const UserDetails = () => {
    const { id } = useParams();
    const dispatch = useDispatch();
    const { data: user, isLoading } = useGetUserByIdQuery(id);
    const org = user?.org;
    const docs = org?.org_document;

    if (isLoading) return <Spinner />;
    console.log(docs);
    return (
        <Box style={{ paddingTop: "75px" }}>
            <Typography variant="h4" align="center">
                Данные пользователя
            </Typography>
            <Box display={"grid"} gridTemplateColumns="repeat(12, 1fr)">
                <Box
                    gridColumn={"span 12"}
                    display={"grid"}
                    gridTemplateColumns="repeat(12, 1fr)"
                >
                    <Box gridColumn={"span 4"}>
                        <List>
                            <ListItem alignItems="center">
                                <ListItemText primary={"Наименование"} />
                            </ListItem>
                            <ListItem>
                                <ListItemText primary={"Почта"} />
                            </ListItem>

                            <ListItem>
                                <ListItemText primary={"ИНН"} />
                            </ListItem>

                            <ListItem>
                                <ListItemText primary={"Руководитель"} />
                            </ListItem>

                            <ListItem>
                                <ListItemText
                                    primary={"Паспорт руководителя"}
                                />
                            </ListItem>

                            <ListItem>
                                <ListItemText primary={"Контактный телефон"} />
                            </ListItem>

                            <ListItem>
                                <ListItemText
                                    primary={"Основной вид деятельности"}
                                />
                            </ListItem>
                            <ListItem>
                                <ListItemText
                                    primary={"Гражданско-правовой статус"}
                                />
                            </ListItem>
                            <ListItem>
                                <ListItemText
                                    primary={"Организационно-правовая форма"}
                                />
                            </ListItem>
                        </List>
                    </Box>
                    <Box gridColumn={"span 4"}>
                        <List>
                            <ListItem>
                                <ListItemText primary={org?.org_name} />
                            </ListItem>
                            <ListItem>
                                <ListItemText primary={org.org_email} />
                            </ListItem>

                            <ListItem>
                                <ListItemText
                                    primary={org?.org_social_number}
                                />
                            </ListItem>

                            <ListItem>
                                <ListItemText primary={org?.org_director} />
                            </ListItem>

                            <ListItem>
                                <ListItemText
                                    primary={org?.org_director_passport.series}
                                />
                                <ListItemText
                                    primary={
                                        org?.org_director_passport.authority
                                    }
                                />

                                <ListItemText
                                    primary={org?.org_director_passport.date}
                                />
                            </ListItem>

                            <ListItem>
                                <ListItemText primary={org?.org_phone} />
                            </ListItem>

                            <ListItem>
                                <ListItemText primary={org?.org_activity} />
                            </ListItem>
                            <ListItem>
                                <ListItemText primary={org?.org_civil_status} />
                            </ListItem>
                            <ListItem>
                                <ListItemText primary={org?.org_legal} />
                            </ListItem>
                        </List>
                    </Box>
                    <Box gridColumn={"span 4"}>
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
                        <UploadInfo />
                    </Box>
                </Box>
            </Box>
            <DocumentList docs={docs}/>
        </Box>
    );
};

export default UserDetails;
