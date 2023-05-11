import { Card, CardContent, Typography } from "@material-ui/core";
import React from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

const AllOrganizations = ({ org: orgs }) => {
    return (
        <>
            <Typography variant="h5">Ожидают проверки</Typography>
            {orgs.filter(org => !org.is_checked ).map((org) => (
                <Card style={{maxWidth: '345px'}} key={org._id}> 
                    <CardContent>
                        <Link to={`/organizations/${org._id}`}>
                            <p variant="h6">{org?.org_name}</p>
                        </Link>
                    </CardContent>
                </Card>
            ))}
        </>
    );
};

export default AllOrganizations;
