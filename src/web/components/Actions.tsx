import React, { CSSProperties } from 'react';
import Button from './forms/Button/Button';
import GithubImg from 'assets/img/Github.png'; 
import { ReactComponent as FileSvg } from 'assets/svg/file.svg';
import { ReactComponent as PeopleSvg } from 'assets/svg/people.svg';
import { ReactComponent as SearchSvg } from 'assets/svg/search.svg';
import { ReactComponent as DeleteSvg } from 'assets/svg/delete.svg';
import { ReactComponent as AddSvg } from 'assets/svg/add.svg';
import { useTreeStore } from 'web/store/useTreeStore';


const style: CSSProperties = {
    display: 'flex',
    width: '100%',
    justifyContent: 'flex-end',
}


const Actions: React.FC = () => {
    
    const { clean } = useTreeStore();
    
    return <div style={style}>
   

    <Button variant="outline" style={{ padding: '5px 10px' }}>
        <a href="https://github.com/DanielCeron-dc/data-base-final-work">
        <img src={GithubImg} alt="code" style = {{width: 30 , height: 30}} />
        </a>
    </Button>
        
    <Button variant="outline" style={{ padding: '5px 10px' }} data-tip data-for='file'>
        <FileSvg height={30} width={30} />
    </Button>

    <Button variant="outline" style={{ padding: '5px 10px' }} data-tip data-for='integrants'>
        <PeopleSvg height={30} width={30} />
    </Button>

    <Button variant="outline" style={{ padding: '5px 10px' }} data-tip data-for='agregar'>
        <AddSvg height = {30} width = {30} />
    </Button>
    <Button variant="outline" style={{ padding: '5px 10px' }} data-tip data-for='buscar'>
        <SearchSvg height = {30} width = {30} />
    </Button>
    <Button variant="outline" style={{ padding: '5px 10px'}} data-tip data-for='eliminar'>
        <DeleteSvg height = {30} width = {30} />
    </Button>
    <Button variant="danger" onClick = {clean}>
        Limpiar
    </Button>
    
</div>}
export default Actions;