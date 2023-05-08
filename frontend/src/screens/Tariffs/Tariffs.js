import React from 'react';
import "./Tariffs.css";
import { useGetTariffsQuery } from '../../redux/tariff.api';

const Tariffs = () => {

    const {data, isLoading} = useGetTariffsQuery();


    return (
        <div>
            <div className="tariffs" id="tariffs">
                <div className='container'>
                    <div className="tariffs-one">
                        <div>
                            <h2>Тарифы</h2>
                            {/*<p>За спиной Своего человека — десятки специалистов разных направлений, которые берут на себя:</p>*/}
                        </div>
                        <div  className="tariffs-two">
                            {isLoading ? 'loading...' : (
                                data.map(tarif => (
                                    <div className="tariffs-three" key={tarif._id}>
                                        <h2>{tarif.name}</h2>
                                        {
                                            tarif?.services.map((service)=> (
                                                <ul key={service}>
                                                    <li>{service}</li>
                                                </ul>
                                            ))
                                        }
                                    </div>
                                ))
                            ) }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Tariffs;
