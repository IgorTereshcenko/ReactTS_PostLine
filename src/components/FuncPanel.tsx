import React, { FC } from 'react'
import MyButton from './UI/button/MyButton'
import PostFilter from './PostFilter'
import MySelect from './UI/select/MySelect'
import filterIcon from '../resurses/icons/filterIcon.svg';
import { ILimitAndPage } from '../pages/Posts';
import '../styles/funcPanel.scss';
import {auth} from '../firebase/firebaseConfig';
import { useAuthState } from 'react-firebase-hooks/auth';

interface IFuncPanelProps {
    limitAndPage:ILimitAndPage;
    setModal:React.Dispatch<React.SetStateAction<boolean>>;
    setLimitAndPage:React.Dispatch<React.SetStateAction<ILimitAndPage>>;
}

const FuncPanel:FC<IFuncPanelProps> = ({setModal,limitAndPage,setLimitAndPage}) => {

    const [user] = useAuthState(auth);
    
    return (
        <div className='funcPanel'>
                <MyButton onClick={() => setModal(true)}>Создать пост</MyButton>
                <PostFilter/>
                <div className="funcPanel__selectWrapper">
                    <MySelect
                        value={limitAndPage.limit}
                        onChange={e => setLimitAndPage({...limitAndPage, limit: e.target.value})}
                        defaultValue='Постов'
                        options={[
                            {value: 5, name: '5'},
                            {value: 10, name: '10'},
                            {value: 25, name: '25'},
                            {value: -1, name: 'все'}
                        ]}/>
                        <img src={filterIcon} alt="filter icon" />
                </div>
                <div className="funcPanel__userEmail">{user?.email}</div>    
            </div>
    )
}

export default FuncPanel;
