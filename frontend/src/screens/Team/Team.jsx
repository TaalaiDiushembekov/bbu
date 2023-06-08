import React from 'react';
import './Team.css';
import { useGetTeamQuery } from '../../redux/team/team.api';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import { API } from '../../consts';

const API_URL = process.env.API_URL
console.log(API_URL)

const Team = () => {
    const {data, isLoading} = useGetTeamQuery()

    const role = JSON.parse(localStorage.getItem('role'))

    const history = useHistory()
    const handleClick = (id) => {
        history.push(`team/${id}`)
    }

    console.log(data)
    if(isLoading)
        return <p>Loading...</p>
    return (
        <div className="ExpertTeam" id="team">
            <div className='container'>
                        
                <div>
                    <h2 className='title'>Команда профессионалов</h2>
                    <p>Специалисты команды "Точка Бюро Бухгалтерских услуг"- это опытные профессионалы в своей сфере, которые выполняют работу под ключ. Помощь опытного бухгалтера на сегодняшний день востребована среди тысяч компаний. Каждая организация нуждается в правильном ведении бухучета. Но только профессиональный бухгалтер сможет правильно вести учет, что является залогом отсутствия проблем с налоговой службой.</p>
                </div>
                <div className="ExpertTeam_box">
                {
                    data?.map((mem) => (  
                        <div onClick={role === 'moderator' ? () => handleClick(mem._id) : null} key={mem._id} className="member_container" style={{background: `url(${API}/${mem.image}) `, 
                        backgroundPosition: 'center'}}>
                            <div className="member_container__inner">
                                <h3>{mem?.name}</h3>
                                <h4>{mem?.position}</h4>
                                <div><h3></h3></div>
                                <p>{mem?.description}</p>
                                {/*<p>Специалист с большим опытом работы в области бухгалтерского учета . Имеет многолетний стаж работы в сфере бухгалтерского учета, она не только оперативно справится с каждодневными рутинными задачами бухгалтера, но и  поможет в решении сложных и нестандартных задач в сфере учета.*/}
                                {/*</p>*/}
                                {/*<button>Read more</button>*/}
                            </div>
                        </div>
                    ))

                }        
                </div>
            </div>
        </div>
    );
};

export default Team;
