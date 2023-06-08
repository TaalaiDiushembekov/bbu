import React, { useEffect } from 'react';
import "./Tariffs.css";
import { useGetTariffsQuery } from '../../redux/tariffs/tariff.api.js';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import { useDispatch } from 'react-redux';
import { setTariffs } from '../../redux/tariffs/tariff.slice';

const Tariffs = () => {

    const {data, isLoading} = useGetTariffsQuery();
    const dispatch = useDispatch()
    useEffect(()=> {
        if(!isLoading)
            dispatch(setTariffs(data))
    }, [isLoading])
    const role = JSON.parse(localStorage.getItem('role'))
    const history = useHistory()
    const handleClick = (id) => {
        history.push(`tariffs/${id}`)
    }

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
                                data?.map(tarif => (
                                    <div className="tariffs-three" key={tarif._id} onClick={role === 'moderator' ? () => handleClick(tarif._id) : null}>
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
