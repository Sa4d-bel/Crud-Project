import '../Styles/AllStyles.css'
import ConfirmationMessage from './ConfirmationMessage';
import CostumersData from './CostumersData';
import MyForm from './MyForm';

export default function Acceuil(){
    return <>
    <div className='Container'>
        <MyForm />
        <CostumersData />
         <ConfirmationMessage />
    </div>
    </>;
}