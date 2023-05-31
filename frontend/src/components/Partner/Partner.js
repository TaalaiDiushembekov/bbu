import React from 'react';
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import CardContent from "@material-ui/core/CardContent";
import {makeStyles} from "@material-ui/core/styles";
import {Swiper, SwiperSlide} from "swiper/react";
import {Autoplay, Pagination} from "swiper";
import { API } from '../../consts';


const useStyles = makeStyles({
    root: {
        maxWidth: 345,
    },
    productImage: {
        objectFit: 'contain'
    }
})
const Partner = ({partner}) => {
    const classes = useStyles()
    return (
        <div>
            <Card>

                {/*<Swiper*/}
                {/*        spaceBetween={20}**/}
                        {/*slidesPerView={1}*/}
                        {/*centeredSlides={true}*/}
                        {/*autoplay={{*/}
                        {/*    delay: 2500,*/}
                        {/*    disableOnInteraction: false,*/}
                        {/*}}*/}
                        {/*loop={true}*/}
                        {/*pagination={{*/}
                        {/*    dynamicBullets: true,*/}
                        {/*}}*/}
                        {/*modules={[Pagination, Autoplay]}*/}
                {/**/}
                {/**/}
                {/*>*/}
                {/*    <SwiperSlide>*/}

                        <Card

                        >

                            <CardActionArea>
                                <CardMedia
                                    component="img"
                                    image=
                                        {`${API}/${partner.image}`}

                                    alt=""
                                    height="140"

                                    className={classes.productImage}
                                    title=""
                                />
                            {/**/}
                            {/**/}
                            </CardActionArea>
                        </Card>
                    {/*</SwiperSlide>*/}


                {/*</Swiper>*/}
            </Card>
        </div>
    );
};

export default Partner;
