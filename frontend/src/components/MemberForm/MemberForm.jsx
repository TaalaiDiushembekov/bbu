import React, { useEffect, useState } from "react";
import { Box, Card, Grid, Typography } from "@material-ui/core";
import Spinner from "../../components/spinner";
import TextField from "../../components/UI/Form/TextField/TextField";
import Button from "../../components/UI/Button/Button";
import FileInput from "../../components/UI/Form/FileInput/FileInput";
import {
    useCreateMemberMutation,
    useDeleteMemberMutation,
    useUpdateMemberMutation,
} from "../../redux/team/team.api";
import { useHistory, useParams } from "react-router-dom/cjs/react-router-dom.min";

const MemberForm = ({ id, type, data, isLoading }) => {

    const history = useHistory();

    const [updateMember, result] = useUpdateMemberMutation();
    const [createMember] = useCreateMemberMutation();
    const [deleteMember] = useDeleteMemberMutation();

    const initState = {
        name: "",
        description: "",
        position: "",
        order: "",
        image: "",
    };

    const [member, setMember] = useState(initState);

    const [image, setImage] = useState({
        image: member?.image,
        imageFile: null,
    });

    useEffect(() => {
        if (data && !isLoading) {
            setMember((prevState) => {
                const newState = { ...prevState };

                Object.keys(data).forEach((key) => {
                    if (newState.hasOwnProperty(key)) {
                        newState[key] = data[key];
                    }
                });
                return newState;
            });
        }
    }, [isLoading]);

    const inputChangeHandler = (e) => {
        const { name, value } = e.target;
        setMember((prev) => ({ ...prev, [name]: value }));
    };

    const clickHandler = () => {
        const fd = new FormData();
        if (image.imageFile !== null) {
            fd.append("image", image.imageFile, image.imageFile?.name);
        }
        fd.append("name", member.name);
        fd.append("position", member.position);
        fd.append("order", member.order);
        fd.append("description", member.description);

        if (type === "update") updateMember({ id, data: fd });
        if (type === "create") createMember(fd);


        history.push('/team')
    };

    const deleteHandler = (id) => {
        history.push('/team')
        deleteMember(id)
    }

    const fileChangeHandler = (e) => {
        if (e.target.files.length !== 0) {
            const file = e.target.files[0];
            const reader = new FileReader();

            reader.onload = (e) => {
                setImage((prevState) => {
                    return {
                        ...prevState,
                        image: e.target.result,
                    };
                });
            };
            reader.readAsDataURL(e.target.files[0]);
            setImage((prevState) => {
                return {
                    ...prevState,
                    imageFile: file,
                };
            });
            console.log(file);
        }
    };

    return (
        <div style={{ paddingTop: "70px" }}>
            <Typography variant="h4" component="h3">
                {type === 'update' ? 'Изменить сотрудника' : type === 'create' ? 'Создать сотрудника' : null }
            </Typography>
            {isLoading ? (
                <Spinner />
            ) : (
                <Box ml={3} mt={3}>
                    <Grid container>
                        <Card style={{ padding: "10px" }}>
                            <div className="input-wrapper">
                                <TextField
                                    type="text"
                                    name="name"
                                    value={member?.name}
                                    onChange={inputChangeHandler}
                                    label="Имя"
                                    required={true}
                                />
                            </div>
                            <div className="input-wrapper">
                                <TextField
                                    field="textarea"
                                    type="text"
                                    name="description"
                                    value={member?.description}
                                    onChange={inputChangeHandler}
                                    label="Описание"
                                    required={true}
                                />
                            </div>
                            <div className="input-wrapper">
                                <TextField
                                    type="text"
                                    name="position"
                                    value={member?.position}
                                    onChange={inputChangeHandler}
                                    label="Должность"
                                    required={true}
                                />
                            </div>
                            <div className="input-wrapper">
                                <TextField
                                    type="text"
                                    name="order"
                                    value={member?.order}
                                    onChange={inputChangeHandler}
                                    label="Очередь в списке"
                                    required={true}
                                />
                            </div>
                            <div
                                style={{
                                    display: "flex",
                                    justifyContent: "center",
                                }}
                            >
                                <Button
                                    onClick={clickHandler}
                                    type="submit"
                                    title={
                                        type === "create"
                                            ? "Добавить"
                                            : "Сохранить"
                                    }
                                    className="register-btn"
                                />

                                {type === "update" ? (
                                    <Button
                                        onClick={() => deleteHandler(id)}
                                        type="submit"
                                        title="Удалить"
                                        className="register-btn"
                                    />
                                ) : null}
                            </div>
                        </Card>
                        {type !== "create" ? (
                            <Card style={{ padding: "10px" }}>
                                <p>Текущая фотография:</p>
                                <img
                                    src={`http://localhost/backend/api/v1/${member.image}`}
                                    width={"300px"}
                                    alt=""
                                />
                            </Card>
                        ) : null}
                        {type === "create" ? (
                            <Card style={{ padding: "10px" }}>
                                <p>Новая фотография:</p>
                                <div>
                                    <img
                                        src={image.image}
                                        width={"400px"}
                                        alt=""
                                    />
                                </div>
                                <FileInput
                                    name="image"
                                    onChange={fileChangeHandler}
                                    value={image.image}
                                    accept={".png, .jpg, .jpeg, .pdf"}
                                />
                                <img
                                    src={`http://localhost/backend/api/v1/${member.image}`}
                                    width={"300px"}
                                    alt=""
                                />
                            </Card>
                        ) : null}
                    </Grid>
                </Box>
            )}
        </div>
    );
};

export default MemberForm;
